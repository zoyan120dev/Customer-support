import React from "react";
import { toast } from "react-toastify";

function CustomerCard({
  customreItms,
  handelCount,
  setPurchesItems,
  purchesItems,
  setCustomersData,
  customersData,
}) {
  const RemoveCustomer = (item) => {
    const updated = customersData.filter((c) => c.id !== item.id);
    setCustomersData(updated);
  };

  const HandelCard = () => {
    toast("in-Progress");
    handelCount();
    // push extra property for remove support
    setPurchesItems([
      ...purchesItems,
      { ...customreItms, RemoveCustomer: RemoveCustomer },
    ]);
  };

  return (
    <div
      className="text-black p-10 bg-white shadow rounded-xl cursor-pointer"
      onClick={() => HandelCard()}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">{customreItms.title}</h2>
        <div
          className={`px-3 py-2 rounded-3xl ${
            customreItms.status === "Open" ? "bg-green-300" : "bg-yellow-200"
          }`}
        >
          <span className="text-lg font-medium">{customreItms.status}</span>
        </div>
      </div>
      <p className="text-gray-500 leading-tight py-2">
        {customreItms.description}
      </p>
      <div className="flex justify-between items-center pt-5">
        <div className="flex space-x-2">
          <p className="text-gray-500 text-lg">{customreItms.ticketNumber}</p>
          <span
            className={` font-bold text-xl ${
              customreItms.priority === "High"
                ? "text-red-500"
                : "text-yellow-400"
            }`}
          >
            {customreItms.priority}
          </span>
        </div>

        <div className="flex space-x-2">
          <p className="text-gray-500 text-lg">{customreItms.customer}</p>
          <p className="flex space-x-2">
            <img src="/time.png" alt="" />{" "}
            <span className="text-gray-500 text-lg">
              {customreItms.createdAt}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;

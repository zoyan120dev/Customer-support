import React, { use, useState } from "react";
import CustomerCard from "./CustomerCard/CustomerCard";
import SetTaskStatus from "./SetTaskStatus";
import { toast } from "react-toastify";
import Resolve from "./Resolve/Resolve";

function CustomerTicktes({
  customerPromise,
  handelCount,
  purchesItems,
  setPurchesItems,
  count,
  setCount,
  resolveCount,
  setResolbveCount,
  RemoveButtonData,
}) {
  const customers = use(customerPromise);
  const [customersData, setCustomersData] = useState(customers);
  const [ClikedButton, setClikedButton] = useState(false);

  const handelclikedButton = () => {
    setClikedButton(true);
    if (count === 0) {
      return;
    }
    toast("Completed");
    setCount(count - 1);
    setResolbveCount(resolveCount + 1);
  };

  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        <div>
          <h1 className="text-2xl text-black font-bold">Customer Tickets</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 py-4 gap-5">
          <div className="col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {customersData.map((customreItms) => (
                <CustomerCard
                  key={customreItms.id}
                  resolveCount={resolveCount}
                  purchesItems={purchesItems}
                  setPurchesItems={setPurchesItems}
                  handelCount={handelCount}
                  customreItms={customreItms}
                  setCustomersData={setCustomersData}
                  customersData={customersData}
                />
              ))}
            </div>
          </div>
          <div className="col-span-3">
            <SetTaskStatus
              RemoveButtonData={RemoveButtonData}
              handelclikedButton={handelclikedButton}
              ClikedButton={ClikedButton}
              purchesItems={purchesItems}
            />
            <Resolve ClikedButton={ClikedButton} items={purchesItems} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerTicktes;

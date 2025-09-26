import React, { use } from "react";
import CustomerCard from "./CustomerCard/CustomerCard";

function CustomerTicktes({ customerPromise }) {
  const customers = use(customerPromise);
  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-black font-bold">Customer Tickets</h1>
          <h1 className="text-2xl text-black font-bold">Task Status</h1>
        </div>
        <div className="grid grid-cols-12 py-4 gap-5">
          <div className="col-span-9">
            <div className="grid grid-cols-2 gap-5">
                {customers.map((customreItms) => (
               <CustomerCard customreItms={customreItms} />
              ))}
            </div>
          </div>
          {/* ritght side */}
           <div className="col-span-3 bg-white rounded-2xl">

           </div>
        </div>
      </div>
    </>
  );
}

export default CustomerTicktes;

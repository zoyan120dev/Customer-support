import React, { use } from "react";
import CustomerCard from "./CustomerCard/CustomerCard";

function CustomerTicktes({ customerPromise , handelCount }) {
  const customers = use(customerPromise);
  


  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-black font-bold">Customer Tickets</h1>
          <h1 className="text-2xl text-black font-bold">Task Status</h1>
        </div>
        <div className="grid grid-cols-1   md:grid-cols-3 lg:grid-cols-12 py-4 gap-5">
          <div className="col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {customers.map((customreItms) => (
               <CustomerCard handelCount={handelCount} customreItms={customreItms} />
              ))}
            </div>
          </div>
          {/* ritght side */}
           <div className="col-span-3">
                 <div className="bg-white shadow rounded p-3">
                    <h1 className="text-xl font-bold text-black mb-2 w-[300px]">Payment Failed - Card Declined</h1>
                    <button className="btn btn-success w-full text-white p-3 text-xl">Complete</button>
                 </div>
           </div>
        </div>
      </div>
    </>
  );
}

export default CustomerTicktes;

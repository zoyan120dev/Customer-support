import React, { use, useState } from "react";
import CustomerCard from "./CustomerCard/CustomerCard";
import SetTaskStatus from "./SetTaskStatus";
import { toast } from "react-toastify";
import Resolve from "./Resolve/Resolve";

function CustomerTicktes({ customerPromise , handelCount , purchesItems , setPurchesItems , count  ,  setCount , resolveCount , setResolbveCount ,  RemoveButtonData , RemoveCardData }) {
  const customers = use(customerPromise);
  const [ClikedButton , setClikedButton] = useState(false);

  const handelclikedButton = () => {
    setClikedButton[true]
     if(count === 0){
        return;
     }
    toast('Completed')
    setCount(count - 1)
    
    const CountUp = resolveCount + 1;
    setResolbveCount(CountUp)
  }




  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        <div>
          <h1 className="text-2xl text-black font-bold">Customer Tickets</h1>
        </div>
        <div className="grid grid-cols-1   md:grid-cols-3 lg:grid-cols-12 py-4 gap-5">
          <div className="col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {customers.map((customreItms) => (
               <CustomerCard RemoveCardData={RemoveCardData}  resolveCount={resolveCount} purchesItems={purchesItems} setPurchesItems={setPurchesItems} handelCount={handelCount} customreItms={customreItms} />
              ))}
            </div>
          </div>
          {/* ritght side */}
           <div className="col-span-3">
                <SetTaskStatus  RemoveButtonData={RemoveButtonData}  handelclikedButton={handelclikedButton} ClikedButton={ClikedButton} purchesItems={purchesItems}/>
                <Resolve ClikedButton={ClikedButton} items={purchesItems}/>
           </div>
        </div>
      </div>
    </>
  );
}

export default CustomerTicktes;

import { Suspense, useState } from "react";
import HeroArea from "./Component/HeroArea";
import NavbarArea from "./Component/Navbar";
import CustomerTicktes from "./Component/CustomerTicktes";
import Footer from "./FooterSection/Footer";
import { toast, ToastContainer } from "react-toastify";

const fetchCustomer = async () => {
  const res = await fetch("/customer.json");
  return res.json();
};

const customerPromise = fetchCustomer();

function App() {
  const [count, setCount] = useState(0);
  const [purchesItems, setPurchesItems] = useState([]);
  const [puchesButton , setPurchesButton] = useState([]);
  const [resolveCount, setResolbveCount] = useState(0);

  const handelCount = () => {
    let countAdd = count + 1;
    setCount(countAdd);
  };

  const RemoveButtonData = (Data) => {
    const Filterter = purchesItems.filter((dataItems) => dataItems.id !== Data.id)
    setPurchesItems(Filterter)
  };
 

 


  return (
    <>
      <NavbarArea />
      <HeroArea count={count} resolveCount={resolveCount} />
      <Suspense
        fallback={
          <span className="loading loading-bars loading-xl text-black"></span>
        }
      >
        <CustomerTicktes setPurchesButton={setPurchesButton} puchesButton={puchesButton} RemoveButtonData={RemoveButtonData}  resolveCount={resolveCount}  setResolbveCount={setResolbveCount}   setCount={setCount}   count={count} purchesItems={purchesItems}
          setPurchesItems={setPurchesItems}
          handelCount={handelCount}
          customerPromise={customerPromise}
        />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

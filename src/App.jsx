import { Suspense, useState } from "react"
import HeroArea from "./Component/HeroArea"
import NavbarArea from "./Component/Navbar"
import CustomerTicktes from "./Component/CustomerTicktes"
import Footer from "./FooterSection/Footer"
  import { ToastContainer } from 'react-toastify';

const fetchCustomer= async() => {
    const res = await fetch('/customer.json')
    return  res.json()
}

 const customerPromise = fetchCustomer()


function App() {

   
  const [count , setCount] = useState(0);

  const handelCount = () => {
    let countAdd  = count + 1;
    setCount(countAdd)
  }


  return (
    <>
       <NavbarArea/>
       <HeroArea  count={count}/>
      <Suspense fallback={<span className="loading loading-bars loading-xl text-black"></span>}>
            <CustomerTicktes  handelCount={handelCount} customerPromise={customerPromise}/>
      </Suspense>
      <Footer/>
       <ToastContainer />
    </>
  )
}

export default App

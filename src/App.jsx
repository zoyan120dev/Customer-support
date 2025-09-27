import { Suspense } from "react"
import HeroArea from "./Component/HeroArea"
import NavbarArea from "./Component/Navbar"
import CustomerTicktes from "./Component/CustomerTicktes"
import Footer from "./FooterSection/Footer"

const fetchCustomer= async() => {
    const res = await fetch('/customer.json')
    return  res.json()
}

function App() {

  const customerPromise = fetchCustomer()

  return (
    <>
       <NavbarArea/>
       <HeroArea/>
      <Suspense fallback={<span className="loading loading-bars loading-xl text-black"></span>}>
            <CustomerTicktes customerPromise={customerPromise}/>
      </Suspense>
      <Footer/>
    </>
  )
}

export default App

import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-black mt-5 w-full p-10">
        <div className="max-w-[1300px] mx-auto grid grid-cols-12  items-center gap-10">
          <div className="col-span-4">
            <h1 className="text-3xl font-bold p-1 ">CS — Ticket System</h1>
            <p className="text-gray-500 text-lg ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="col-span-2 space-y-3 ">
            <h1 className="text-3xl font-bold">Company</h1>
            <li className="list-none text-lg">
              <a href="#" className="text-gray-400">About Us</a>
            </li>
            <li className="list-none text-lg">
              <a href="#" className="text-gray-400">Our Mission</a>
            </li>
            <li className="list-none text-lg">
              <a href="#" className="text-gray-400">Contact Saled</a>
            </li>
          </div>

           <div className="col-span-2 space-y-3">
            <h1 className="text-3xl font-bold">Services</h1>
            <li className="list-none text-lg">
              <a href="#" className="text-gray-400">Products & Services</a>
            </li>
            <li className="list-none text-lg">
              <a href="#" className="text-gray-400">Customer Stories</a>
            </li>
            <li className="list-none text-lg">
              <a href="#" className="text-gray-400">Download Apps</a>
            </li>
          </div>

           <div className="col-span-2 space-y-3">
            <h1 className="text-3xl font-bold">Information</h1>
            <li className="list-none text-lg">
              <a href="#" className="text-gray-400">Privacy Policy</a>
            </li>
            <li className="list-none text-lg">
              <a href="#" className="text-gray-400">Terms & Conditions</a>
            </li>
            <li className="list-none text-lg">
              <a href="#" className="text-gray-400">Join Us</a>
            </li>
          </div>

          <div className="col-span-2 space-y-2">
            <h1 className="text-3xl font-bold">Information</h1>
           <div className="flex gap-2 items-center">
           <div>
             <img src="https://i.ibb.co.com/j9JyfVKv/Group-10.png" alt="" />
           </div>
             <li className="list-none text-lg">
              <a href="#" className="text-gray-400" >Privacy Policy</a>
            </li>
           </div>
             <div className="flex gap-2 items-center">
           <div>
             <img src="https://i.ibb.co.com/j9JyfVKv/Group-10.png" alt="" />
           </div>
             <li className="list-none text-lg">
              <a href="#" className="text-gray-400" >Privacy Policy</a>
            </li>
           </div>

           <div className="flex gap-2 items-center">
           <div>
             <img src="https://i.ibb.co.com/j9JyfVKv/Group-10.png" alt="" />
           </div>
             <li className="list-none text-lg">
              <a href="#" className="text-gray-400" >Privacy Policy</a>
            </li>
           </div>
           <div className="flex gap-2 items-center">
           <div>
             <img src="https://i.ibb.co.com/j9JyfVKv/Group-10.png" alt="" />
           </div>
             <li className="list-none text-lg">
              <a href="#" className="text-gray-400" >Privacy Policy</a>
            </li>
           </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Footer;

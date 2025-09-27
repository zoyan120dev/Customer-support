import React from "react";

const NavItems = ['Home', "FAQ", 'Change log', 'Blog', 'Download', 'Contact']

function NavbarArea() {
  return (
    <>
    <div className="bg-[#ffff] p-5 shadow sticky top-0 max-w-full">
         <div className="max-w-[1300px] mx-auto flex justify-between items-center">
        <div>
            <a href="#" className="font-bold md:text-2xl text-lg text-black">CS — Ticket System</a>
        </div>
        <div className="flex gap-20 items-center">
            <ul className="flex space-x-5 items-center hidden md:flex">
                {
                    NavItems.map(items => (
                        <li key={items.id} className="text-black text-lg font-medium transition-all hover:text-blue-500"><a href="#">{items}</a></li>
                    ))
                }
            </ul>
            <button className="px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 cursor-pointer"> + New Ticket</button>
        </div>
     </div>
    </div>
    </>
  );
}

export default NavbarArea;

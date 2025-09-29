import React from 'react';
import { FiCheck } from "react-icons/fi";

function ResolveCard({ purchesitems }) {
  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <h1 className="text-gray-900 text-2xl font-medium w-full">{purchesitems.title}</h1>
      <h1 className='text-green-500 text-lg flex gap-2 items-center'>Complete <FiCheck /> </h1>
    </div>
  );
}

export default ResolveCard;

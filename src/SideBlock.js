import React from 'react';

function SideBlock({ title, items }) {
  return (
    <div className="w-[350px] h-[474px] bg-gray-700 rounded-xl p-5 shadow-md flex flex-col justify-start items-center">
      <div className="w-full px-4 py-2 mb-5 text-xl font-bold text-center bg-blue-500 rounded-full">
        {title}
      </div>

      <div className="w-full mb-2">
        <div className="flex justify-around mb-1 font-bold text-white">
          <span>SYMBOL</span>
          <span>%CHANGE</span>
        </div>

        <ul className="w-full h-[340px] overflow-y-auto text-white list-none no-scroll">
          {items.map((item, index) => (
            <li 
              key={index} 
              className="flex justify-between px-2 py-2 border-none"
            >
              <span className="flex-1 text-left">{item.name}</span>
              <span className="flex-1 text-right">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBlock;

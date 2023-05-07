// App.tsx

import React, { useState } from 'react';
import './App.css';
import SandwichComponent from './SandwichComponent';
import { HamSandwich, VeggieSandwich, Sandwich } from './Sandwich';

const App: React.FC = () => {
  const [sandwich, setSandwich] = useState<Sandwich | null>(null);

  const handleHamSandwichClick = () => {
    const hamSandwich = new HamSandwich();
    setSandwich(hamSandwich);
  };

  const handleVeggieSandwichClick = () => {
    const veggieSandwich = new VeggieSandwich();
    setSandwich(veggieSandwich);
  };

  return (
    <div className="App">
      {/* hero section   */}
       <h1 className="text-black font-bold text-center text-3xl mt-8">Template Method Sandwich Shop</h1>
      <div className="hero-section p-8">
          <div className="my-div">
      {/* Your content here */}
    </div>
       
        <p className="text-black font-bold text-center py-8 text-2xl">Every Sandwich Comes With A Side Of Inheritance</p>
      </div>
      {/* hero section   */}
      {/* food section   */}
      <div>
       
        </div>
      <div className="w-full flex items-center justify-center">

        <div className="card m-4 my-shadow p-4 bg-[#FFF]">
          <div className="w-full  flex justify-center">
          <img className="w-64 bg[#000]" src={process.env.PUBLIC_URL + "/ham_sandwich.png"} />
          </div>
          <p>Ham Sandwich</p>
          <p>$10.99</p>
       <button className="bg-[#999] p-2 rounded-md" onClick={handleHamSandwichClick}>Prepare Ham Sandwich</button>
        </div>
        
        <div className="card m-4 my-shadow p-4 bg-[#FFF]">
          <div className="w-full  flex justify-center">
          <img className="w-64 bg[#000]" src={process.env.PUBLIC_URL + "/veggie_sandwich.png"} />
          </div>
          <p className="">Veggie Sandwich</p>
          <p>$10.99</p>
        <button className="bg-[#999] p-2 rounded-md" onClick={handleVeggieSandwichClick}>Prepare Veggie Sandwich</button>
      </div>
      </div>
        {/* food section   */}

      {/* display section     */}
      <div className="w-full flex justify-center">
      <div className="order-machine h-32  bg-[#222] w-3/6">
        <p className="text-white">Order Screen</p>
       {sandwich && (
          <div className="">
            <h2>Preparing a {sandwich.constructor.name}:</h2>
            <ul>
              {sandwich.finalMethod().map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}
        </div>
        </div>
      {/* display section     */}
      
      {/* footer  */}
      <div className="flex justify-between mt-8">
        <div className="p-4">
        <p className=" text-3xl italic">Built by Preston Blake & Manohar Mendan</p>
        <p className=" text-2xl italic">CSCI 630 Software Design & Maintenance</p>
        </div>
        <div>
        <img className="h-64" src={process.env.PUBLIC_URL + "/robot.png"} />
        </div>

       </div>
        {/* footer  */}
    </div>
  );
};

export default App;
// App.tsx

import React, { useState, useEffect } from 'react';
import './App.css';
import SandwichComponent from './SandwichComponent';
import { HamSandwich, VeggieSandwich, Sandwich } from './Sandwich';
import { TypeAnimation } from 'react-type-animation';

const App: React.FC = () => {

  
    const [isOrdering, setIsOrdering] = useState(false);
  const [sandwich, setSandwich] = useState<Sandwich | null>(null);

  const handleHamSandwichClick = () => {
    const hamSandwich = new HamSandwich();
    setSandwich(hamSandwich);
  };

  const handleVeggieSandwichClick = () => {
    const veggieSandwich = new VeggieSandwich();
    setSandwich(veggieSandwich);
  };
  

  const handleOrderClick = () => {
    setIsOrdering(true);
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
          <p className=" text-xl font-bold">Ham Sandwich</p>
          <p>$10.99</p>
       <button className="bg-[red] py-2 px-4 text-white font-bold rounded-md" onClick={handleHamSandwichClick}>Prepare Ham Sandwich</button>
        </div>
        
        <div className="card m-4 my-shadow p-4 bg-[#FFF]">
          <div className="w-full  flex justify-center">
          <img className="w-64 bg[#000]" src={process.env.PUBLIC_URL + "/veggie_sandwich.png"} />
          </div>
          <p className=" text-2xl font-bold ">Veggie Sandwich</p>
          <p className="my-2 text-2xl font-bold">$10.99</p>
        <button className="bg-[red] p-2 text-white font-bold rounded-md" onClick={handleVeggieSandwichClick}>Prepare Veggie Sandwich</button>
      </div>
      </div>
        {/* food section   */}

      {/* display section     */}
      <div className="w-full flex justify-center">
      <div className="order-machine p-4 bg-[#222] w-3/6">
       
       {sandwich && (
            <div className="">
              <div className="text-white text-xl">
                <TypeAnimation
      sequence={[
          'Ordering...\n', // Types 'One'
          100, // Waits 1s
          `Ordering... \n Preparing a ${sandwich.constructor.name}:`, // Deletes 'One' and types 'Two'
          400, // Waits 2s
          `Ordering... \n Preparing a ${sandwich.constructor.name}: ${sandwich.finalMethod().map((step: string, index: number) => step).join('\n')}`,
          () => {
            console.log('Sequence completed'); // Place optional callbacks anywhere in the array
          }
        ]}
      wrapper="div"
      cursor={false}
                  repeat={0}
                  className={"display-linebreak"}
      style={{ fontSize: '2em', display: 'inline-block' }}
                />
                
                </div>
               
            
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
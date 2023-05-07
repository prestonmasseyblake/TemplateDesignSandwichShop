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
      <div className="hero-section p-8">

        <h1 className="text-black font-bold text-center text-3xl">Template Method Sandwich Shop</h1>
        <p className="text-black font-bold text-center py-8 text-2xl">Every Sandwich Comes With A Side Of Inheritance</p>
      </div>
      {/* hero section   */}
      {/* food section   */}
      <div className="flex">
        <div className="card m-4">
          <p>Ham Sandwich</p>
          <p>$10.99</p>
       <button className="bg-[#999] p-2 rounded-md" onClick={handleHamSandwichClick}>Prepare Ham Sandwich</button>
      </div>
        <div className="card m-4">
          <p>Veggie Sandwich</p>
          <p>$10.99</p>
        <button className="bg-[#999] p-2 rounded-md" onClick={handleVeggieSandwichClick}>Prepare Veggie Sandwich</button>
      </div>
      </div>
        {/* food section   */}

      {/* display section     */}
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
        {/* display section     */}
       
      
    </div>
  );
};

export default App;
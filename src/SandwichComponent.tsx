// SandwichComponent.tsx

import React from 'react';
// import { HamSandwich, VeggieSandwich } from './Sandwich';
import { HamSandwich, VeggieSandwich } from './Sandwich';

type SandwichComponentProps = {
  sandwich: HamSandwich | VeggieSandwich;
};

const SandwichComponent: React.FC<SandwichComponentProps> = ({ sandwich }) => {
  const preparationSteps = sandwich.finalMethod();

  return (
    <div>
      <h2>Preparing a {sandwich.constructor.name}:</h2>
      <ul>
        {preparationSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default SandwichComponent;
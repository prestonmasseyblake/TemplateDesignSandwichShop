// Sandwich.ts

export abstract class Sandwich {
  finalMethod(): string[] {
    const steps: string[] = [];
    steps.push(this.openBread());
    steps.push(...this.addMainIngredient());
    steps.push(...this.addCondiments());
    steps.push(this.closeBread());
    return steps;
  }

  openBread(): string {
    return "Open the bread.";
  }

  closeBread(): string {
    return "Close the bread.";
  }

  abstract addMainIngredient(): string[];
  abstract addCondiments(): string[];
}

// this is the HamSandwich Class


export class HamSandwich extends Sandwich {
  addMainIngredient(): string[] {
    return ["Add ham slices."];
  }

  addCondiments(): string[] {
    return ["Add lettuce, tomato, and mayo."];
  }
}
// this is the End HamSandwich Class

// this is the Veggie Sandwich Class

export class VeggieSandwich extends Sandwich {
  addMainIngredient(): string[] {
    return ["Add avocado and cucumber."];
  }

  addCondiments(): string[] {
    return ["Add lettuce, tomato, and hummus."];
  }
}

//this is the end of the Veggie Sandwich Class
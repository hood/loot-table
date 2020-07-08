import Item from "./item";
import { randomInRange } from "./utils";

export class LootTable {
  items: Item[];

  constructor() {
    this.items = [];
  }

  get totalWeight(): number {
    return this.items
      .map((item: Item) => item.dropRate)
      .reduce((total: number, sum: number) => (total += sum));
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  dropItem(): Item {
    // Extract a random integer between 0 and "totalWeight"
    let randomNumber: number = randomInRange(0, this.totalWeight);

    // Pick the item to drop
    for (const item of this.items)
      if (randomNumber <= item.dropRate) return item;
      else randomNumber -= item.dropRate;
  }
}

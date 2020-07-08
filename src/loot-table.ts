import LootItem from "./loot-item";
import { randomInRange } from "./utils";

export class LootTable {
  items: LootItem[];

  constructor() {
    this.items = [];
  }

  get totalWeight(): number {
    return this.items
      .map((item: LootItem) => item.dropRate)
      .reduce((total: number, sum: number) => (total += sum));
  }

  addItem(item: LootItem): void {
    this.items.push(item);
  }

  dropItem(): Pick<LootItem, "item"> {
    // Extract a random integer between 0 and "totalWeight"
    let randomNumber: number = randomInRange(0, this.totalWeight);

    // Pick the item to drop
    for (const item of this.items)
      if (randomNumber <= item.dropRate) return item.item;
      else randomNumber -= item.dropRate;
  }
}

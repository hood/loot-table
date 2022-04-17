import * as util from "util";
import { randomInRange } from "./utils";
import LootItem from "./loot-item";

export class LootTable<T> {
  private items: LootItem<T>[];

  constructor() {
    this.items = [];
  }

  public get totalWeight(): number {
    return this.items.reduce(
      (total: number, item: LootItem<T>) => total + item.dropRate,
      0
    );
  }

  public addItem(item: T, dropRate: number): void {
    if (
      this.items.some((lootItem: LootItem<T>) =>
        util.isDeepStrictEqual(lootItem.item, item)
      )
    )
      throw new Error("Cannot insert duplicate item.");

    this.items.push(new LootItem(item, dropRate));
  }

  public dropItem(): LootItem<T>["item"] {
    let randomNumber: number = randomInRange(0, this.totalWeight);

    for (const item of this.items)
      if (randomNumber <= item.dropRate) return item.item;
      else randomNumber -= item.dropRate;
  }
}

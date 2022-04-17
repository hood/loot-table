import { v5 as uuid } from "uuid";

export default class LootItem<T> {
  readonly id: string;
  item: T;
  dropRate: number;

  constructor(item: T, dropRate: number) {
    this.item = item;
    this.dropRate = dropRate;
    this.id = uuid(JSON.stringify(item), uuid.URL);
  }
}

import { v5 as uuid } from "uuid";

export default class LootItem {
  private readonly id: string;
  item: any;
  dropRate: number;

  constructor(item: any, dropRate: number) {
    this.item = item;
    this.dropRate = dropRate;
    this.id = uuid(JSON.stringify(item), uuid.URL);
  }
}

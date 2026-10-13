export default class LootItem<T> {
  readonly id: number;
  item: T;
  dropRate: number;

  constructor(item: T, dropRate: number) {
    this.item = item;
    this.dropRate = dropRate;
    this.id = Math.ceil(Math.random() * Date.now());
  }
}

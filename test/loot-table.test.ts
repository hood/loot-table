import { LootTable } from "../src/loot-table";
import LootItem from "../src/loot-item";

describe("LootTable", () => {
  test("LootTable is defined", () => {
    expect(LootTable).toBeDefined();
  });

  test("the loot table's total weight is calculated correctly", () => {
    const lootTable: LootTable = new LootTable();

    const items: LootItem[] = [
      { id: "1", item: "Item one", dropRate: 10 },
      { id: "2", item: "Item two", dropRate: 40 },
    ];

    lootTable.addItem(items[0]);
    lootTable.addItem(items[1]);

    expect(lootTable.totalWeight).toBe(
      items.reduce((total, item) => (total += item.dropRate), 0)
    );
  });
});

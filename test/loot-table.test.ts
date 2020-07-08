import { LootTable } from "../src/loot-table";

describe("LootTable", () => {
  it("should be defined", () => {
    expect(LootTable).toBeDefined();
  });

  it("should calculate total weight correctly", () => {
    const lootTable: LootTable = new LootTable();

    const itemsPayload: any[] = [
      { item: "Item one", dropRate: 10 },
      { item: "Item two", dropRate: 40 },
    ];

    lootTable.addItem(itemsPayload[0].item, itemsPayload[0].dropRate);
    lootTable.addItem(itemsPayload[1].item, itemsPayload[1].dropRate);

    expect(lootTable.totalWeight).toBe(
      itemsPayload.reduce((total, item) => (total += item.dropRate), 0)
    );
  });

  test("show throw an error if a duplicate item is inserted", () => {
    const lootTable: LootTable = new LootTable();

    const addDuplicateItems = () => {
      const itemsPayload: any[] = [
        { item: "myItem", dropRate: 10 },
        { item: "myItem", dropRate: 40 },
      ];

      for (const item of itemsPayload)
        lootTable.addItem(item.item, item.dropRate);
    };

    expect(() => addDuplicateItems()).toThrow();
  });
});

import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { LootTable } from "../src/loot-table.ts";

describe("LootTable", () => {
  it("should be defined", () => {
    assert.ok(LootTable);
  });

  it("should calculate total weight correctly", () => {
    const lootTable = new LootTable<string>();

    const itemsPayload = [
      { item: "Item one", dropRate: 10 },
      { item: "Item two", dropRate: 40 },
    ];

    for (const { item, dropRate } of itemsPayload)
      lootTable.addItem(item, dropRate);

    assert.equal(
      lootTable.totalWeight,
      itemsPayload.reduce((total, item) => total + item.dropRate, 0),
    );
  });

  it("should return an error if a duplicate item is inserted", () => {
    const lootTable = new LootTable<string>();

    assert.equal(lootTable.addItem("myItem", 10), undefined);
    assert.ok(lootTable.addItem("myItem", 40) instanceof Error);
    assert.equal(lootTable.totalWeight, 10);
  });

  it("should return an error if a structured duplicate item is inserted", () => {
    const lootTable = new LootTable<{ a: number; b: string[] }>();

    assert.equal(lootTable.addItem({ a: 1, b: ["two"] }, 10), undefined);
    assert.ok(lootTable.addItem({ a: 1, b: ["two"] }, 40) instanceof Error);
    assert.equal(lootTable.totalWeight, 10);
  });

  it("should drop an item from the table", () => {
    const lootTable = new LootTable<string>();
    lootTable.addItem("a", 1);
    lootTable.addItem("b", 3);

    for (let i = 0; i < 100; i++)
      assert.ok(["a", "b"].includes(lootTable.dropItem()!));
  });

  it("should drop nothing from an empty table", () => {
    assert.equal(new LootTable().dropItem(), undefined);
  });
});

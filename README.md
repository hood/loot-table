# loot-table

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GitHub issues open](https://img.shields.io/github/issues/0xCAP/loot-table.svg)]()

A simple loot table implementation in TypeScript.

## Installation

#### Using yarn

`yarn add loot-table`

#### Using pnpm

`pnpm add loot-table`

#### Using npm

`npm install loot-table`

## Usage

```typescript
import LootTable from "0xcap/loot-table";

const lootTable = new LootTable();

lootTable.addItem("item1", 2);
lootTable.addItem("item2", 4);

const drop = lootTable.dropItem();
```

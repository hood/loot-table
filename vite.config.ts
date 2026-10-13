import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "node20",
    minify: false,
    lib: {
      entry: "src/loot-table.ts",
      formats: ["es", "cjs"],
      fileName: "loot-table",
    },
    rolldownOptions: {
      external: [/^node:/],
    },
  },
});

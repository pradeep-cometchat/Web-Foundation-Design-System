import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@foundation": path.resolve(__dirname, "src/foundation"),
      "@base-components": path.resolve(__dirname, "src/base-components"),
    },
  },
});

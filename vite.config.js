import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@component": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
    },
  },
});

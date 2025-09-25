import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        // contact: "contact.html",
      },
    },
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3001,
  },
});
4;

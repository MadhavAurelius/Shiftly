import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",       // ✅ relative paths prevent blank page
  build: {
    outDir: "dist"  // ✅ default Vite build folder
  }
});

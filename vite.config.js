import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",   // ✅ Use relative paths to avoid blank page
  build: {
    outDir: "dist"  // ✅ default Vite build folder
  }
});


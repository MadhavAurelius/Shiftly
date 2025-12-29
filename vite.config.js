export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist", // ensures Netlify finds the files
  },
});

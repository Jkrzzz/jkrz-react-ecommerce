import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // ensure correct path on Vercel
  build: {
    outDir: "dist", // Vite default, just to be explicit
  },
});

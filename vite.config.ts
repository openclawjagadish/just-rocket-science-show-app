import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/just-rocket-science-show-app/",
  plugins: [react()],
});

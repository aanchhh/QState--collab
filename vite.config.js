import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer"; // Import the visualizer plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Automatically open the report in your browser
      filename: "dist/stats.html", // Output file name
      template: "treemap", // Choose a template for the report (optional)
    }),
  ],
  build: {
    outDir: "../AI_Agents/Api/dist", // Specify your output directory
  },
  // Configure the server options
  server: {
    port: 3001, // Frontend port
    proxy: {
      "/esign_up": {
        // Match the backend API endpoint
        target: "http://localhost:5000", // Flask backend
        changeOrigin: true,
        secure: false,
      },
      "/esign_in": {
        // Add proxy for sign-in
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api-remota": {
        // 1. Apuntamos directamente a la versión con www para evitar el 301/302
        target: "https://www.quoterism.com",
        changeOrigin: true,
        // 2. Obligamos al proxy a seguir cualquier redirección internamente
        followRedirects: true,
        rewrite: (path) => path.replace(/^\/api-remota/, ""),
        // Opcional: Para depurar si el servidor rechaza el User-Agent
        configure: (proxy, _options) => {
          proxy.on("error", (err, _req, _res) => {
            console.log("proxy error", err);
          });
        },
      },
    },
  },
});

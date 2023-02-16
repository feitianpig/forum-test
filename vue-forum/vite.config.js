import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 9000,
    // proxy:{//通过代理实现跨域
    //   '/path':{
    //     target:'xxx',//替换的服务端地址
    //     changeOrigin: true,//开启代理，允许跨域
    //     rewrite: api=>api.replace('/^\/path/',''), //将 /api  替换为空
    //   }
    // }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'src'),
      '@i': path.resolve(__dirname,'src/assets/images'),
      '@s': path.resolve(__dirname,'src/assets/style'),
      '@c': path.resolve(__dirname,'src/components'),
      '@v': path.resolve(__dirname,'src/views')

    }
  }
});

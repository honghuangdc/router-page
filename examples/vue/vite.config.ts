import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import unocss from 'unocss/vite';
import routerPage from '@soybeanjs/router-page';
import Inspect from 'vite-plugin-inspect';

export default defineConfig(() => {
  const rootPath = path.resolve(process.cwd());
  const srcPath = `${rootPath}/src`;

  return {
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/scss/global.scss" as *;`
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      Components({
        dts: 'src/typings/components.d.ts',
        types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }]
      }),
      unocss(),
      routerPage({
        pagesFormatter: names =>
          names.map(name => {
            /** 系统的内置路由，该文件夹名称不作为RouteKey */
            const SYSTEM_VIEW = 'system-view_';
            return name.replace(SYSTEM_VIEW, '');
          })
      }),
      Inspect()
    ],
    server: {
      host: '0.0.0.0',
      open: true
    },
    build: {
      brotliSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false
      }
    }
  };
});

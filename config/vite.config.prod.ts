import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import compressPlugin from 'vite-plugin-compression2';
import { visualizer } from 'rollup-plugin-visualizer';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import { cdn } from 'vite-plugin-cdn2';

const cdnMap = {
  'vue':
    'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/3.2.31/vue.global.prod.min.js',
  'vue-router':
    'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue-router/4.0.13/vue-router.global.prod.min.js',
  'echarts':
    'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/echarts/5.3.0-rc.1/echarts.js',
  'element-ui':
    'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/element-plus/2.0.4/index.full.min.js',
  'pinia':
    'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/pinia/2.0.11/pinia.iife.prod.min.js',
};

export default mergeConfig(
  {
    mode: 'production',
    plugins: [
      compressPlugin(),
      visualizer({
        filename: './node_modules/.cache/visualizer/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'icon',
            enabledCollections: ['ep'],
          }),
        ],
      }),
      cdn({
        isProduction: true,
        modules: [
          {
            name: 'vue',
            global: 'vue',
          },
          {
            name: 'vue',
            global: 'Vue',
          },
          {
            name: 'vue-demi',
            global: 'VueDemi',
          },
          {
            name: 'vue-router',
            global: 'VueRouter',
          },
          {
            name: 'element-plus',
            global: 'ElementPlus',
          },
          {
            name: 'pinia',
            global: 'Pinia',
            spare:
              'https://cdn.jsdelivr.net/npm/pinia@2.0.25/dist/pinia.iife.min.js',
          },
          {
            name: 'echarts',
            global: 'echarts',
          },
        ],
        transform(meta) {
          meta.forEach((item) => {
            const url = cdnMap[item.name];
            if (url) {
              item.url = url;
            }
          });
        },
      }),
    ],
    build: {
      sourcemap: true,
    },
  },
  baseConfig
);

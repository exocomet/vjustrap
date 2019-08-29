// import replace from 'rollup-plugin-replace';
import vue from 'rollup-plugin-vue'
// import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const globals = { vue: 'Vue' };
// const isProduction = !process.env.ROLLUP_WATCH;
const external = Object.keys(pkg.dependencies);

export default {
    input: './src/index.js',
    output: {
        file: './build/bundle.js',
        format: 'iife',
        // globals,
        globals: {vue: 'Vue'}
    },
    external: ['vue'],
    // external,
    plugins: [
        // resolve(),
        vue({
            // template: {
            //     isProduction,
            //     compilerOptions: {preserveWhitespace: false}
            // },
            // css: true
        }),
    ]
};
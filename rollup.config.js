import vue from 'rollup-plugin-vue'
import pkg from './package.json';

const globals = { vue: 'Vue' };
const external = Object.keys(pkg.dependencies);

export default {
    input: './src/index.js',
    output: {
        file: './build/bundle.js',
        format: 'iife',
        globals,
    },
    external,
    plugins: [
        vue({
            // template: {
            //     isProduction: true,
            //     compilerOptions: {preserveWhitespace: false} //deprecated?
            // },
        }),
    ]
};
const rollupPluginCommonJS = require('rollup-plugin-commonjs');
const rollupPluginNodeResolve = require('rollup-plugin-node-resolve');
const rollupPluginNodeBuiltins = require('rollup-plugin-node-builtins');
const rollupPluginNodeGlobals = require('rollup-plugin-node-globals');

export default {
    input: 'node_modules/inherits/inherits.js',
    output: {
        file: 'inherits.js',
        format:'es'
    },
    plugins: [
        rollupPluginNodeBuiltins(),
        rollupPluginNodeGlobals(),
        rollupPluginNodeResolve({
            preferBuiltins: false,
            browser: true
        }),
        rollupPluginCommonJS()
    ]
}

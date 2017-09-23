const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const json = require('rollup-plugin-json');

const babelOptions = {
    presets: [
        [
            'es2015',
            {
                modules: false
            }
        ]
    ],
    plugins: [
        'external-helpers',
        'transform-flow-strip-types',
        'transform-object-rest-spread',
    ]
};

rollup.rollup({
    input: 'src/index.js',
    plugins: [
        json({
            preferConst: true,
        }),
        babel(babelOptions),
    ],
}).then((bundle) => {
    bundle.write({
        format: 'umd',
        file: './dist/iso-639-2-english.js',
        name: 'ISO6392',
    });

    bundle.write({
        format: 'es',
        file: './dist/iso-639-2-english.es.js',
        name: 'ISO6392',
    });
});

rollup.rollup({
    input: 'src/index.js',
    plugins: [
        json({
            preferConst: true,
        }),
        babel(babelOptions),
        uglify(),
    ],
}).then((bundle) => {
    bundle.write({
        format: 'umd',
        file: './dist/iso-639-2-english.min.js',
        name: 'ISO6392',
    });
});

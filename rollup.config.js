import babel from 'rollup-plugin-babel'
import alias from '@rollup/plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript'
import fs from 'fs'

const path = require('path')

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss']
});

const components = fs.readdirSync('./src/packages')

export default components.map((filename) => {
  return {
    input: `src/packages/${filename}`,
    output: {
      file: `public/packages/${filename}`,
      format: 'cjs',
    },
    plugins: [
      babel({ presets: ["@babel/preset-react"] }),
      typescript(),
      // 路径别名
      alias({
        entries: [
          { find: '@', replacement: path.resolve(__dirname, './src') },
        ],
        customResolver
      }),
    ],
    watch: {
      include: 'src/packages/**'
    },
  }
})
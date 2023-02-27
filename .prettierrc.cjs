/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  semi: true,

  plugins: [require.resolve('prettier-plugin-astro'), require('prettier-plugin-tailwindcss')],

  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
  tailwindConfig: './tailwind.config.cjs',
};

module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:astro/recommended', 'plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
      },
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
};

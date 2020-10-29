module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  /* parserOptions: {
    parser: 'babel-eslint'
  }, */
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    semi: [2, "never"],
    "no-console": "off",
    "vue/custom-event-name-casing": "off",
    "vue/no-arrow-functions-in-watch": "off",
    "vue/no-custom-modifiers-on-v-model": "off",
    "vue/no-dupe-v-else-if": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-mutating-props": "off",
    "vue/one-component-per-file": "off",
    "vue/no-v-for-template-key": "off",
    "vue/no-v-model-argument": "off",
    "vue/experimental-script-setup-vars": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "prettier/prettier": ["error", { semi: false, endOfLine: "auto" }],
  },
}

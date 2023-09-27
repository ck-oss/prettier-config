/** @type {import("prettier").Config} */
module.exports = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-packagejson",
    "prettier-plugin-tailwindcss",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};

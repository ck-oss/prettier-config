/** @type {import("prettier").Config} */
module.exports = {
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-packagejson",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};

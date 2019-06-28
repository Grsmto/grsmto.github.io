const postcssImport = require("postcss-import");
const postcssCssNext = require(`postcss-cssnext`);
const postcssPresetEnv = require("postcss-preset-env");

module.exports = () => ({
  plugins: [
    // postcssPresetEnv({ stage: 0 }),
    postcssImport(),
    postcssCssNext(),
  ],
});

module.exports = (eleventyConfig) => {
  
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addWatchTarget("./assets");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}
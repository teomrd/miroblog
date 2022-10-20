module.exports = (eleventyConfig) => {
  
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addWatchTarget("./assets");

  return {
    pathPrefix: "/",
    dir: {
      input: "src",
      output: "public"
    }
  }
}
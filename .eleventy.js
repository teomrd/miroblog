module.exports = (eleventyConfig) => {
  
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addWatchTarget("./assets");

  return {
    pathPrefix: "/miroblog/",
    dir: {
      input: "src",
      output: "public"
    }
  }
}
module.exports = (eleventyConfig) => {
  
  eleventyConfig.addPassthroughCopy("./assets");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}
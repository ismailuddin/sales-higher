module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/img/main.svg");
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}
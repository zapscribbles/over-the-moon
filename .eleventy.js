const htmlmin = require('html-minifier');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

const now = String(Date.now());

module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    // Add plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Setup files
    eleventyConfig.addWatchTarget('./_tmp/style.css');
    eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './css/style.css' });
    eleventyConfig.addPassthroughCopy('src/common-js/*.js');
    eleventyConfig.addPassthroughCopy('src/**/*.js');
    eleventyConfig.addPassthroughCopy('assets/*.png');
    eleventyConfig.addPassthroughCopy('assets/*.jpg');
    eleventyConfig.addPassthroughCopy('assets/*.ico');
    eleventyConfig.addPassthroughCopy({ 'src/_data/*.json': 'data' });
    eleventyConfig.addPassthroughCopy('assets/uploads/*.*');
    eleventyConfig.addPassthroughCopy('admin');
    eleventyConfig.addWatchTarget('assets/*.json');
    eleventyConfig.addPassthroughCopy('assets/*.json');

    eleventyConfig.addFilter('log', value => {
        console.log(value);
    });
    eleventyConfig.addNunjucksFilter('arrayElemsAsVars', function (array) {
        var output = '';
        array.forEach((element, i, arr) => {
            output += element;
            if (i + 1 < arr.length) {
                output += ', ';
            }
        });
        return output;
    });
    eleventyConfig.addNunjucksFilter('arrayElemsAsStrs', function (array) {
        var output = '';
        array.forEach((element, i, arr) => {
            output += "'" + element + "'";
            if (i + 1 < arr.length) {
                output += ', ';
            }
        });
        return output;
    });

    // If being deployed (build rather than start), minify everything
    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
        if (process.env.ELEVENTY_PRODUCTION && outputPath && outputPath.endsWith('.html')) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
            return minified;
        }
        return content;
    });

    return {
        dir: {
            input: 'src',
            layouts: '_includes/layouts',
            output: '_site',
        },
    };
};

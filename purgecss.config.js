module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  // About-page news block; PurgeCSS can drop these rules after `jekyll build` so scrolling works locally but not on GH Pages.
  safelist: [
    "about-announcements",
    "news-from-data",
    "news-from-data__viewport",
    "news-from-data__viewport--limited",
  ],
};

module.exports = ->
  @loadNpmTasks "grunt-browserify"

  @config "browserify",
    options:
      transform: ["deamdify"]

    release:
      files:
        "dist/source.js": ["app/index.js"]

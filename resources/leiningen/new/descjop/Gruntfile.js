module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    "download-atom-shell": {
      version: "0.23.0",
      outputDir: "./atom-shell",
      rebuild: true
    }
  });

  grunt.loadNpmTasks('grunt-download-atom-shell');

};

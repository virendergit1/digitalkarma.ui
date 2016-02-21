/**
 * digitalkarma - 2016/01/28 22:29:23 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:29:00 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:28:08 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:27:18 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:26:56 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:23:59 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:23:10 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:22:03 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:14:19 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:12:47 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:11:34 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:11:20 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:10:20 UTC
*/
/**
 * digitalkarma - 2016/01/28 20:24:36 UTC
*/
/**
 * digitalkarma - 2016/01/28 20:23:30 UTC
*/
/**
 * digitalkarma - 2016/01/28 20:20:05 UTC
*/
"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    banner: "/*\n" +
    " * <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
    " * <%= pkg.description %>\n" +
    " * <%= pkg.homepage %>\n" +
    " *\n" +
    " * Made by <%= pkg.author.name %>\n" +
    " * Under <%= pkg.license %> License\n" +
    " */\n",

    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      all: [
      "Gruntfile.js",
      "src/metisMenu.js"
      ]
    },
    concat: {
      plugin: {
        src: ["src/metisMenu.js"],
        dest: "dist/metisMenu.js"
      },
      css: {
        src: ["src/metisMenu.css"],
        dest: "dist/metisMenu.css"
      },
      options: {
        banner: "<%= banner %>"
      }
    },
    uglify: {
      plugin: {
        src: ["dist/metisMenu.js"],
        dest: "dist/metisMenu.min.js"
      },
      options: {
        banner: "<%= banner %>"
      }
    },
    cssmin: {
      options: {
        banner: "<%= banner %>"
      },
      menucss: {
        src: ["src/metisMenu.css"],
        dest: "dist/metisMenu.min.css"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.registerTask("travis", ["jshint"]);
  grunt.registerTask("default", ["jshint", "concat", "uglify", "cssmin"]);
};

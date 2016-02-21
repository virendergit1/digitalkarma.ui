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
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var jshint = require('gulp-jshint');
var todo = require('gulp-todo');
var gulputil = require('gulp-util');

var moment = require('moment');
var pkg = require('./package.json');

var banner =
	'/*!\n\n' +
	'<%= pkg.name %> - <%= pkg.summary %>\nVersion <%= pkg.version %>+<%= build %>\n' +
	'\u00A9 <%= year %> <%= pkg.author.name %> - <%= pkg.author.url %>\n\n' +
	'Site:     <%= pkg.homepage %>\n'+
	'Issues:   <%= pkg.bugs.url %>\n' +
	'License:  <%= pkg.license.url %>\n\n' +
	'*/\n';

function generateBuild(){
	var date = new Date;
	return Math.floor((date - (new Date(date.getFullYear(),0,0)))/1000).toString(36)
}

var build = generateBuild();

var paths = {
	scripts: ["src/ondomready.js", "src/polyfills.js", "src/augment.js", "src/holder.js"]
}

gulp.task('jshint', function () {
	return gulp.src(paths.scripts[paths.scripts.length - 1])
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
});

gulp.task('todo', function(){
	return gulp.src(paths.scripts)
		.pipe(todo())
		.pipe(gulp.dest('./'))
});

gulp.task('scripts', ['jshint'], function () {
	return gulp.src(paths.scripts)
		.pipe(concat("holder.js"))
		.pipe(uglify())
		.pipe(header(banner, {
			pkg: pkg,
			year: moment().format("YYYY"),
			build: build
		}))
		.pipe(gulp.dest("./"))
});

gulp.task('watch', function(){
	gulp.watch(paths.scripts, ['default']);
});

gulp.task('default', ['todo', 'jshint', 'scripts'], function(){
	build = generateBuild();
	gulputil.log("Finished build "+build);
});

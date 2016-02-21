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
var webpage = require("webpage"),
    fs = require("fs");

var html_path = fs.absolute("test.html");
var examples = [];

function run_example(example_index) {
  if (example_index >= examples.length) {
    phantom.exit(0);
    return;
  }

  var example = examples[example_index];
  var snapshot_index = 0;
  var page = webpage.create();

  page.viewportSize = { width: 500, height: 300 };
  page.clipRect = { width: 500, height: 300 };
  page.onAlert = function (msg) {
    var e = JSON.parse(msg);
    if (e.fn == "snapshot") {
      page.render("output/" + example.name + snapshot_index + ".png");
      snapshot_index += 1;
    } else if (e.fn == "mousemove") {
      page.sendEvent("mousemove", e.x, e.y);
    }
  };

  page.open(html_path, function (status) {
    if (status == "fail") {
      console.log("Failed to load test page: " + example.name);
      phantom.exit(1);
    } else {
      page.evaluate(example.runner);
    }
    page.close();
    run_example(example_index + 1);
  });
}

exports.def = function (name, runner) {
  examples.push({ name: name, runner: runner });
};

exports.run = function () {
  if (fs.isDirectory("output")) {
    fs.list("output").forEach(function (path) {
      if (path != "." && path != "..") {
        fs.remove("output/" + path);
      }
    });
  } else {
    fs.makeDirectory("output");
  }
  run_example(0);
};

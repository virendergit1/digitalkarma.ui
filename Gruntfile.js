
module.exports = function(grunt) {
    'use strict';

    var path = require('path');

    var setHtml2JsDefaultOptions = function(moduleTemplateNamespace) {
        return {
            rename: function(moduleName) {
                return '/' + moduleName;
            },
            base: "",
            module: moduleTemplateNamespace,
            useStrict: true,
            htmlmin: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeCommentsFromCDATA: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                keepClosingSlash: true,
                caseSensitive: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            watch: true
        };
    };

    grunt.initConfig({
        distDirectory: 'dist',
        distMainDirectory: '<%= distDirectory %>/src',
        distChartTesterCompDirectory: '<%= distDirectory %>/chartTester',
        cssDistDirectory: '<%= distDirectory %>/src/css',
        distLibs: '<%= distDirectory %>/libs',
        distBower: '<%= distDirectory %>/bower',
        pkg: grunt.file.readJSON('package.json'),
        src: {
            js: ['<%= pkg.sourceDir %>/src/**/*.js'],
            html: ['<%= pkg.sourceDir %>/src/**/*.html'],
            indexHtml: ['index.html'],
            mainJs: ['main.js'],
            srcJs: ['<%= pkg.sourceDir %>/src/*.js'],
            configJs: ['<%= pkg.sourceDir %>/src/config/*.js'],
            serviceJs: ['<%= pkg.sourceDir %>/src/services/**/*.js'],
            apiProxiesJs: ['<%= pkg.sourceDir %>/src/apiProxies/**/*.js'],
            chartTesterJs: ['<%= pkg.sourceDir %>/src/chartTester/js/*.js'],
            topNavJs: ['<%= pkg.sourceDir %>/src/topNav/*.js'],
            organizationJs: ['<%= pkg.sourceDir %>/src/organization/**/*.js'],
            applicationJs: ['<%= pkg.sourceDir %>/src/organization/application/*.js'],
            libsJs: ['<%= pkg.sourceDir %>/src/libs/*.js'],
            componentsJs: ['<%= pkg.sourceDir %>/src/components/**/*.js'],
            loginJs: ['<%= pkg.sourceDir %>/src/login/*.js'],
            cssDirectory: '<%= pkg.sourceDir %>/src/assets/css/*.css',
            lessMain: ['<%= pkg.sourceDir %>/src/less/app-common.less'],
            lessVariables: ['<%= pkg.sourceDir %>/src/less/app-common-variables.less'],
            lessMixins: ['<%= pkg.sourceDir %>/src/less/app-common-mixins.less'],
            htmlPages: ['<%= pkg.sourceDir %>/src/pages/**/*.html'],
            i18n: ['<%= pkg.sourceDir %>/src/i18n/*.*'],
            pocPages: ['<%= pkg.sourceDir %>/src/poc/*.*']
        },
        meta: {
            banner: '/**\n' +
                ' * <%= pkg.name %> - <%= grunt.template.today("UTC:yyyy/mm/dd HH:MM:ss Z") %>\n' +
                '*/'
        },
        test: {
            karmaConfig: '<%= pkg.sourceDir %>/tests/config/karma.conf.js',
            unit: ['<%= pkg.sourceDir %>/tests/unit/**/*.js']
        },
        eslint: {
            options: {
                configFile: "eslintrc.json",
                ignore: true,
                ignorePath: ".eslintignore"
            },
            src: ['Gruntfile.js', '<%= src.js %>', '<%= test.unit %>']
        },
        karma: {
            options: {
                configFile: '<%= test.karmaConfig %>'
            },
            local: {
                browsers: ['Chrome'],
                singleRun: false
            },
            localIE: {
                browsers: ['IE']
            },
            localFF: {
                browsers: ['Firefox']
            },
            localPJ: {
                browsers: ['PhantomJS2'],
                singleRun: true
            },
            allTests: {
                singleRun: true,
                browsers: ['Chrome', 'IE', 'Firefox', 'PhantomJS2']
            },
            integration: {
                configFile: '<%= test.karmaConfig %>',
                singleRun: true,
                browsers: ['PhantomJS2'],
                reporters: ['dots', 'coverage', 'junit'],
                coverageReporter: {
                    type: 'lcov',
                    dir: 'src/tests/reports',
                    subdir: 'coverage'
                }
            }
        },
        watch: {
            jshint: {
                files: ['<%= src.js %>', '<%= test.unit %>', '<%= test.karmaConfig %>', 'Gruntfile.js', 'mainJs'],
                tasks: ['jshint'],
                options: {
                    //spawn: false,
                    interrupt: true //,
                    //reload: false
                }
            },
            less: {
                files: ['<%= src.lessAll %>'],
                tasks: ['buildcss']
            },
            release: {
                files: ['<%= src.js %>', '<%= src.html %>', '<%= test.unit %>'],
                tasks: ['release'],
                options: {
                    spawn: false,
                    interrupt: true,
                    reload: false
                }
            }
        },
        clean: {
            distChartTesterCompDirectory: ["<%= distChartTesterCompDirectory%>"],
            appRelease: ['<%= distMainDirectory %>/src'],
            testResults: ['<%=pkg.sourceDir %>/tests/reports'],
            css: ['<%= cssDistDirectory %>']
        },
        html2js: {
            chartTester: {
                options: setHtml2JsDefaultOptions('chartTester.template'),
                src: '<%= pkg.sourceDir %>/src/chartTester/templates/*.html',
                dest: '<%= distMainDirectory %>/src/chartTester/chartTesterTemplate.js'
            },
            topNav: {
                options: setHtml2JsDefaultOptions('topNav.template'),
                src: '<%= pkg.sourceDir %>/src/topNav/*.html',
                dest: '<%= distMainDirectory %>/src/topNav/topNavTemplate.js'
            },
            application: {
                options: setHtml2JsDefaultOptions('application.template'),
                src: '<%= pkg.sourceDir %>/src/organization/application/*.html',
                dest: '<%= distMainDirectory %>/src/organization/applicationTemplate.js'
            },
            capabilities: {
                options: setHtml2JsDefaultOptions('capabilities.template'),
                src: ['<%= pkg.sourceDir %>/src/organization/capabilities/*.html',
                    '<%= pkg.sourceDir %>/src/organization/capabilities/details/*.html'],
                dest: '<%= distMainDirectory %>/src/organization/capabilitiesTemplate.js'
            },
            organization: {
                options: setHtml2JsDefaultOptions('organization.template'),
                src: '<%= pkg.sourceDir %>/src/organization/organization/*.html',
                dest: '<%= distMainDirectory %>/src/organization/organizationTemplate.js'
            },
            technologies: {
                options: setHtml2JsDefaultOptions('technologies.template'),
                src: '<%= pkg.sourceDir %>/src/organization/technologies/*.html',
                dest: '<%= distMainDirectory %>/src/organization/technologiesTemplate.js'
            },
            vendors: {
                options: setHtml2JsDefaultOptions('vendors.template'),
                src: '<%= pkg.sourceDir %>/src/organization/vendors/*.html',
                dest: '<%= distMainDirectory %>/src/organization/vendorsTemplate.js'
            },
            //---
            businessValue: {
                options: setHtml2JsDefaultOptions('businessValue.template'),
                src: '<%= pkg.sourceDir %>/src/organization/application/businessValue/*.html',
                dest: '<%= distMainDirectory %>/src/organization/businessValueTemplate.js'
            },
            contact: {
                options: setHtml2JsDefaultOptions('contact.template'),
                src: '<%= pkg.sourceDir %>/src/organization/application/contact/*.html',
                dest: '<%= distMainDirectory %>/src/organization/contactTemplate.js'
            },
            cost: {
                options: setHtml2JsDefaultOptions('cost.template'),
                src: '<%= pkg.sourceDir %>/src/organization/application/cost/*.html',
                dest: '<%= distMainDirectory %>/src/organization/costTemplate.js'
            },
            deployment: {
                options: setHtml2JsDefaultOptions('deployment.template'),
                src: '<%= pkg.sourceDir %>/src/organization/application/deployment/*.html',
                dest: '<%= distMainDirectory %>/src/organization/deploymentTemplate.js'
            },
            general: {
                options: setHtml2JsDefaultOptions('general.template'),
                src: '<%= pkg.sourceDir %>/src/organization/application/general/*.html',
                dest: '<%= distMainDirectory %>/src/organization/generalTemplate.js'
            },
            health: {
                options: setHtml2JsDefaultOptions('health.template'),
                src: '<%= pkg.sourceDir %>/src/organization/application/health/*.html',
                dest: '<%= distMainDirectory %>/src/organization/healthTemplate.js'
            },
            security: {
                options: setHtml2JsDefaultOptions('security.template'),
                src: '<%= pkg.sourceDir %>/src/organization/application/security/*.html',
                dest: '<%= distMainDirectory %>/src/organization/securityTemplate.js'
            },
            usage: {
                options: setHtml2JsDefaultOptions('usage.template'),
                src: '<%= pkg.sourceDir %>/src/organization/application/usage*.html',
                dest: '<%= distMainDirectory %>/src/organization/usageTemplate.js'
            }
        },
        copy: {
            chartTester: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.chartTesterJs %>'],
                        dest: '<%= distMainDirectory %>/src/chartTester'
                    }
                ]
            },
            login: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.loginJs %>'],
                        dest: '<%= distMainDirectory %>/src/login'
                    }
                ]
            },
            indexHtml: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.indexHtml %>'],
                        dest: '<%= distMainDirectory %>'
                    }
                ]
            },
            services: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.serviceJs %>'],
                        dest: '<%= distMainDirectory %>/src/services'
                    }
                ]
            },
            apiProxies: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.apiProxiesJs %>'],
                        dest: '<%= distMainDirectory %>/src/apiProxies'
                    }
                ]
            },
            mainJs: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.mainJs %>'],
                        dest: '<%= distMainDirectory %>'
                    }
                ]
            },
            srcJs: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.srcJs %>'],
                        dest: '<%= distMainDirectory %>/src/digitalKarma'
                    }
                ]
            },
            configJs: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.configJs %>'],
                        dest: '<%= distMainDirectory %>/src/config'
                    }
                ]
            },
            appCss: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.cssDirectory %>'],
                        dest: '<%= cssDistDirectory %>'
                    }
                ]
            },
            htmlPages: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.htmlPages %>'],
                        dest: '<%= distMainDirectory %>/pages'
                    }
                ]
            },
            libsJs: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.libsJs %>'],
                        dest: '<%= distMainDirectory %>/libs'
                    }
                ]
            },
            componentsJs: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.componentsJs %>'],
                        dest: '<%= distMainDirectory %>/components'
                    }
                ]
            },
            i18n: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.i18n %>'],
                        dest: '<%= distMainDirectory %>/i18n'
                    }
                ]
            },
            topNavJs: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.topNavJs %>'],
                        dest: '<%= distMainDirectory %>/src/topNav'
                    }
                ]
            },
            organizationJs: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.organizationJs %>'],
                        dest: '<%= distMainDirectory %>/src/organization'
                    }
                ]
            },
            applicationJs: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.applicationJs %>'],
                        dest: '<%= distMainDirectory %>/src/organization/application'
                    }
                ]
            }
        },
        requirejs: {
            compile: {
                options: {
                    optimize: "none",
                    logLevel: 0,
                    name: "app",
                    out: "dist/src/app.js",
                    baseUrl: "<%= distDirectory %>",
                    paths: {
                        'app': './src/src/digitalKarma/app',
                        'login': './src/src/login',
                        'route': './src/src/digitalKarma',
                        'angular': 'empty:',
                        'uiRouter': 'empty:',
                        'spin': 'empty:',
                        'chartTester/chartTesterModule': 'empty:',
                        'ngidle': 'empty:',
                        'topNav/topNavModule': 'empty:',
                        'organization/organizationModule': 'empty:'
                    }
                }
            },
            chartTester: {
                options: {
                    optimize: "none",
                    logLevel: 0,
                    mainConfigFile: 'main.js',
                    name: 'chartTester/chartTesterModule',
                    out: 'dist/src/chartTester/chartTesterModule.js',
                    paths: {
                        'chartTester': './dist/src/src/chartTester',
                        'angular': 'empty:'
                    }
                }
            },
            topNav: {
                options: {
                    optimize: "none",
                    logLevel: 0,
                    mainConfigFile: 'main.js',
                    name: 'topNav/topNavModule',
                    out: 'dist/src/topNav/topNavModule.js',
                    paths: {
                        'topNav': './dist/src/src/topNav',
                        'angular': 'empty:'
                    }
                }
            },
            organization: {
                options: {
                    optimize: "none",
                    logLevel: 0,
                    mainConfigFile: 'main.js',
                    name: 'organization/organizationModule',
                    out: 'dist/src/organization/organizationModule.js',
                    paths: {
                        'organization': './dist/src/src/organization',
                        'application': 'empty:',
                        'capabilities': './dist/src/src/organization',
                        'capabilities/details': './dist/src/src/organization',
                        'technologies': './dist/src/src/organization',
                        'vendors': './dist/src/src/organization',
                        'services': './dist/src/src/organization',
                        'businessValue': 'empty:',
                        'contact': 'empty:',
                        'cost': 'empty:',
                        'deployment': 'empty:',
                        'general': 'empty:',
                        'health': 'empty:',
                        'security': 'empty:',
                        'usage': 'empty:',
                        'angular': 'empty:'
                    }
                }
            },
            application: {
                options: {
                    optimize: "none",
                    logLevel: 0,
                    mainConfigFile: 'main.js',
                    name: 'application/applicationModule',
                    out: 'dist/src/organization/application/applicationModule.js',
                    paths: {
                        'application': './dist/src/src/organization',
                        'businessValue': './dist/src/src/organization',
                        'contact': './dist/src/src/organization',
                        'cost': './dist/src/src/organization',
                        'deployment': './dist/src/src/organization',
                        'general': './dist/src/src/organization',
                        'health': './dist/src/src/organization',
                        'security': './dist/src/src/organization',
                        'usage': './dist/src/src/organization',
                        'angular': 'empty:'
                    }
                }
            }
        },
        versionCopyBowerComponents: {
            options: {
                exclude: [],
                dest: '<%= distBower %>',
                cwd: 'components',
                filesReferencingComponents: {
                    files: [],
                    useComponentMin: true
                }
            }
        },
        uglify: {
            options: {
                no_squeeze: true,
                toplevel: true,
                mangle: false,
                beautify: false,
                lint: false,
                compress: false,
                warnings: false,
                sourceMap: true
            },
            chartTester: {
                files: {

                }
            }
        },
        usebanner: {
            dist: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                files: {
                    src: [
                        '<%= distDirectory%>/src/*.js',
                        '<%= distChartTesterCompDirectory%>/*.js'
                    ]
                }
            },
            css: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                files: {
                    src: [
                        '<%= cssDirectory %>/*.css'
                    ]
                }
            }
        },
        less: {
            options: {
                compress: false, // Choose ONLY 1: 'compress' OR 'cleancss'
                cleancss: false, // cleancss 2.2.16 currently removes CSS sourceMappingURL in minification [https://github.com/jakubpawlowicz/clean-css/issues/125, https://github.com/less/less.js/issues/1656]
                ieCompat: false, // default is 'true' for IE8 compat... sooooo we don't want it.
                report: 'min', // Either report only minification result or report minification and gzip results.
                optimization: 10, // Set the parser's optimization level. The lower the number, the less nodes it will create in the tree. This could matter for debugging, or if you want to access the individual nodes in the tree.
                sourceMap: true, // Enable source maps for .css & .min.css
                outputSourceFiles: true
            },
            compilecss_main: {
                // compile LESS to CSS and create LESS sourcemap
                files: {
                    '<%= cssDistDirectory %>/<%= pkg.cssname %>.css': '<%= src.lessMain %>'
                },
                options: {
                    // sourcemap for .css
                    sourceMapFilename: '<%= cssDistDirectory %>/<%= pkg.cssname %>.css.map', // where file is generated and located relative from gruntfile.js
                    sourceMapURL: '<%= pkg.cssname %>.css.map' // Override the default url, form 'sourceMapFilename:', that points to the source map from the compiled css file (relative or absolute URL).
                }
            },
            compilecss_variables: {
                // compile LESS to CSS and create LESS sourcemap
                files: {
                    '<%= cssDistDirectory %>/<%= pkg.cssname %>-variables.css': '<%= src.lessVariables %>'
                },
                options: {
                    sourceMap: false
                }
            },
            compilecss_mixins: {
                // compile LESS to CSS and create LESS sourcemap
                files: {
                    '<%= cssDistDirectory %>/<%= pkg.cssname %>-mixins.css': '<%= src.lessMixins %>'
                },
                options: {
                    sourceMap: false
                }
            },
            minifycss: {
                // minify CSS to '.min' file and create LESS sourcemap
                files: {
                    '<%= cssDistDirectory %>/<%= pkg.cssname %>.min.css': '<%= src.lessMain %>'
                },
                options: {
                    compress: true, // Choose ONLY 1: 'compress' OR 'cleancss'
                    // sourcemap for .min.css
                    sourceMapFilename: '<%= cssDistDirectory %>/<%= pkg.cssname %>.min.css.map', // where file is generated and located relative from gruntfile.js
                    sourceMapURL: '<%= pkg.cssname %>.min.css.map' // Override the default url, form 'sourceMapFilename:', that points to the source map from the compiled css file (relative or absolute URL).
                }
            }
        },
        concurrent: {
            dev: {
                tasks: ['watch:release', 'eslint', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        express: {
            server: {
                options: {
                    port: 59456,
                    hostname: "localhost",
                    server: path.resolve('./server.js'),
                    bases: [path.resolve('dist/src')],
                    debug: true
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= express.server.options.port %>/'
            }
        },
        concat: {
            chartTester: {
                src: [],
                dest: ''
            }
        }
    });

    grunt.registerTask('release', [
        'clean:distChartTesterCompDirectory',
        'buildcss',
        'eslint',
        //'karma:integration',
        //"replaceClassname:reports",
        //'versionCopyBowerComponents',
        'copyfiles',
        'html2JS',
        'requirejs',
        'usebanner:dist',
        'clean:appRelease'
        //'copy:testFiles',
        //'copy:libs',
        //'compress:chartTester'//,
        //'compress:libs'
    ]);

    grunt.registerTask('default', ['release']);

    grunt.registerTask('buildcss', [
        'clean:css',
        'less',
        'usebanner:css'
    ]);

    grunt.registerTask('html2JS', [
        'html2js:chartTester',
        'html2js:topNav',
        'html2js:application',
        'html2js:capabilities',
        'html2js:organization',
        'html2js:technologies',
        'html2js:vendors',
        'html2js:businessValue',
        'html2js:contact',
        'html2js:cost',
        'html2js:deployment',
        'html2js:general',
        'html2js:health',
        'html2js:security',
        'html2js:usage'
    ]);

    grunt.registerTask('copyfiles', [
        'copy:chartTester',
        'copy:login',
        'copy:indexHtml',
        'copy:services',
        'copy:apiProxies',
        'copy:mainJs',
        'copy:srcJs',
        'copy:configJs',
        'copy:appCss',
        'copy:htmlPages',
        'copy:libsJs',
        'copy:componentsJs',
        'copy:i18n',
        'copy:topNavJs',
        'copy:organizationJs',
        'copy:applicationJs'
    ]);

    grunt.registerTask('web-start', ['release', 'express:server', 'open:server', 'express-keepalive']);
    grunt.registerTask('dev', ['release', 'concurrent']);

    require('load-grunt-tasks')(grunt, { pattern: ['grunt-*', 'grunt*', '@*/grunt-*'] });
    require('time-grunt')(grunt);

    

};
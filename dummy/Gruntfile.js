module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            dev: {
                options: {
                    paths: ['less'],
                    compress: false,
                    cleancss: true,
                },
                files: {
                    'css/lang-uk.css': 'less/lang-uk.less',
                    'css/lang-uk-ie.css': 'less/lang-uk-ie.less'
                }
            },
            prod: {
                options: {
                    paths: ['less'],
                    compress: true,
                    cleancss: true
                },
                files: {
                    'css/lang-uk.css': 'less/lang-uk.less'
                }
            }
        },



        svgmin: {
            options: {},
            dev: {
                files: [
                    { expand: true, cwd: 'svg', src: ['**/*.svg'], dest: 'images/converted' }
                ]
            }
        },



        svg2png: {
            dev: {
                files: [
                    { cwd: 'svg/', src: ['**/*.svg'], dest: 'images/converted' }
                ]
            }
        },



        bake: {
            dev: {
                options: {
                    basePath: 'html/partials'
                },
                files: {
                    'html/manifest.html': 'html/pages/manifest.html'
                }
            },
        },



        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            less: {
                files: [
                    'less/**/*.less'
                ],
                tasks: ['less:dev']
            },

            svg: {
                files: [
                    'svg/**/*.svg'
                ],
                tasks: ['svgmin', 'svg2png', 'bake']
            },

            html: {
                files: [
                    'html/*/*.html'
                ],
                tasks: ['bake']
            }
        }
    });



    // load npm modules
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-svg2png');
    grunt.loadNpmTasks('grunt-bake');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // register tasks
    grunt.registerTask('default', ['less:dev', 'svgmin', 'svg2png', 'bake', 'watch']);
};
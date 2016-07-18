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
                    'css/lang-uk.css': 'less/lang-uk.less'
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

        // html_include: {
        //     dev: {
        //         options: {
        //             workingDir: 'html/components',
        //         },
        //         files: {
        //             // plugin paths structure is a bit hardcoded so...
        //             'html': ['html/components/../*.html']
        //         }
        //     }
        // },

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
            
            // htmlbuild: {
            //     files: [
            //         'html/**/*.html'
            //     ],
            //     tasks: ['html_include']
            // }
        }
    });

    // load npm modules
    grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-html-include');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks
    // grunt.registerTask('default', ['html_include', 'less', 'watch']);
    grunt.registerTask('default', ['less:dev', 'watch']);
};
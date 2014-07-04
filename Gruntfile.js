module.exports = function (grunt) {

    'use strict';

    var shell = require('shelljs');

    // Project configuration
    grunt.initConfig({
        
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*\n *! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.name %>;' +
			'\n * Author(s) :  <%= pkg.authors %>;' +
            ' Licensed <%= pkg.license %> \n*/\n',
        // Task configuration
		clean: {
			build:['dist']
		},
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['src/gainda.core.js'],
                dest: 'dist/gainda.js'
            }
        },
        jasmine: {
            all: {
                src: [
                    'src/**/*.js'
                ],
                options: {
                    'specs' : 'test/spec/**/*.js'
                }
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/gainda.min.js'
            }
        },
        jshint: {
            options: {
                node: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                eqnull: true,
                browser: true,
                globals: { jQuery: true },
                boss: true
            },
            gruntfile: {
                src: 'gruntfile.js'
            },
            lib_test: {
                src: ['src/**/*.js']
            }
        }
    });

    // These plugins provide necessary tasks
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('run', "Run NashornFX", function() {
         shell.exec('jjs -fx demo/Button.js');
    });

    // Default task
    //grunt.registerTask('default', ['clean','jshint', 'concat', 'uglify','jasmine:all']);
    grunt.registerTask('default', ['clean', 'concat', 'run']);
};


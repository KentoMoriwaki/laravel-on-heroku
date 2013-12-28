/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            js: {
                src: ['client/**/*.js'],
                dest: 'public/js/compiled.js'
            },
            css: {
                src: ['client/compiled/css/**/*.css'],
                dest: 'public/css/compiled.css'
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'client/sass',
                    cssDir: 'client/compiled/css',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: '<%= compass.dist.options.sassDir %>',
                    cssDir: '<%= compass.dist.options.cssDir %>',
                    environment: 'development'
                }
            }
        },
        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: []
            },
            sass: {
                files: '<%= compass.dist.options.sassDir %>/**/*.scss',
                tasks: ['compass:dev', 'concat:css']
            },
            js: {
                files: 'client/js/**/*.js',
                tasks: ['concat:js']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Default task.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['compass:dist', 'concat'])

};

'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		haml: {
			dist: {
				files: {
					'src/index.html' : 'dev/index.haml'
				}
			}
		},

		coffee: {
			dev: {
				files: {
					'src/js/app.js' : 'dev/js/app.coffee'
				}
		  }
		},

		uglify: {
			prod: {
				files: {
					'src/js/app.js' : 'src/js/app.js'
				}
			}
		},

		compass: {
			dev: {
				options: {
					sassDir: ['dev/css'],
					cssDir: ['src/css'],
					environment: 'development',
					outputStyle: 'nested',
					noLineComments: true
				}
			}
		},

		watch: {
			sass: {
				files: ['dev/css/*.scss'],
				tasks: ['compass:dev']
			},

			haml: {
				files: 'dev/*.haml',
				tasks: ['haml']
			},

			scripts: {
				files: 'dev/js/*.coffee',
				tasks: ['coffee']
			},

			gruntfile: {
				files: 'Gruntfile.js'
			},

			options: {
				livereload: true
			}
		},

		connect: {
      server: {
        options: {
          port: 8080,
          base: './src'
        }
      }
    }

	});

	grunt.loadNpmTasks('grunt-contrib-haml');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dev', ['connect', 'watch']);
	grunt.registerTask('prod', ['uglify:prod']);

};
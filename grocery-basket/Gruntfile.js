module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.loadNpmTasks('grunt-protractor-runner');
  
  grunt.initConfig({
	  
	'pkg': grunt.file.readJSON('package.json'),  
	  
    'meta': {
      'jsFilesForTesting': [
	    'src/main/webapp/app/vendor/angular/angular.js',
        'src/main/webapp/app/vendor/jquery/dist/jquery.js',
		'src/main/webapp/app/vendor/angular-loader/angular-loader.js',
		'src/main/webapp/app/vendor/angular-mocks/angular-mocks.js',		
		'src/main/webapp/app/vendor/angular-resource/angular-resource.js',
        'src/main/webapp/app/vendor/angular-route/angular-route.js',
        'src/main/webapp/app/vendor/bootstrap/dist/js/bootstrap.js',
        'src/test/javascript/e2e/*.js'
      ]
    },

    'karma': {
      'development': {
        'configFile': 'karma.conf.js',
        'options': {
          'files': [
            '<%= meta.jsFilesForTesting %>',
			'src/main/webapp/app/main.js',
			'src/main/webapp/app/services/*.js',
			'src/main/webapp/app/views/*.js'
          ],
        }
      }
	},

	'jshint': {
      'files': ['Gruntfile.js', 'src/test/javascript/e2e/*.js'],
    },

	'concat': {
      'dist': {
        'src': ['source/**/*.js'],
        'dest': 'dist/<%= pkg.namelower %>-<%= pkg.version %>.js'
      }
    },

    'uglify': {
      'options': {
        'mangle': false
      },  
      'dist': {
        'files': {
          'dist/<%= pkg.namelower %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.namelower %>-<%= pkg.version %>.js']
        }
      }
    },
	
	protractor: {
		options: {
			configFile: "protractor-conf.js", // Location of your protractor config file
			noColor: false,  // Do you want the output to use fun colors?
			args: { }  // Additional arguments that are passed to the webdriver command
		},
		singlerun: {},
		auto:	{
			keepAlive: true, // Stops Grunt process if a test fails
			options: {
				args: {
					seleniumPort: 4444
				}
			}
		}
	}
  });

  grunt.registerTask('test', ['karma:development']);
  grunt.registerTask('default', ['jshint', 'protractor:singlerun']);
  grunt.registerTask('build',
    [
      'jshint',
      'karma:development',
      'concat',
      'uglify'
    ]);

};
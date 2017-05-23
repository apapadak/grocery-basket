module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    'meta': {
      'jsFilesForTesting': [
	    'bower_components/angular/angular.js',
        'bower_components/jquery/dist/jquery.js',
		'bower_components/angular-loader/angular-loader.js',
		'bower_components/angular-mocks/angular-mocks.js',		
		'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'src/test/javascript/**/*.js'
      ]
    },

    'karma': {
      'development': {
        'configFile': 'karma.conf.js',
        'options': {
          'files': [
            '<%= meta.jsFilesForTesting %>',
			'src/main/webapp/app/main.js'
            'src/main/webapp/app/modals/*.js'
			'src/main/webapp/app/services/*.js'
			'src/main/webapp/app/views/*.js'
          ],
        }
      }
	},
	'jshint': {
      'beforeconcat': ['src/test/javascript/unit/*.js'],
    }
  });

  grunt.registerTask('test', ['karma:development']);

};
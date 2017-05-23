module.exports = function(config){
    config.set({

        basePath : './',

		// enable / disable watching file and executing tests whenever any file changes
        autoWatch : true,

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],
		
		// web server port
		port: 9999,
		
		// enable / disable colors in the output (reporters and logs)
		colors: true,
		
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
			'karma-phantomjs-launcher'
        ],

        junitReporter : {
            outputFile: 'target/test_out/unit.xml',
            suite: 'src/test/javascript/unit'
        },
		
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true

    });
};
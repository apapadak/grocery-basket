module.exports = function(config){
    config.set({

        basePath : './',

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],
		
		// enable / disable colors in the output (reporters and logs)
		colors: true,
		
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter : {
            outputFile: 'target/test_out/unit.xml',
            suite: 'src/test/javascript/unit'
        }

    });
};
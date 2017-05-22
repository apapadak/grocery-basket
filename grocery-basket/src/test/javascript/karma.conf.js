module.exports = function(config){
    config.set({

        basePath : '../../../',

        files : [
            'src/main/webapp/app/vendor/angular**/**.min.js',
            'src/main/webapp/app/vendor/angular-mocks/angular-mocks.js',
            'src/main/webapp/app/js/**/*.js',
            'src/test/javascript/unit/**/*.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

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
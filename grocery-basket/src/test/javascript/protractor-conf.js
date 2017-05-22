'use strict';

exports.config = {

    directConnect: true, // Capabilities to be passed to the webdriver instance.

    allScriptsTimeout: 99999,

    specs: [
        'e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    onPrepare: function() {

        // implicit and page load timeouts
        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(25000);

        // for non-angular page
        browser.ignoreSynchronization = false;

        browser.driver.manage().window().maximize();
    },

    baseUrl: 'http://localhost:8000',

    rootElement: 'html[data-ng-app]',

    framework: 'jasmine',

    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 60000
    }
};
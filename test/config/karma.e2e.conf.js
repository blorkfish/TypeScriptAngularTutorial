module.exports = function (config) {
    config.set({
        basePath: '../../',

        files: [
          'test/e2e/**/*.js'
        ],
        
        urlRoot: '/_karma_/',

        autoWatch: false,
        
        singleRun: true,
        
        proxies : {
            '/' : 'http://localhost:53722'
        },

        frameworks: ['ng-scenario'],

        browsers: ['Chrome','IE'],

        plugins: [
                'karma-junit-reporter',
                'karma-chrome-launcher',
                'karma-firefox-launcher',
                'karma-jasmine',
                'karma-ng-scenario',
                'karma-teamcity-reporter',
                'karma-ie-launcher'
        ],

        junitReporter: {
            outputFile: 'test_out/e2e.xml',
            suite: 'e2e'
        }
    });
};

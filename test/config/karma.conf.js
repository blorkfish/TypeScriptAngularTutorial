module.exports = function (config) {
    config.set({
        basePath: '../../',

        files: [
          'Scripts/angular.js',
          'Scripts/angular-*.js',
          'app/ts/**/*.js',
          'test/unit/**/*.js'
        ],

        exclude: [
          'Scripts/angular-loader.js',
          'Scripts/*.min.js',
          'Scripts/angular-scenario.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        //browsers: ['Chrome', 'IE'],
        browsers: ['Chrome'],

        plugins: [
                'karma-junit-reporter',
                'karma-chrome-launcher',
                'karma-firefox-launcher',
                'karma-script-launcher',
                'karma-jasmine',
                'karma-teamcity-reporter',
                'karma-ie-launcher'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};

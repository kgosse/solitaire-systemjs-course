/* eslint-env node*/

module.exports = function (config) {
    "use strict";

    config.set({

        basePath: "./",

        files: [
            "app/bower_components/angular/angular.js",
            "app/bower_components/angular-route/angular-route.js",
            "app/bower_components/angular-mocks/angular-mocks.js",
            "app/bower_components/underscore/underscore.js",
            "app/klondike/piles/pile.js",
            "app/klondike/piles/foundationPile.js",
            "app/klondike/piles/remainderPile.js",
            "app/klondike/piles/tableauPile.js"
        ],

        jspm: {
            config: "app/config.js",
            packages: "app/bower_components/system.js/dist",
            serveFiles: [
                "app/**/*.js"
            ],
            loadFiles: [
                "tests/cards/card_test.js"
            ]
        },

        autoWatch: true,

        frameworks: ["jspm","jasmine"],

        browsers: ["Chrome"],

        plugins: [
            "karma-jspm",
            "karma-chrome-launcher",
            "karma-jasmine",
            "karma-junit-reporter"
        ],

        junitReporter: {
            outputFile: "test_out/unit.xml",
            suite: "unit"
        }

    });
};

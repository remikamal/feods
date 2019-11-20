let grunt = require("grunt");
let config = grunt.file.read("./config/dev-env/config.env")
grunt.file.write("./config/config.env", config)
grunt.initConfig({

    ts: {
        default: {
            src: ["./src/**/*.ts"],
            outDir: "bin",
            watch: "src",
            options: {
                compile: true,
                target: 'es2016',
                module: 'commonjs',
                fast: "watch",
                rootDir: "./src",
                noImplicitAny: false,
                comments: true,
                failOnTypeErrors: true,
                noImplicitAny: true,
                noImplicitReturns: true,
                pretty: true,
                strict: true,
                strictNullChecks: true,
                strictPropertyInitilization: true,
                strictNullChecks: true,
                verbose: true,
                sourceMap: false,
                declaration: false,

            }
        }
    }
});

grunt.loadNpmTasks("grunt-ts");
//grunt.registerTask("default", ["ts:copy"]);
grunt.registerTask('default', ['ts']);
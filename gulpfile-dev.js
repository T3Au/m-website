const {src,dest,series,parallel,watch} = require("gulp")
const webserver = require("gulp-webserver")
const webpackStream = require("webpack-stream")
const path = require("path")
const sass = require("gulp-sass")
const proxy = require("http-proxy-middleware")
const del = require("del")
function copyhtml(){
    return src("./*.html")
        .pipe(dest("./dev"))
}
function clear(target){
    return function(){
        return del(target)
    }
}
function packcss(){
    return src("./src/styles/app.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("./dev/styles"))
}
function packjs(){
    return src("./src/**/*")
        .pipe(webpackStream({
            mode: "development",
            entry: {
                app: "./src/app.js"
            },
            output: {
                filename: "[name].js",
                path: path.resolve(__dirname,"./dev")
            },
            module: {
                rules: [
                    {
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime']
                            }
                        }
                    },
                    { 
                        test: /\.html$/,
                        loader: "string-loader" 
                    }
                ]
            }
        }))
        .pipe(dest("./dev/scripts"))
}
function copylibs(){
    return src("./src/libs/**/*")
        .pipe(dest("./dev/libs"))
}
function copyimages(){
    return src("./src/images/**/*")
        .pipe(dest("./dev/images"))
}
function watcher(){
    watch("./*.html",series(clear("./dev/*.html"),copyhtml))
    watch("./src/styles/**/*",series(clear("./dev/styles"),packcss))
    watch(["./src/app.js","./src/controllers/**/*","./src/views/**/*","./src/modules/**/*","./src/router/**/*"],series(clear("./dev/scripts"),packjs))
    watch("./src/libs/**/*",series(clear("./dev/libs"),copylibs))
    watch("./src/images/**/*",series(clear("./dev/images"),copyimages))
}
function server(){
    return src("./dev")
        .pipe(webserver({
            host: "10.9.65.159",
            port: 8000,
            livereload: true,
            middleware: [
                proxy("/sjgo",{
                    target: "http://m.sjgo365.com",
                    changeOrigin: true,
                    pathRewrite: {
                        "^/sjgo": ""
                    }
                })
            ]
        }))
}
exports.default = series(parallel(packcss,packjs,copylibs,copyimages),copyhtml,server,watcher)

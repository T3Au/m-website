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
                        test: /\.art$/,
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
function copyicons(){
    return src("./src/icons/**/*")
        .pipe(dest("./dev/icons"))
}
function watcher(){
    watch("./*.html",series(clear("./dev/*.html"),copyhtml))
    watch("./src/styles/**/*",series(clear("./dev/styles"),packcss))
    watch(["./src/app.js","./src/controllers/**/*","./src/views/**/*"],series(clear("./dev/scripts"),packjs))
    watch("./src/libs/**/*",series(clear("./dev/libs"),copylibs))
    watch("./src/images/**/*",series(clear("./dev/images"),copyimages))
    watch("./src/icons/**/*",series(clear("./dev/icons"),copyicons))
}
function server(){
    return src("./dev")
        .pipe(webserver({
            port: 8000,
            livereload: true,
            middleware: [
                proxy("/sjgo_navbar",{
                    target: "http://m.sjgo365.com/Content/themes/index/json/navbar.json",   //源
                    changeOrigin: true, //访问不同的域名，需要配置成ture，loaclhost跨接口不需要
                    pathRewrite: {
                        "^/sjgo_navbar" : ""    //清除请求头
                    }
                })
            ]
        }))
}
exports.default = series(parallel(packcss,packjs,copylibs,copyimages,copyicons),copyhtml,server,watcher)

const name = require("./controllers/name.js")
const aaTpl = require("./views/index.html")
// name.a().then((xx)=>{
//     console.log(xx)
// })
async function abc(){
    let xxx = await name.a()
    console.log(xxx)
}
const newStr = template.render(aaTpl, {title: "ccc"},)
console.log(newStr)
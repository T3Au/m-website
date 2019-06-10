const indexActive = require("../views/index-active.html")
function reader(){
    const indexActiveStr = template.render(indexActive)
    $(".index-main").html(indexActiveStr)
}
export default{
    reader
}
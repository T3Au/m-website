const indexMy = require("../views/index-my.html")
function reader(){
    const indexMyStr = template.render(indexMy)
    $(".index-main").html(indexMyStr)
}
export default{
    reader
}
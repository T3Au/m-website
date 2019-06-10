const indexCart = require("../views/index-cart.html")
function reader(){
    const indexCartStr = template.render(indexCart)
    $(".index-main").html(indexCartStr)
}
export default{
    reader
}
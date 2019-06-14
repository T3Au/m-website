const indexMy = require("../views/index-my.html")
function reader(){
    const indexMyStr = template.render(indexMy)
    $(".index-main").html(indexMyStr)
    $("back").tap(function(e){
        e.preventDefault()
        history.back()
    })
}
export default{
    reader
}
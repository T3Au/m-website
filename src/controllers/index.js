const index = require("../views/index.html")
function reader(){
    $(".container").html(index)
    $("index>nav a").tap(function(e){
        e.preventDefault()
    })
}
export default{
    reader
}
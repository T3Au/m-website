const details = require("../views/details.html")
function reader(){
    const detailsStr = template.render(details)
    $(".container").html(detailsStr)
}
export default{
    reader
}
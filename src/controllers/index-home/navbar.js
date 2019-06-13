const indexHomeNavbar = require("../../views/index-home/navbar.html")
import loadData from "../../modules/loadData"
async function reader(){
    let navbar = await loadData.loadData("/sjgo/Content/themes/index/json/navbar.json")
    const indexHomeNavbarStr = template.render(indexHomeNavbar,{navbar})
    $(".index-main main nav").html(indexHomeNavbarStr)
}

export default{
    reader
}
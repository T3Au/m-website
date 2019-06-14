const indexEletricApplianceNewProducts = require("../../views/index-electricAppliance/newProducts.html")
import loadData from "../../modules/loadData"
async function reader(){
    let newProducts = await loadData.loadData("/sjgo/activity/eahome/json/newproducts.json")
    let start = 0
    const indexEletricApplianceNewProductsStr = template.render(indexEletricApplianceNewProducts,{newProducts, start})
    $(".newProducts>div").html(indexEletricApplianceNewProductsStr)
}

export default{
    reader
}
const indexHomeDynamicActs = require("../../views/index-home/dynamicActs.html")
import loadData from "../../modules/loadData"
async function reader(){
    let dynamicActs = await loadData.loadData("/sjgo/Content/themes/index/json/dynamicActs.json")
    const indexHomeDynamicActsStr = template.render(indexHomeDynamicActs,{dynamicActs})
    $(".dynamicActs").html(indexHomeDynamicActsStr)
    let data = []
    dynamicActs.forEach(ele => {
        ele.products.forEach(ele2=>{
            data.push(ele2.productID)
        })
    });
    let products = await loadData.loadProduct("/sjgo/Products/GetProductRealTimeInfo",{"productID" : data.join()})
    $(".currentPrice2").each(function(index){
        $(this).html("￥"+products.data[index].currentPrice)
    })
}

export default{
    reader
}
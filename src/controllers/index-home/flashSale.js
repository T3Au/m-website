const indexHomeFlashSale = require("../../views/index-home/flashSale.html")
const indexHomeFlashSaleMain = require("../../views/index-home/flashSaleMain.html")
import loadData from "../../modules/loadData"
async function reader(){
    let flashSale = await loadData.loadData("/sjgo/Content/themes/index/json/flashSale.json")
    const indexHomeFlashSaleStr = template.render(indexHomeFlashSale,{flashSale})
    $(".select").html(indexHomeFlashSaleStr)
    $(".flashSaleNav li:first-child").addClass("active")
    change(0)
    $(".flashSaleNav li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
        let index = $(this).attr("data")
        return change(index)
    })
    async function change(index){
        let data = flashSale[index]
        let products = []
        data.products.forEach(ele => {
            products.push(ele.productID)
        });
        products = await loadData.loadProduct("/sjgo/Products/GetProductRealTimeInfo",{"productID" : products.join()})
        const indexHomeFlashSaleMainStr = template.render(indexHomeFlashSaleMain,{data})
        $(".flashSaleMain").html(indexHomeFlashSaleMainStr)
        $(".currentPrice").each((index2,item)=>{
            $(item).html("￥"+products.data[index2].currentPrice)
        })
    }
}

export default{
    reader
}
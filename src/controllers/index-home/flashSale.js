const indexHomeFlashSale = require("../../views/index-home/flashSale.html")
const indexHomeFlashSaleMain = require("../../views/index-home/flashSaleMain.html")
import loadData from "../../modules/loadData"
async function reader(){
    let flashSale = await loadData.loadData("/sjgo/Content/themes/index/json/flashSale.json")
    let data = []
    flashSale.forEach((ele,index) => {
        data[index] = []
        ele.products.forEach(pro =>{
            data[index].push(pro.productID)
        })
    });
    let products = []
    const indexHomeFlashSaleStr = template.render(indexHomeFlashSale,{flashSale})
    $(".select").html(indexHomeFlashSaleStr)
    for(let i = 0; i < data.length; i++){
        products[i] = await loadData.loadProduct("/sjgo/Products/GetProductRealTimeInfo",{"productID" : data[i].join()})
    }
    change(0)
    $(".flashSaleNav li").on("click",function(){
        let index = $(this).attr("data")
        return change(index)
    })
    $(".select>ul>li:first-child").addClass("active")
    $(".select>ul>li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
    function change(index){
        let data = flashSale[index]
        const indexHomeFlashSaleMainStr = template.render(indexHomeFlashSaleMain,{data})
        $(".flashSaleMain").html(indexHomeFlashSaleMainStr)
        $(".currentPrice").each((index2,item)=>{
            $(item).html("￥"+products[index].data[index2].currentPrice)
        })
    }
}

export default{
    reader
}
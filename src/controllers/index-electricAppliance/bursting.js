const indexElectricAppliancebursting = require("../../views/index-electricAppliance/bursting.html")
const indexElectricApplianceburstingList = require("../../views/index-electricAppliance/burstingList.html")
import loadData from "../../modules/loadData"
async function reader(){
    let bursting = await loadData.loadData("/sjgo/activity/eahome/json/hotproducts.json")
    const indexElectricApplianceburstingStr = template.render(indexElectricAppliancebursting,{bursting})
    $(".select").html(indexElectricApplianceburstingStr)
    $(".selectHeader li:first-child").addClass("active")
    change(0)
    $(".selectHeader li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
        let index = $(this).attr("data")
        return change(index)
    })
    async function change(index){
        let data = bursting[index]
        let products = []
        data.products.forEach(ele => {
            products.push(ele.id)
        });
        products = await loadData.loadProduct("/sjgo/Products/GetProductRealTimeInfo",{"productID" : products.join()})
        const indexElectricApplianceburstingListStr = template.render(indexElectricApplianceburstingList,{data})
        $(".selectMain").html(indexElectricApplianceburstingListStr)
        $(".currentPrice").each((index2,item)=>{
            $(item).html("￥"+products.data[index2].currentPrice)
        })
    }
}

export default{
    reader
}
const indexHome = require("../views/index-home.html")
import loadData from "../modules/loadData"
import swiper from "./swiper"
async function reader(){
    let slider = await loadData.loadData("/sjgo/Content/themes/index/json/slider.json")
    let navbar = await loadData.loadData("/sjgo/Content/themes/index/json/navbar.json")
    let flashSale = await loadData.loadData("/sjgo/Content/themes/index/json/flashSale.json")
    let data = []
    flashSale.forEach((ele,index) => {
        data[index] = []
        ele.products.forEach(pro =>{
            data[index].push(pro.productID)
        })
    });
    let products = []
    for(let i = 0; i < data.length; i++){ 
        products[i] = await loadData.loadProduct("/sjgo/Products/GetProductRealTimeInfo",{"productID" : data[i].join()})
    }
    const indexHomeStr = template.render(indexHome,{slider,navbar,flashSale,products})
    $(".index-main").html(indexHomeStr)
    swiper.swiper(".swiper-container")
    $(".select>ul>li:first-child").addClass("active")
    $(".select>ul>li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
}
export default{
    reader
}
const detailsMain = require("../../views/details/detailsMain.html")
import loadData from "../../modules/loadData"
async function reader(){
    let id = location.href.split("?")[1]
    let data = await loadData.loadProduct("/sjgo/Products/GetProductRealTimeInfo",{"productID" : id})
    data = data.data[0]
    const detailsMainStr = template.render(detailsMain,{data})
    $("main").html(detailsMainStr)
    let mySwiper = new Swiper (".swiper-container", {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
        }
    })
}

export default{
    reader
}
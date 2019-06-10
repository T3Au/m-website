const indexHomeSlider = require("../../views/index-home/slider.html")
import loadData from "../modules/loadData"
function reader(){
    let slider = await loadData.loadData("/sjgo/Content/themes/index/json/slider.json")
    const indexHomeSliderStr = template.render(indexHomeSlider,{slider})
    $(".swiper-container").html(indexHomeSliderStr)
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
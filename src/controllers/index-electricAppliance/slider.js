const indexEletricApplianceSlider = require("../../views/index-electricAppliance/slider.html")
import loadData from "../../modules/loadData"
async function reader(){
    let slider = await loadData.loadData("/sjgo/activity/eahome/json/slider.json")
    const indexEletricApplianceSliderStr = template.render(indexEletricApplianceSlider,{slider})
    $(".swiper-container").html(indexEletricApplianceSliderStr)
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
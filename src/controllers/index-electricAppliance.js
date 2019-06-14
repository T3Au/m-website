const indexElectricAppliance = require("../views/index-electricAppliance.html")
import indexElectricApplianceSlider from "./index-electricAppliance/slider"
import indexElectricApplianceBursting from "./index-electricAppliance/bursting"
import indexElectricApplianceNewProducts from "./index-electricAppliance/newProducts"
async function reader(){
    $(".index-main").html(indexElectricAppliance)
    await indexElectricApplianceSlider.reader()
    await indexElectricApplianceBursting.reader()
    await indexElectricApplianceNewProducts.reader()
    let electricApplianceScroll = new BScroll('.index-main',{
        scrollY: true,
        click: true,
        bounce: false,
        probeType: 3
    })
    $(".returnTop").tap(function(e){
        electricApplianceScroll.scrollTo(0,0,1000)
    })
    electricApplianceScroll.on("beforeScrollStart",function(){
        this.refresh()
    })
    let topX = document.querySelector(".newProducts").offsetTop
    let H = document.querySelectorAll(".newProducts>div>ul>li")[0].offsetHeight
    let start = 0
    electricApplianceScroll.on("scroll",function(){
        if(this.y < -180){
            $(".returnTop").css({
                "display":"block"
                })
        }else{
            $(".returnTop").css({
                "display":"none"
                })
        }
        if(this.y < -topX){
            load()
        }
    })
    function load(){
        if(start > $(".newProducts img").length) return
        for(let i = start; i < (start +3); i++){
            $(".newProducts img").eq(i).attr("src",$(".newProducts img").eq(i).attr("data"))
        }
        start += 3
        topX += H
    }
}
export default{
    reader
}
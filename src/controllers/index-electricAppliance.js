const indexElectricAppliance = require("../views/index-electricAppliance.html")
import indexElectricApplianceSlider from "./index-electricAppliance/slider"
import indexElectricApplianceBursting from "./index-electricAppliance/bursting"
async function reader(){
    $(".index-main").html(indexElectricAppliance)
    await indexElectricApplianceSlider.reader()
    await indexElectricApplianceBursting.reader()
    let electricApplianceScroll = new BScroll('.index-main',{
        scrollY: true,
        click: true,
        bounce: false,
        probeType: 3
    })
    console.log(electricApplianceScroll.maxScrollY)
    $(".returnTop").on("click",function(e){
        electricApplianceScroll.scrollTo(0,0,1000)
    })
    electricApplianceScroll.on("beforeScrollStart",function(){
        this.refresh()
    })
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
    })
}
export default{
    reader
}
const indexHome = require("../views/index-home.html")
import indexHomeSlider from "./index-home/slider"
import indexHomeNavbar from "./index-home/navbar"
import indexHomeFlashSale from "./index-home/flashSale"
import indexHomeDynamicActs from "./index-home/dynamicActs"
function reader(){
    $(".index-main").html(indexHome)
    indexHomeSlider.reader()
    indexHomeNavbar.reader()
    indexHomeFlashSale.reader()
    indexHomeDynamicActs.reader()
    let homeScroll = new BScroll('.index-home>main',{
        scrollY: true,
        click: true,
        bounce: false,
        probeType: 3
    })
    $(".returnTop").tap(function(e){
        homeScroll.scrollTo(0,0,1000)
    })
    homeScroll.on("beforeScrollStart",function(){
        this.refresh()
    })
    homeScroll.on("scroll",function(){
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
    $("index-home>header>header>a").tap(function(e){
        e.preventDefault()
    })
}
export default{
    reader
}
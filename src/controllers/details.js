const details = require("../views/details.html")
const detailsMore = require("../views/details/detailsMore.html")
import detailsMain from "./details/detailsMain"
async function reader(){
    $(".container").html(details)
    $(".back").tap(function(e){
        e.preventDefault()
        history.back()
    })
    await detailsMain.reader()
    let detailsScroll = new BScroll('.details main',{
        scrollY: true,
        tap: true,
        bounce: {
            top: false,
            bottom: true,
            left: false,
            right: false
        },
        probeType: 3
    })
    $(".returnTop").tap(function(){
        detailsScroll.scrollTo(0,0,1000)
    })
    detailsScroll.on("beforeScrollStart",function(){
        this.refresh()
    })
    detailsScroll.on("scroll",function(){
        console.log(this.y)
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
    let fun = null
    detailsScroll.on("touchEnd", fun = function(){
        if((this.y - this.maxScrollY) < 0){
            this.stop()
            let id = location.href.split("?")[1]
            const detailsMoreStr = template.render(detailsMore,{id})
            $(".detailsMore").html(detailsMoreStr)
            $(".tips").html("<span>商品详情</span>")
            detailsScroll.removeEventListener("touchEnd",fun)
        }
    })
}
export default{
    reader
}
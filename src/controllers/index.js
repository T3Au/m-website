function readerIndex(){
    const index = require("../views/index/index.html")
    let indexStr = template.render(index)
    $(".container").html(indexStr)
}
function readerIndexSwiper(data){
    const indexSwiper = require("../views/index/index-swiper.html")
    let indexSwiperStr = template.render(indexSwiper,{data})
    console.log(indexSwiperStr)
}
module.exports = {
    readerIndex,
    readerIndexSwiper
}
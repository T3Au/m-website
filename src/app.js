const index = require("./controllers/index")
const {slider} = require("./modules/loadData")
const swiper =  require("./controllers/swiper")
index.readerIndex()
async function reader(){
    console.log(1)
    var data = await slider()
    console.log(data)
    index.readerIndexSwiper(data)
}
reader()
swiper.swiper()

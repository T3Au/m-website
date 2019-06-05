module.exports = {
    swiper(){
        let mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            autoplay:true,
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
}
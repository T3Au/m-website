function swiper(a){
    let mySwiper = new Swiper (a, {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
        }
    })
}
export default{
    swiper
}
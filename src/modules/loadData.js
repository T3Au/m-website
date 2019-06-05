function slider(){  
    return $.ajax({
        url: "/sjgo/Content/themes/index/json/slider.json",
        success(res){
            return res
        }
    })
}
module.exports = {
    slider
}
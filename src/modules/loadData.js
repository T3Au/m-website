function loadData(u,d = null){  
    return $.ajax({
        url: u,
        data: d,
        success(res){
            return res
        }
    })
}
function loadProduct(u,d = null){
    return $.ajax({
        url: u,
        type: "POST",
        data: d,
        success(res){
            return res
        }
    })
}
module.exports = {
    loadData,
    loadProduct
}
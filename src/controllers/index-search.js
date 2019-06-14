const indexSearch = require("../views/index-search.html")
import indexSearchCategories from "./index-search/categories"
function reader(){
    $(".index-main").html(indexSearch)
    $(".index-search>header>a").tap(function(e){
        e.preventDefault()
        history.back()
    })
    indexSearchCategories.reader()
}
export default {
    reader
}
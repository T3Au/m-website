const indexSearchCategories = require("../../views/index-search/categories.html")
import loadData from "../../modules/loadData"
async function reader(){
    const categories = await loadData.loadData("/sjgo/Content/themes/index/json/categories.json")
    const indexSearchCategoriesStr = template.render(indexSearchCategories,{categories})
    $(".index-search main").html(indexSearchCategoriesStr)
    $("main>ul>li:first-child").addClass("active")
    $("main>ul>li").tap(function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
}
export default{
    reader
}
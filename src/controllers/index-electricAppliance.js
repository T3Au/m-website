const indexElectricAppliance = require("../views/index-electricAppliance.html")
function reader(){
    const indexElectricApplianceStr = template.render(indexElectricAppliance)
    $(".index-main").html(indexElectricApplianceStr)
}
export default{
    reader
}
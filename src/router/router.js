import index from "../controllers/index"
import indexHome from "../controllers/index-home"
import indexElectricAppliance from "../controllers/index-electricAppliance"
import indexActive from "../controllers/index-active"
import indexCart from "../controllers/index-cart"
import indexMy from "../controllers/index-my"
import details from "../controllers/details"
class Router {
    constructor(obj){
        this.mode = obj.mode
        this.routes = {
            "index" : index,
            "index/home" : indexHome,
            "index/electricAppliance" : indexElectricAppliance,
            "index/active" : indexActive,
            "index/cart" : indexCart,
            "index/my" : indexMy,
            "details" : details
        }
        this.init()
    }
    init(){
        if(this.mode === "hash"){
            window.addEventListener("load",this.hashRead.bind(this))
            window.addEventListener("hashchange",this.hashRead.bind(this))
        }
    }
    hashRead(e){
        if(e.newURL){
            this.oldURL = e.oldURL.split("#")[1]
            if(this.oldURL){
                this.oldURL = this.oldURL.split("?")[0]
            }
        }
        console.log()
        this.path = location.hash.slice(1).split("?")[0]
        this.pathList = this.path.split("/")
        this.loadView()
    }
    loadView(){
        let parent = ""
        let child = ""
        if(this.oldURL){
            let oldURLList = this.oldURL.split("/")
            this.pathList.forEach((item, index) => {
                if(index === 0 && item === "")  {
                    this.controllers("index")
                    this.controllers("index/home")
                }else if(this.pathList[index] == oldURLList[index]){
                    parent += `/${this.pathList[index]}`
                }else if(this.pathList[index] != oldURLList[index]){
                    parent += `/${this.pathList[index]}`
                    child = parent.slice(1)
                    console.log(1)
                    this.controllers(child)
                }
            })
        }else{
            this.pathList.forEach((item,index) =>{
                if(index === 0 && item === ""){
                    this.controllers("index")
                    this.controllers("index/home")
                }else{
                    parent +=`/${this.pathList[index]}`
                    child = parent.slice(1)
                    this.controllers(child)
                }
            })
        }
        if(this.pathList[0] === ""){
            this.active("home")
        }else if(this.pathList[0] === "index"){
            this.active(this.pathList[1])
        }
    }
    controllers(route){
        this.routes[route].reader()
    }
    active(a){
        $(`#${a}`).addClass("active").siblings().removeClass("active")
    }
}
export default{
    Router
}
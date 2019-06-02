module.exports = {
    name: "tangxin",
    a: function(){
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                let xx =1;
                resolve(xx);
            },2000)
        })
    }
}
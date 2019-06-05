function a(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
                let xx =1;
                resolve(xx);
            },2000)
    })
}
function b(){
    return async ()=>{
        let xx = await a()
        console.log(xx)
    }
}
module.exports = {
    a
}
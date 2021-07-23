/* 
    创建立即执行函数体
    通过this拿到全局对象 window
    再通过第二个参数拿到工厂函数 factory
*/


(function (global, factory){
    console.log(global);
    console.log(factory);
}(this, function(){
    console.log(this);
}));
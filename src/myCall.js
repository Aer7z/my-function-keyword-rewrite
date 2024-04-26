Function.prototype.myCall = function(context){
  // parameters 取从一到结束的参数
    let parameters = Array.from(arguments).slice(1)
    context.fn = this
    context.fn(...parameters)
    delete context.fn
}

let person={
  name:"Zhangsan"
}

let fn1 = function (){
  console.log(this.name)
}
let fn2 = function (a,b){
  console.log(a, b)
  console.log(this.name)
}

fn1.myCall(person)
fn2.myCall(person,'1','2')
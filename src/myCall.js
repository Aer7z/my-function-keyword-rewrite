Function.prototype.myCall = function(context){
    if(typeof this !== 'function' ){
      throw new TypeError("the caller is not a function")
    }
    let parameters = Array.from(arguments).slice(1)
    // 变量不使用点选择法用方括号选择法
    const fn = Symbol("function property")
    context[fn] = this
    context[fn](...parameters)
    delete context[fn]
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
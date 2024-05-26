Function.prototype.myApply = function(context,pramsArray){
  //没有默认值的参数是undefined，无法展开
  //所以这里给了一个默认值
  'use strict'
  if(typeof this !== 'function' ){
    throw new TypeError("the caller is not a function")
  }
  // 变量不使用点选择法用方括号选择法
  if(pramsArray===undefined){
    pramsArray=[]
  }
  const fn = Symbol("function property")
  // 这里的this是调用myApply的函数
  context[fn] = this
  context[fn](...pramsArray)
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

fn1.myApply(person)
fn2.myApply(person,['1','2'])
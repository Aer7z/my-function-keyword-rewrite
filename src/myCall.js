Function.prototype.myCall = function(context){
    context.fn = this
    context.fn()
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
// fn2.myCall(person,'1','2')
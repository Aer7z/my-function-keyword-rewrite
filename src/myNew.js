function myNew(Fn, array) {
  if(typeof Fn !== "function"){
    console.log("the type of Fn is not function")
    return 
  }
  let result = {}
  // 原型指向
  result.__proto__ = Fn.protoytype
  // 构造函数带返回值的情况
  let newResult = Fn.call(result, ...array)
  // 如果新的newResult不是空的，就用newResult
  return newResult ? newResult : result
}

var Person= function(name, sex) {
  this.name = name
  this.sex = sex
}

let person = [
  ['zs', '男']  ,
  ['zss', '女']  ,
]
// 测试
let obj = myNew(Person, person[0])
console.log(JSON.stringify(obj))
// 测试构造函数类型不为函数是否可以检测出来
myNew(person, person[0])
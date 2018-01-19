/**
 * 自定义模块1
 */
function coolModule() {
  //1、私有的数据
  var msg = 'atguigu'
  var names = ['I', 'Love', 'you']

  //2、私有的操作数据的函数
  function doSomething() {
    console.log(msg.toUpperCase())
  }
  function doOtherthing() {
    console.log(names.join(' '))
  }

  //3、向外暴露包含多个方法的对象
  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
}
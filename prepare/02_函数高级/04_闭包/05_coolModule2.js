/**
 * 自定义模块2
 */
(function (window) {
  //私有的数据
  var msg = 'atguigu'
  var names = ['I', 'Love', 'you']
  //操作数据的函数
  function a() {
    console.log(msg.toUpperCase())
  }
  function b() {
    //join() 方法用于把数组中的所有元素放入一个字符串。
      // 元素是通过指定的分隔符进行分隔的。join(' ')以空格分隔
    console.log(names.join(' '))
  }

  window.coolModule2 =  {
    doSomething: a,
    doOtherthing: b
  }
})(window)
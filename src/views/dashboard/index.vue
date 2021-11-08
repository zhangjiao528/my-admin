<template>
  <div class="content">
    
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    // let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
    // let nameNum = names.reduce((pre,cur)=>{
    //   if(cur in pre){
    //     pre[cur]++
    //   }else{
    //     pre[cur] = 1 
    //   }
    //   return pre
    // },{})
    // console.log(nameNum); 

    // let obj = {
    //   name: 'zj',
    //   age: 30,
    //   address: '西安'
    // }
    // console.log('height' in obj)

    // function fun(n, o) {
    //   console.log(o);
    //   return {
    //     fun: function(m) {
    //       return fun(m, n)
    //     }
    //   }
    // }
    /**
     *  {
          fun: function(m) {
            return fun(m, n)
          }
        }
        a是一个对象a.fun(1) 返回的是上一个的变量
     */
    // var b = fun(0)              
    //         .fun(1)
    //         .fun(2)
    //         .fun(3);
    // console.log(b)

    // var c = fun(0).fun(1)
    // c.fun(2) c.fun(3) 

    // 执行完fun(0).fun(1)后，再执行c.fun(2) c.fun(3) 的时候上一次执行的第一个参数是1
    // fun(0) : {
    //   fun: function(m) {
    //     return fun(m, n)
    //   }
    // }

    // fun(0).fun(1) : {
    //   fun: function(1) {
    //     return fun(1, n)     // 打印出的是n，而n是上一次的n，也就是0
    //   }
    // }

    // fun(0).fun(1).fun(2) : {
    //   fun: function(2) {
    //     return fun(2, n)     // 打印出的是n，而n是上一次的n，也就是1
    //   }
    // }

    // fun(0).fun(1).fun(2).fun(3) : {
    //   fun: function(3) {
    //     return fun(3, n)     // 打印出的是n，而n是上一次的n，也就是2
    //   }
    // }
    
    
  }
}
</script>
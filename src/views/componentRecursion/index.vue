<template>
  <div>
    <Recursion :list="list"></Recursion>
  </div>
</template>

<script>
// 这里导入的时候命名和recursion.vue内部的name属性是不冲突的，可以自由命名
import Recursion from "./components/recursion.vue";

export default {
  components: {
    Recursion,
  },
  data() {
    return {
      list: [
        {
          id: '1',
          name: '导航一',
          children: [
            {
              id: '1-1',
              name: '选项一',
            },
            {
              id: '1-2',
              name: '选项二',
            },
            {
              id: '1-3',
              name: '选项三',
            },
          ]
        },
        {
          id: '2',
          name: '导航二'
        },
        {
          id: '3',
          name: '导航三'
        },
        {
          id: '4',
          name: '导航四'
        },
      ],
    };
  },
};
</script>
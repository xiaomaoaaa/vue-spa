<template>
  <link rel="stylesheet" href="./assets/css/weui.min.css">
  <link rel="stylesheet" href="./assets/css/jquery-weui.min.css">
  <link rel="stylesheet" href="./assets/css/base.css">
  <com-header></com-header>
  <div class="wrap">
    内容区
  </div>
</template>
<script src="./assets/js/jquery-2.1.4.js"></script>
<script src="./assets/js/jquery-weui.min.js"></script>
<script>
  import comHeader from './components/comHeader.vue'

  export default {
    components: { 'comHeader': comHeader},
    data () {
      return {
        totalTime: 1.5
      }
    }
  }
</script>                              
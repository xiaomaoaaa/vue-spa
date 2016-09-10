<template>
  <com-header :title="title"></com-header>
  <div class="wrap">
    内容区
  </div>
</template>
<script>
  import comHeader from './components/comHeader.vue'
  import jquery from './assets/js/jquery-weui.min.js'

  export default {
    components: { 'comHeader': comHeader},
    data () {
      return {
        title: '菜篮'
      }
    }
  }
</script>   
<style>
  @import './components/css/base.css';

</style>                           
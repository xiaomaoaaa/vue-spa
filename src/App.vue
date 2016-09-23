<template>
  <div class="container">
    <com-header></com-header>
    <home>

    </home>
  </div>
</template>
<script>
  import comHeader from './components/comHeader.vue'
  import home from './components/home.vue'
  import store from './vuex/store'

  export default {
    components: {
      'comHeader': comHeader,
      home
    },
    store
  }
</script>                        
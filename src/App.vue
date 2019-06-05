<template>
  <div id="app">
    <mt-header title="猫_狗"></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="gou">
        <img slot="icon" src="./assets/img/dog_head.png">
        小汪汪
      </mt-tab-item>
      <mt-tab-item id="gougutou">
        <img slot="icon" src="./assets/img/dog_bar.png">
        磨牙棒
      </mt-tab-item>
      <mt-tab-item id="mao">
        <img slot="icon" src="./assets/img/cat_head.png">
        小喵咪
      </mt-tab-item>
      <mt-tab-item id="maocesuo">
        <img slot="icon" src="./assets/img/cat_toilet.png">
        猫厕所
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selected: ''
      }
    },
    watch: {
      selected(newVue, oldVue) {
        console.log(newVue);
        this.$router.push({
          name: newVue
        })
      }
    }
  }
</script>
<style scoped>
</style>

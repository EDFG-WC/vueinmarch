<template>
  <div>
    <!--此处增加一个轮播图-->
    <mt-swipe :auto="4000">
      <!--在组件中使用v-for一定要使用:key-->
      <mt-swipe-item v-for="img in pics" :key="img.id">
        <img :src="img.img">
      </mt-swipe-item>
    </mt-swipe>
    <!--六宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/img/mui1.png">
        <div class="mui-media-body">笔画</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/img/mui2.png">
        <div class="mui-media-body">抽屉</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/img/mui3.png">
        <div class="mui-media-body">笔记</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/img/mui4.png">
        <div class="mui-media-body">屏幕</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/img/mui5.png">
        <div class="mui-media-body">翻墙</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/img/mui6.png">
        <div class="mui-media-body">设置</div>
      </a></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Dog',
    data() {
      return {
        msg: '可爱的狗狗',
        pics: [] //保存组件的轮播图
      }
    },
    //created创建组件的声明周期中, 可以操作数据
    created() {
      this.getLunBo();
    },
    methods: {
      getLunBo() {
        this.$axios.get('getlunbo').then(res => {
          //res.data.message = [{img:'图片地址'}]
          this.pics = res.data.message;
          console.log(res.data.message)
        }).catch(err => console.log('轮播图获取异常', err));
      }
    }
  }
</script>
<style scoped>
  .mint-swipe {
    height: 200px;
  }

  /*可能会有问题*/
  img {
    width: 100%;
    height: 100%;
  }

  /*  .grid li {
      list-style: none;
      float: left;
      width: 33%;
      background-color: #2b542c;
    }*/
  /**
    这里样式要注意, .mui-grid-view.mui-grid-9是编译过后在页面上找到的class, img的大小一般都单独定义
   */
  .mui-grid-view.mui-grid-9 {
    background-color: white;
    border: none;
  }

  .mui-grid-view.mui-grid-9 img {
    height: 60px;
    width: 60px;
  }
  /**
   类下面的类
   */
  .mui-grid-view.mui-grid-9 .mui-media-body {
    font-size: 13px;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
  }


</style>

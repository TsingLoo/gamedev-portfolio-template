<template>
  <div class="footer">
    <div class="left">
    Xiaonan's <a href="https://github.com/TsingLoo/gamedev-portfolio-template" target="blank">Portfolio</a> 
    <br /> 
    <div class="green-text">Template by <a href="https://github.com/schouffy/gamedev-portfolio" target="blank">schouffy</a> 
    and <a href="https://github.com/11BelowStudio/gamedev-portfolio-template/tree/vite-vue3" target="blank">11BelowStudio</a></div>
<div class="beian-container">
    <!-- 公安备案 -->
    <div class="beian-item">
                <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2022016248号-1</a>  &nbsp &nbsp  <img src="https://beian.mps.gov.cn/img/logo01.dd7ff50e.png" class="gongan-logo" /> 
        <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32059002005637" target="_blank">苏公网安备32059002005637号</a>
    </div>
</div>
  
  </div>
<div class="right">Reach me at <a href="mailto:xiaonan.application@outlook.com">xiaonan.application@outlook.com</a> or <router-link to="/contact">through here</router-link></div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer"
});

</script>


<style>
.beian-container {
    font-size: 14px;              /* 统一字体大小 */
    line-height: 1.5;             /* 统一行高 */
    color: #666;                  /* 统一文字颜色 */
}

.beian-item {
    margin: 4px 0;                /* 统一项间距 */
    display: flex;                /* 弹性布局保持对齐 */
    align-items: center;          /* 垂直居中 */
}

.beian-item a {
    /*color: #666;                  /* 统一链接颜色 */
    text-decoration: none;        /* 统一去下划线 */
    transition: color 0.3s;       /* 统一悬停效果 */
}

.beian-item a:hover {
    /*color: #333;                  /* 悬停颜色统一 */
}

.gongan-logo {
    height: 1em;                  /* 保持与字体等高 */
    vertical-align: middle;       /* 垂直对齐 */
    margin-right: 5px;            /* 统一图标间距 */
}
</style>

<style scoped lang="less">

@import '../css/variables.less';

.footer {
  background-color: @bodyBgColor;
  width: 100%;
  font-size: 0.8em;
  opacity: 0.7;
  padding-bottom: 30px;
}

.left, .right {
  padding-top: 10px;
  text-align: left;
  line-height: 1.2;
}

.green-text { 
  color: #707070; /* Bright green color */ 
}

.beian { 
  font-size: 0.94em;
}

@media only screen and (min-width: 620px){

  .footer {
    padding: 0;
  }

  .left, .right {
    padding: 20px;
  }

  .left {
    float: left;
  }

  .right {
    float:right;
  }
}
</style>
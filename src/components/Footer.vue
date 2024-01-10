<template>
  <div class="footer">
    <div class="left">
    Xiaonan's <a href="https://github.com/TsingLoo/gamedev-portfolio-template" target="blank">Portfolio</a> 
    <br /> 
    <div class="green-text">Template by <a href="https://github.com/schouffy/gamedev-portfolio" target="blank">schouffy</a> 
    and <a href="https://github.com/11BelowStudio/gamedev-portfolio-template" target="blank">11BelowStudio</a></div>
</div>
<div class="right">Reach me at <a href="mailto:TsingLoo@Outlook.com">TsingLoo@Outlook.com</a> or <router-link to="/contact">through here</router-link></div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer"
});

</script>

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
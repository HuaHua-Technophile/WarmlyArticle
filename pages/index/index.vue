<template>
  <view
    class="vw-100 vh-100 d-flex justify-content-center align-items-center"
    :style="`background:
    linear-gradient(${bgcolor1},${bgcolor2});`"
    :data-bs-theme="theme">
    <view>
      <swiper-container class="w-100 mt-5">
        <swiper-slide v-for="item in 5">轮播图 {{ item }}</swiper-slide>
      </swiper-container>
    </view>
    <nav-bar></nav-bar>
  </view>
</template>
<script setup>
  import { ref } from "vue";
  import { storeToRefs } from "pinia";
  import { useThemeStore } from "../../stores/theme.js"; //导入pinia
  //--------------主题色修改------------------
  let store = useThemeStore();
  let { theme, bgcolor1, bgcolor2 } = storeToRefs(store);
</script>
<style lang="scss"></style>

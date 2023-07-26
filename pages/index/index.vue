<template>
  <view
    class="vw-100 vh-100 d-flex justify-content-center align-items-center"
    :style="`background:
    linear-gradient(${bgcolor1},${bgcolor2});`"
    :data-bs-theme="theme">
    <view class="">
      {{ title }}
      {{ theme }}
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
  let title = ref("Hello2334");
</script>
<style></style>

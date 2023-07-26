<template>
  <view
    id="navBar"
    :class="theme == 'light' ? 'bg-opacity-10' : 'bg-opacity-100'"
    class="d-flex justify-content-between position-fixed bottom-0 vw-100"
    style="
      height: 50px;
      color: #7c817b !important;
      background: rgba(27, 27, 27, var(--bs-bg-opacity));
    ">
    <view
      class="h-100 overflow-hidden d-flex justify-content-center align-items-center position-relative"
      data-url="index"
      data-id="0"
      style="width: 36%"
      @click="addRipple">
      首页
    </view>
    <view
      class="h-100 overflow-hidden d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle"
      style="width: 36%"
      data-url="recommend"
      data-id="1"
      @click="addRipple">
      探索
    </view>
    <view
      class="h-100 overflow-hidden d-flex justify-content-center align-items-center position-relative"
      style="width: 36%"
      data-url="mine"
      data-id="2"
      @click="addRipple">
      我
    </view>
  </view>
</template>

<script setup>
  import { storeToRefs } from "pinia";
  import { useThemeStore } from "../../stores/theme.js"; //导入pinia
  //--------------主题色修改------------------
  let store = useThemeStore();
  let { theme } = storeToRefs(store);
  let addRipple = (e) => {
    uni.redirectTo({
      url: `../../pages/${e.currentTarget.dataset.url}/${e.currentTarget.dataset.url}`,
    });
  };
</script>

<style></style>

<template>
  <view class="vw-100 vh-100 d-flex justify-content-center align-items-center bg-body-secondary" :data-bs-theme="theme">
    <view class="">
      {{title}}
      {{theme}}
      <button @click="settingChangeTheme">暗色</button>
    </view>
    <nav-bar></nav-bar>
  </view>
</template>
<script setup>
  import {
    ref
  } from 'vue'
  import {
    storeToRefs
  } from 'pinia'
  import {
    useThemeStore
  } from "../../stores/theme.js"; //导入pinia
  //--------------主题色修改------------------
  let store = useThemeStore();
  let {
    theme
  } = storeToRefs(store);
  let {
    changeTheme
  } = store;
  let settingChangeTheme = () => {
    changeTheme();
  };
  let title = ref('Hello2334');
</script>
<style>
</style>
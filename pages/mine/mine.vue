<template>
  <view>
    <button @click="settingChangeTheme">暗色</button>
    <nav-bar></nav-bar>
  </view>
</template>

<script setup>
  import {
    useThemeStore
  } from "../../stores/theme.js"; //导入pinia
  let store = useThemeStore();
  let {
    changeTheme
  } = store;
  let settingChangeTheme = () => {
    changeTheme();
  };
</script>

<style lang="scss">

</style>
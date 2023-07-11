<template>
  <view class="vw-100 vh-100 d-flex justify-content-center align-items-center bg-body-secondary">
    <view class="">
      {{title}}
      <button @click="changeTheme">暗色</button>
    </view>
    <nav-bar></nav-bar>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  let title = ref('Hello2334');
  let changeTheme = () => {
    let root = document.getRootNode()
    console.log(root)
    // document.documentElement.dataset.bsTheme = "dark";
    root.dataset.bsTheme = "dark"
  }
</script>

<style>
</style>
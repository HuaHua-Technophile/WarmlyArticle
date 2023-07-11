<template>
  <view class="vw-100 vh-100 d-flex justify-content-center align-items-center bg-body-secondary">
    <view class="">
      {{title}}
    </view>
    <nav-bar></nav-bar>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  let title = ref('Hello2334');
</script>

<style>
</style>
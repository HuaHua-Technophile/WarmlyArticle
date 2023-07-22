<script setup>
  import {
    onLaunch,
    onHide,
    onShow
  } from '@dcloudio/uni-app'
  onLaunch(() => {
    console.log('app launch')
  })
  onHide(() => {
    console.log('app Hide')
  })
  onShow(() => {
    console.log('app Show')
  })
</script>

<style lang="scss">
  /*每个页面公共css */
</style>
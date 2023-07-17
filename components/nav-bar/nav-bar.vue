<template>
  <view
    id="navBar"
    class="d-flex justify-content-between position-fixed bottom-0 vw-100 bg-dark bg-opacity-10"
    style="height: 50px; color: #7c817b !important">
    <view
      class="h-100 overflow-hidden d-flex justify-content-center align-items-center position-relative"
      id="navBar0"
      data-id="0"
      style="width: 36%"
      @click="addRipple">
      首页
    </view>
    <view
      class="h-100 overflow-hidden d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle"
      style="width: 36%"
      id="navBar1"
      data-id="1"
      @click="addRipple">
      探索
    </view>
    <view
      class="h-100 overflow-hidden d-flex justify-content-center align-items-center position-relative"
      style="width: 36%"
      id="navBar2"
      data-id="2"
      @click="addRipple">
      我
    </view>
  </view>
</template>

<script setup>
  let addRipple = (e) => {
    let ripple = document.createElement("view");
    ripple.setAttribute(
      "style",
      `height:45px;width:45px;border-radius:999px;
      background:radial-gradient(circle at 50% 50%,transparent,rgba(var(--bs-body-color-rgb),0.4));
      position:absolute;
      bottom:calc(100vh - ${e.detail.y}px);
      left:calc(${e.detail.x}px - ${32.08 * e.currentTarget.dataset.id}vw);
      animation: ripple 2s both !important;`
    );
    ripple.classList.add("ripple");
    let target = document.getElementById(`navBar${e.currentTarget.dataset.id}`);
    target.appendChild(ripple);
    setTimeout(() => {
      target.removeChild(ripple);
    }, 2000);
  };
</script>

<style></style>

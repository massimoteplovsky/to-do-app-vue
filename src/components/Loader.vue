<template>
  <div class="loader">
    <div class="loadingio-spinner-double-ring-5m1k7a3ui4c">
      <div class="ldio-t7lcemf0qt">
        <div></div>
        <div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoaderComponent',
};
</script>
<style lang="scss">
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

@keyframes ldio-t7lcemf0qt {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-t7lcemf0qt div {
  box-sizing: border-box !important;
}
.ldio-t7lcemf0qt > div {
  position: absolute;
  width: 144px;
  height: 144px;
  top: 28px;
  left: 28px;
  border-radius: 50%;
  border: 16px solid #000;
  border-color: #e15b64 transparent #e15b64 transparent;
  animation: ldio-t7lcemf0qt 1s linear infinite;
}

.ldio-t7lcemf0qt > div:nth-child(2),
.ldio-t7lcemf0qt > div:nth-child(4) {
  width: 108px;
  height: 108px;
  top: 46px;
  left: 46px;
  animation: ldio-t7lcemf0qt 1s linear infinite reverse;
}
.ldio-t7lcemf0qt > div:nth-child(2) {
  border-color: transparent #f8b26a transparent #f8b26a;
}
.ldio-t7lcemf0qt > div:nth-child(3) {
  border-color: transparent;
}
.ldio-t7lcemf0qt > div:nth-child(3) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.ldio-t7lcemf0qt > div:nth-child(3) div:before,
.ldio-t7lcemf0qt > div:nth-child(3) div:after {
  content: '';
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  top: -16px;
  left: 48px;
  background: #e15b64;
  border-radius: 50%;
  box-shadow: 0 128px 0 0 #e15b64;
}
.ldio-t7lcemf0qt > div:nth-child(3) div:after {
  left: -16px;
  top: 48px;
  box-shadow: 128px 0 0 0 #e15b64;
}

.ldio-t7lcemf0qt > div:nth-child(4) {
  border-color: transparent;
}
.ldio-t7lcemf0qt > div:nth-child(4) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.ldio-t7lcemf0qt > div:nth-child(4) div:before,
.ldio-t7lcemf0qt > div:nth-child(4) div:after {
  content: '';
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  top: -16px;
  left: 30px;
  background: #f8b26a;
  border-radius: 50%;
  box-shadow: 0 92px 0 0 #f8b26a;
}
.ldio-t7lcemf0qt > div:nth-child(4) div:after {
  left: -16px;
  top: 30px;
  box-shadow: 92px 0 0 0 #f8b26a;
}
.loadingio-spinner-double-ring-5m1k7a3ui4c {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-t7lcemf0qt {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}
.ldio-t7lcemf0qt div {
  box-sizing: content-box;
}
</style>

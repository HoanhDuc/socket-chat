<template>
  <div class="overlay">
    <div class="overlay__inner">
      <div class="overlay__content flex flex-col justify-center items-center">
        <span class="spinner mb-3"></span><span class="text-white">Loading...</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  position: fixed;
  z-index: 10000000;
}
.overlay__inner {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

.overlay__content {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.spinner {
  width: 50px;
  height: 50px;
  display: inline-block;
  border-width: 2px;
  border-color: #fff;
  border-top-color: #000;
  animation: spin 1s infinite linear;
  border-radius: 100%;
  border-style: solid;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div class="default-layout font-jost h-screen">
        <router-view />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { checkAuth } from '@/api/gapi'
const router = useRouter();
onMounted(() => {
  checkAuth()
});


</script>
<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
}
.font-fantasy {
  font-family: fantasy;
}
</style>

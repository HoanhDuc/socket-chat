<template>
  <div class="default-layout font-jost h-screen p-5">
    <router-view class="min-h-full" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { checkAuth } from "@/api/gapi";
const router = useRouter();
onMounted(() => {
  checkAuth();
});
</script>
<style lang="scss" scoped>
.font-fantasy {
  font-family: fantasy;
}
</style>

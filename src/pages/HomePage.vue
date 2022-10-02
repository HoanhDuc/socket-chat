<template>
  <div class="row justify-around">
    <div class="shadow-lg rounded-lg h-fit">
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-toolbar-title
          >Online ({{ store.listOnline.length }})</q-toolbar-title
        >
      </q-toolbar>
      <q-list class="col-3">
        <q-item
          v-for="(item, index) in store.listOnline"
          clickable
          v-ripple
          @click="onRouteToChannel(item)"
        >
          <q-item-section avatar>
            <q-avatar>
              <img :src="item.avatar" />
            </q-avatar>
          </q-item-section>
          <q-item-section>{{ item.name }}</q-item-section>
          <div class="w-[10px] h-[10px] rounded-full bg-success"></div>
        </q-item>
      </q-list>
    </div>
    <router-view class="col-8"></router-view>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import useStore from "@/store";
const router = useRouter();
const store = useStore();
onMounted(() => {
  router.push(`/chat`);
});
const onRouteToChannel = (user) => {
  store.setPrivatePartner(user);
  router.push(`/chat/${user.id}`);
};
</script>

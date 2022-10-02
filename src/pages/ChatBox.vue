<template>
  <div class="p-2 relative rounded-sm shadow-lg">
    <div class="max-h-[90%] overflow-y-scroll">
    <div v-for="(mess, index) in mapMessageDisplay" :key="index">
      <q-chat-message
        v-if="isMe(mess.userId)"
        name="Me"
        :avatar=" store.userAuth.avatar"
        :text="[mess.message]"
        sent
      />
      <q-chat-message
        v-else
        :name="store.privatePartner.name"
        :avatar="store.privatePartner.avatar"
        :text="[mess.message]"
      />
    </div>
  </div>
    <q-input
      v-model="message"
      class="absolute bottom-3 right-3 left-3"
      outlined
      placeholder="Write message..."
      @keyup.enter="onSendMessage"
    >
      <template v-slot:append>
        <q-icon name="send" :color="message ? 'primary' : ''"></q-icon>
      </template>
    </q-input>
  </div>
</template>
<script setup>
import { onMounted, watch, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import useStore from "@/store";
import useSocket from "@/service/socketFunc";
const { startConnectPrivate } = useSocket();
const route = useRoute();
const router = useRouter();
const store = useStore();
const connection = ref({});
const message = ref("");
const onSendMessage = () => {
  const dataMessage = {
    channel_id: route.params.channel_id.length + store.userAuth.id.length,
    detailMessage: {
      userId: store.userAuth.id,
      message: message.value,
    },
  };
  connection.value.emit("message", dataMessage);
  message.value = "";
};
const mapMessageDisplay = computed(() => {
  const findPrivateMessage = store.privateMessage.find(
    (item) =>
      item.channel_id ===
      route.params.channel_id.length + store.userAuth.id.length
  );
  return findPrivateMessage?.message || [];
});
const isMe = (userId) => {
  if (userId === store.userAuth.id) {
    return true;
  }
  return false;
};
onMounted(() => {
  connection.value = startConnectPrivate(
    route.params.channel_id.length + store.userAuth.id.length
  );
});
watch(
  () => route.params.channel_id,
  () => {
    connection.value = startConnectPrivate(
      route.params.channel_id.length + store.userAuth.id.length
    );
  }
);
</script>
<style>
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}
</style>

export const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/layouts/default.vue"),
    redirect: "/socket/all",
    children: [
      {
        name: "HomePage",
        path: "/socket/:channel_id",
        component: () => import("@/pages/chat-room/ChatRoom.vue"),
      },
    ],
  },
];

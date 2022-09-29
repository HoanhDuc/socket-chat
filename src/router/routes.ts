export const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        name: "HomePage",
        path: "/",
        component: () => import("@/pages/chat-room/ChatRoom.vue"),
      },
    ],
  },
];

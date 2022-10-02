export const routes = [
  {
    name: "Socket",
    path: "/",
    component: () => import("@/layouts/default.vue"),
    redirect: "/chat",
    children: [
      {
        name: "HomePage",
        path: "/chat",
        component: () => import("@/pages/HomePage.vue"),
        children: [
          {
            name: "Chat",
            path: "/chat/:channel_id",
            component: () => import("@/pages/ChatBox.vue"),
          },
        ],
      },
    ],
  },
];

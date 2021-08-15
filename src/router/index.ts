import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import EventDetails from "@/views/EventDetails.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
    {
        path: "/events/:id",
        name: "EventDetails",
        props: true, // it says that we can now send the route segment as a prop
        component: EventDetails,
    },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

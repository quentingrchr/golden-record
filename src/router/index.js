import Vue from "vue";
import VueRouter from "vue-router";

import Intro from "@/views/Intro.vue";
import WebDoc from "@/views/WebDoc.vue";
import Quentin from "@/views/temp/Quentin.vue";
import Reda from "@/views/temp/Reda.vue";
import Use from "@/views/temp/Use.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Intro", component: Intro },
  { path: "/golden-record", name: "WebDoc", component: WebDoc },
  { path: "/quentin", name: "Quentin", component: Quentin },
  { path: "/reda", name: "Reda", component: Reda },
  {
    path: "/use",
    name: "Use",
    component: Use,
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

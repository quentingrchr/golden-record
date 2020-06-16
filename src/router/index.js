import Vue from "vue";
import VueRouter from "vue-router";

import Intro from "@/views/Intro.vue";
import WebDoc from "@/views/WebDoc.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Intro", component: Intro },
  { path: "/golden-record", name: "WebDoc", component: WebDoc },
];

const router = new VueRouter({
  routes,
});

export default router;

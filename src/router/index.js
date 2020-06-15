import Vue from "vue";
import VueRouter from "vue-router";

import Intro from "@/views/Intro.vue";
import WebDoc from "@/views/WebDoc.vue";
import Quentin from "@/views/temp/Quentin.vue";
import Reda from "@/views/temp/Reda.vue";
import Use from "@/views/temp/Use.vue";
import Quentint from "@/views/temp/Quentint.vue";
import Toto from "@/views/temp/Toto.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Intro", component: Intro },
  { path: "/golden-record", name: "WebDoc", component: WebDoc },
  { path: "/quentin", name: "Quentin", component: Quentin },
  { path: "/reda", name: "Reda", component: Reda },
  {
    path: "/use",
    name: "Use",
    component: Use
  },
  { path: "/quentint", name: "Quentint", component: Quentint },
  { path: "/toto", name: "Toto", component: Toto }
];

const router = new VueRouter({
  routes
});

export default router;

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/demo1",
      component: () => import("./views/layout1.vue"),
      children: [
        {
          path: "/demo1",
          name: "demo1",
          component: () => import("./views/demo1.vue")
        },
      ]
    },
    {
      path: "/demo2",
      component: () => import("./views/layout2.vue"),
      children: [
        {
          path: "/demo2",
          name: "demo2",
          component: () => import("./views/demo2.vue")
        },
      ]
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/home.vue")
    },
  ]
});

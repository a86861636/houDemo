import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/demo1",
    },
    {
      path: "/demo1",
      component: () => import("./views/layout.vue"),
      children: [
        {
          path: "/demo1",
          name: "demo1",
          component: () => import("./views/demo1.vue")
        },
        {
          path: "/demo2",
          name: "demo2",
          component: () => import("./views/demo2.vue")
        },
        {
          path: "/demo3",
          name: "demo3",
          component: () => import("./views/demo3.vue")
        },
        {
          path: "/intro",
          name: "intro",
          component: () => import("./views/intro.vue")
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

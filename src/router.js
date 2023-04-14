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
      path: "/view1",
      name: "view1",
      component: () => import("./views/view1.vue")
    },
    {
      path: "/view2",
      name: "view2",
      component: () => import("./views/view2.vue")
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
      path: "/demo3",
      name: "demo3",
      component: () => import("./views/demo3.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login.vue")
    },
  ]
});

import Vue from 'vue'
import Router from 'vue-router'

import Detect from "../views/Detect";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: {name: "imgDetect"}
    },
    {
      path: '/imgDetect',
      name: 'imgDetect',
      component: Detect
    },
    {
      path: '/webSocket',
      name: 'Websocket',
      component: ()=>import("../views/vsst/Websocket")
    },
  ]
})

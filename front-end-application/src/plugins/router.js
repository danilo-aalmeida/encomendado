import Vue from "vue";
import Router from "vue-router";
import SignIn from "../pages/00-sign-in/";
import SignUp from "../pages/01-sign-up/";
import RecoverPassword from "../pages/02-recover-password/";
import RecoverPassword2 from "../pages/02-recover-password/token/";
import Home from "../pages/03-encomendas/";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Sign-In",
      component: SignIn
    },
    {
      path: "/sign-up",
      name: "Sign-Up",
      component: SignUp
    },
    {
      path: '/recover-password',
      name: "Recover-Password",
      component: RecoverPassword
    },
    {
      // path: '/recover-password/:token',
      path: '/recover-password/2',
      name: "Recover-Password-2",
      component: RecoverPassword2
    },
    {
      // path: '/recover-password/:token',
      path: '/home',
      name: "Home",
      component: Home
    },
  ]
});
export default router;

import Home from "./containers/pages/Home";
import Help from "./containers/pages/Help";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    title: "Home"
  },
  {
    path: "/help",
    component: Help,
    exact: true,
    title: "Help"
  }
];

export default routes;

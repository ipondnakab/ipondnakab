import AboutPage from "./pages/about";
import HomePage from "./pages/home";

export type RouteType = {
  title: string;
  path: string;
  component: React.ReactNode;
  name?: string;
  isMenuHidden?: boolean;
  isPrivate?: boolean;
};

const router: RouteType[] = [
  { name: "home", path: "/", component: <HomePage />, title: "Home" },
  { name: "about", path: "/about", component: <AboutPage />, title: "About" },
];

export default router;

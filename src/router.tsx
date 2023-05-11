// import AboutPage from "./pages/about";
import ChatBoardPage from "./pages/chat-board";
import HomePage from "./pages/home";
// import ContactMePage from "./pages/contact-me";

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
  // { name: "about", path: "/about", component: <AboutPage />, title: "About" },
  {
    name: "chatBoard",
    path: "/demo",
    component: <ChatBoardPage />,
    title: "Demo",
  },
  // {
  //   name: "contactMe",
  //   path: "/contact-me",
  //   component: <ContactMePage />,
  //   title: "Contact Me",
  // },
];

export default router;

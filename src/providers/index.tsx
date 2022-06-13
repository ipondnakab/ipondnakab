import React from "react";
import { LayoutProvider, useLayoutFeature } from "./layouts";
const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const layouts = useLayoutFeature();
  return <LayoutProvider value={layouts}>{children}</LayoutProvider>;
};

export default Providers;

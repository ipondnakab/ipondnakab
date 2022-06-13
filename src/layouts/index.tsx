import React from "react";
import { AppContentContainer } from "./index.style";
import Navbar from "./navbar";
const Layouts: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <AppContentContainer>{children}</AppContentContainer>
    </div>
  );
};

export default Layouts;

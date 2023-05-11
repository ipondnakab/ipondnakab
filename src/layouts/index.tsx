import { Spin } from "antd";
import React from "react";
import useLayout from "../providers/layouts";
import useTheme from "../providers/themes";
import {
  AppContainer,
  AppContentContainer,
  CustomParticles,
} from "./index.style";
import Navbar from "./navbar";
const Layouts: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const layout = useLayout();
  const { animation } = useTheme();
  return (
    <Spin spinning={layout.isLoading}>
      <AppContainer>
        {animation && <CustomParticles />}
        <Navbar />
        <AppContentContainer>{children}</AppContentContainer>
      </AppContainer>
    </Spin>
  );
};

export default Layouts;

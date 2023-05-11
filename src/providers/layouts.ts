import React from "react";

export const LayoutContext = React.createContext<
  ReturnType<typeof useLayoutFeature>
>({} as ReturnType<typeof useLayoutFeature>);

export const LayoutProvider = LayoutContext.Provider;

export const useLayoutFeature = () => {
  const [isShowLayout, setIsShowLayout] = React.useState(true);
  const [isShowSidebar, setIsShowSidebar] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const toggleShowLayout = React.useCallback(
    () => setIsShowLayout((isShowLayout) => !isShowLayout),
    []
  );

  const toggleShowSidebar = React.useCallback(
    () => setIsShowSidebar((isShowSidebar) => !isShowSidebar),
    []
  );

  const appLoading = React.useCallback(() => setIsLoading(true), []);
  const appLoaded = React.useCallback(() => setIsLoading(false), []);
  return {
    isShowLayout,
    setIsShowLayout,
    toggleShowLayout,
    isShowSidebar,
    setIsShowSidebar,
    toggleShowSidebar,
    appLoading,
    appLoaded,
    isLoading,
  };
};

const useContext = () => React.useContext(LayoutContext);

export default useContext;

import React from "react";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ContainerSwitch, IconContainer, Input, Label } from "./index.style";

export type ToggleSwitchProps = {
  onChange?: (value: boolean) => void;
  value?: boolean;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange, value }) => {
  const [isEnabled, setIsEnabled] = React.useState(value || false);
  const toggleState = React.useCallback(() => {
    onChange && onChange(!isEnabled);
    setIsEnabled(!isEnabled);
  }, [isEnabled, onChange]);

  return (
    <Label htmlFor="toggle">
      <ContainerSwitch className={isEnabled ? "enabled" : "disabled"}>
        <IconContainer>
          <SunIcon />
          <MoonIcon />
        </IconContainer>
        <Input
          id="toggle"
          name="toggle"
          type="checkbox"
          onClick={toggleState}
          defaultChecked={isEnabled}
        />
      </ContainerSwitch>
    </Label>
  );
};

export default ToggleSwitch;

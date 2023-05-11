import React from "react";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ContainerSwitch, IconContainer, Input, Label } from "./index.style";

export type ToggleSwitchProps = {
  onChange?: (value: boolean) => void;
  value?: boolean;
  icons?: [React.ReactElement, React.ReactElement];
  name?: string;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  onChange,
  value,
  icons,
  name,
}) => {
  const [isEnabled, setIsEnabled] = React.useState(value || false);
  const toggleState = React.useCallback(() => {
    onChange && onChange(!isEnabled);
    setIsEnabled(!isEnabled);
  }, [isEnabled, onChange]);

  return (
    <Label htmlFor={name}>
      <ContainerSwitch className={isEnabled ? "enabled" : "disabled"}>
        <IconContainer>
          {icons ? icons[0] : <SunIcon />}
          {icons ? icons[1] : <MoonIcon />}
        </IconContainer>
        <Input
          id={name}
          name={name}
          type="checkbox"
          onClick={toggleState}
          defaultChecked={isEnabled}
        />
      </ContainerSwitch>
    </Label>
  );
};

export default ToggleSwitch;

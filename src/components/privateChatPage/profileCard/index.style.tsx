import { Button, Form, FormItemProps, Input, InputProps, InputRef } from "antd";
import { RefAttributes } from "react";
import styled, { DefaultTheme, ThemedStyledProps } from "styled-components";

export const ProfilePageContainer = styled.div`
  display: flex;
  gap: 16px;
  flex: 1;
`;

export const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: fit-content;
  max-width: 360px;
  padding: 32px;
  color: ${(props) => props.theme.palette.text.primary};
  box-shadow: ${(props) => props.theme.boxShadow};
  backdrop-filter: blur(5px);
  justify-content: center;
  border-radius: 8px;
  transition: ${(props) => props.theme.transitionLong};
  position: relative;

  ${(props: { hide?: boolean }) =>
    props.hide
      ? `width: 0px !important; overflow: hidden; flex: 0; padding: 0;`
      : ``}
`;

export const TitleInformation = styled.h3`
  color: ${(props) => props.theme.palette.text.primary};
`;

type CustomFormItemProps = ThemedStyledProps<
  FormItemProps & RefAttributes<InputRef>,
  DefaultTheme
> & { editMode: boolean };

export const CustomFormItem = styled(Form.Item)`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  & .ant-form-item-control-input {
    min-height: 0 !important;
  }
  & .ant-form-item-control-input-content {
    display: flex;
    flex-direction: column;
  }
  & .ant-form-item-label {
    width: fit-content;
    > label {
      transition: ${(props) => props.theme.transition};
      color: ${(props: CustomFormItemProps) =>
        props.theme.palette.text.primary};
      &::before {
        content: "" !important;
      }
      &::after {
        content: "";
      }

      height: 24px;

      ${(props: CustomFormItemProps) =>
        props.editMode
          ? `margin-top: 16px;`
          : `margin-top: 0px; font-size: 0px; height: 0px;`}
    }

    ${(props: CustomFormItemProps) => (props.editMode ? `` : `height: 0px;`)}
  }

  & .ant-form-item-control-input-content {
    outline: none !important;
  }
`;

type CustomInputProps = ThemedStyledProps<
  InputProps & RefAttributes<InputRef>,
  DefaultTheme
> & { name: "displayName" | "email"; editMode: boolean };

export const CustomInput = styled(Input)`
  transition: ${(props) => props.theme.transition};
  background-color: transparent !important;
  outline: none !important;
  border: none;
  border-bottom: 1px solid
    ${(props: CustomInputProps) => props.theme.palette.text.primary};
  border-radius: 0;
  color: ${(props: CustomInputProps) => props.theme.palette.text.primary};
  font-size: 1.25rem;
  text-align: left;

  &:focus {
    outline: none !important;
  }
  &.ant-input-disabled {
    border: none;
    cursor: default;
    color: ${(props: CustomInputProps) => props.theme.palette.text.primary};
  }

  ${(props: CustomInputProps) =>
    props.editMode
      ? ""
      : props.name === "displayName"
      ? `font-size: 1.75rem; line-height: 1.5rem; padding: 0;`
      : `font-size: 0.75rem; line-height: 0.75rem; padding: 0; color: ${props.theme.palette.text.hidden} !important;`}
`;

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  & .ant-spin-nested-loading {
    overflow: hidden;
    border-radius: 999px;
  }

  & .ant-upload-picture-card-wrapper {
    width: fit-content;
  }
  & .ant-upload-select-picture-card {
    border-radius: 999px;
    border: 12px solid #fff;
    transition: ${(props) => props.theme.transitionLong};
    &:hover {
      border: 12px solid #fff;
      transform: scale(1.1);
      transition: ${(props) => props.theme.transition};
    }
  }

  & .ant-upload-disabled {
    cursor: default;
  }
`;

export const CustomButtonEdit = styled(Button).attrs({
  type: "ghost",
})`
  color: ${(props) => props.theme.palette.text.primary};
`;

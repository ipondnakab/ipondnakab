import { Avatar, Badge, Button, Form, message, Spin, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { RcFile } from "antd/lib/upload";
import { updateProfile, User } from "firebase/auth";
import React from "react";
import useAuthContext from "../../../providers/auth";
import { uploadFileToStorage } from "../../../services/files";
import {
  CustomButtonEdit,
  CustomForm,
  CustomFormItem,
  UploadContainer,
  CustomInput,
  TitleInformation,
} from "./index.style";
import { FiEdit2 } from "react-icons/fi";
import { SettingOutlined } from "@ant-design/icons";
import { FirebaseError } from "firebase/app";
type ProfileCardProps = {
  hide?: boolean;
};

type ProfileForm = Pick<User, "displayName" | "email" | "photoURL">;
const ProfileCard: React.FC<ProfileCardProps> = ({ hide }) => {
  const { auth, user, setUser } = useAuthContext();
  const [editMode, setEditMode] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingImage, setIsLoadingImage] = React.useState(false);

  const [form] = Form.useForm<ProfileForm>();
  React.useEffect(() => {
    if (!user) return;
    form.setFieldsValue({ ...user });
  }, [user, form]);

  const handleSetting = React.useCallback(() => {
    if (!editMode) return setEditMode(true);
    form.submit();
  }, [editMode, setEditMode, form]);

  const onSubmit = React.useCallback(
    async (values: unknown) => {
      const data = values as ProfileForm;
      const newData: { email?: string | null; displayName?: string | null } =
        {};

      if (!auth.currentUser) return;
      if (data.email !== auth.currentUser.email) newData.email = data.email;
      if (data.displayName !== auth.currentUser.displayName)
        newData.displayName = data.displayName;

      if (Object.keys(newData).length === 0) return setEditMode(false);

      try {
        setIsLoading(true);
        await updateProfile(auth.currentUser, newData);
        setEditMode(false);
      } catch (error) {
        const err = error as FirebaseError;
        console.error({ err });
        message.error(err.message);
      } finally {
        setIsLoading(false);
      }
    },
    [auth.currentUser, setIsLoading]
  );
  if (!user) return <div>Login Please</div>;

  return (
    <CustomForm form={form} onFinish={onSubmit} hide={hide}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TitleInformation>Your information</TitleInformation>
        <CustomButtonEdit
          onClick={handleSetting}
          icon={<SettingOutlined size={32} />}
          type="ghost"
          loading={isLoading}
          style={{ border: editMode ? undefined : "none", borderRadius: "8px" }}
        >
          {editMode && "บันทึก"}
        </CustomButtonEdit>
      </div>
      <UploadContainer>
        <ImgCrop rotate>
          <Upload<RcFile>
            accept="image/*"
            maxCount={1}
            disabled={!editMode}
            customRequest={async (options) => {
              try {
                setIsLoadingImage(true);
                const file = options.file as RcFile;
                const bytes = await file.arrayBuffer();
                const fileNameList = file.name.split(".") || [];
                const url = await uploadFileToStorage(
                  bytes,
                  `profile-${user.uid}-${new Date().getTime()}.` +
                    fileNameList[fileNameList.length - 1]
                );
                if (!url) {
                  // options.onError(new Error("Upload failed"));
                  return message.error("Upload failed");
                }
                if (!auth.currentUser) return;
                updateProfile(auth.currentUser, { photoURL: url });
                // options.onSuccess({ code: 200, status: 200, body: { url } });
                setUser((old) => (old ? { ...old, photoURL: url } : old));
                form.setFieldsValue({ photoURL: url });
                message.success("Upload success");
              } catch (error) {
                console.log({ error });
                message.error("Upload failed");
              } finally {
                setIsLoadingImage(false);
              }
            }}
            listType="picture-card"
            showUploadList={false}
          >
            <Badge
              style={{ overflow: "hidden" }}
              offset={[-20, 85]}
              count={
                editMode ? (
                  <div
                    style={{
                      padding: "4px",
                      borderRadius: "999px",
                      backgroundColor: "#FFF",
                    }}
                  >
                    <FiEdit2 size={16} />
                  </div>
                ) : undefined
              }
            >
              <Spin spinning={isLoadingImage}>
                <Avatar
                  style={{ fontSize: 64 }}
                  size={96}
                  src={form.getFieldValue("photoURL")}
                >
                  {user.displayName?.slice(0, 1)}
                </Avatar>
              </Spin>
            </Badge>
          </Upload>
        </ImgCrop>
      </UploadContainer>
      <CustomFormItem
        editMode={editMode}
        label="Display Name"
        name="displayName"
        rules={[{ required: true }]}
      >
        <CustomInput
          editMode={editMode}
          name="displayName"
          disabled={!editMode}
        />
      </CustomFormItem>
      <CustomFormItem
        editMode={editMode}
        label="Email"
        name="email"
        rules={[{ type: "email", required: true }]}
      >
        <CustomInput editMode={editMode} name="email" disabled={!editMode} />
      </CustomFormItem>
      <Button
        style={{ alignSelf: "flex-end", marginTop: "16px" }}
        type="primary"
        onClick={() => auth.signOut()}
      >
        Sign-out
      </Button>
    </CustomForm>
  );
};

export default ProfileCard;

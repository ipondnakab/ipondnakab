export enum GuestTypeKey {
  ID = "id",
  IP_ADDRESS = "ipAddress",
  DISPLAY_NAME = "displayName",
  EMAIL = "email",
}
export type GuestType = {
  [GuestTypeKey.ID]: string;
  [GuestTypeKey.IP_ADDRESS]: string;
  [GuestTypeKey.DISPLAY_NAME]?: string;
  [GuestTypeKey.EMAIL]?: string;
};

export enum UserTypeKey {
  ID = "id",
  NAME = "name",
  IP_ADDRESS = "ipAddress",
  EMAIL = "email",
  PHOTO_URL = "photoURL",
  PHONE_NUMBER = "phoneNumber",
}

export type UserType = {
  [UserTypeKey.PHOTO_URL]?: string | null;
  [UserTypeKey.PHONE_NUMBER]?: string | null;
  [UserTypeKey.EMAIL]: string;
} & GuestType;

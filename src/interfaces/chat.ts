import { Timestamp } from "firebase/firestore";

export type ChatType = {
  id: string;
  message?: string;
  timestamp: Timestamp;
  isRead?: boolean;
  urlImages?: string;
  urlVideo?: string;
  urlAvatar?: string | null;
  displayName?: string | null;
  email?: string;
  ipAddress?: string;
  uid: string;
};

export enum ChatBoardTypeEnum {
    PUBLIC = "public",
    PRIVATE = "private",
}
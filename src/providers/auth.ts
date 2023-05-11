import React from "react";
import app from "../firebase";
import { getAuth, User, GoogleAuthProvider } from "firebase/auth";
import { useTranslation } from "react-i18next";
import useLayout from "./layouts";

import { getIpAddress } from "../services/ip-address";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const AuthContext = React.createContext<
  ReturnType<typeof useAuthFeature>
>({} as ReturnType<typeof useAuthFeature>);

export const AuthProvider = AuthContext.Provider;

export const useAuthFeature = () => {
  const [user, setUser] = React.useState<User | null>(null); // Local signed-in state.
  const [isLoadingUser, setIsLoadingUser] = React.useState(false);
  const [ipAddress, setIpAddress] = React.useState<string>("");

  const layout = useLayout();

  const {
    i18n: { language },
  } = useTranslation();
  auth.languageCode = language;

  const initIpAddress = React.useCallback(
    async () => setIpAddress(await getIpAddress()),
    []
  );

  React.useEffect(() => {
    initIpAddress();
  }, [initIpAddress]);

  // Listen to the Firebase Auth state and set the local state.
  React.useEffect(() => {
    setIsLoadingUser(true);
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      setUser(user);
      console.error({ user });
      setIsLoadingUser(false);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [layout]);

  return { isLoadingUser, user, auth, ipAddress, setUser };
};

const useContext = () => React.useContext(AuthContext);

export default useContext;

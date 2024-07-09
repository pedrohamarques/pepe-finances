import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Session } from "@supabase/supabase-js";

import { supabase } from "@services/supabase";

type AuthContextProps = {
  session: Session | null;
  login: (session: Session) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);

  function login(session: Session) {
    setSession(session);
  }

  function logout() {
    setSession(null);
  }

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
    });

    data.subscription.unsubscribe();
  }, [session]);

  const value = {
    session,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuthContext must be wrapped in a <AuthProvider />");
  }

  return value;
}

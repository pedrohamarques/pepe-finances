import React from "react";

import { useAuthContext } from "@contexts/auth-context";

import PrivateRoutes from "./private-routes";
import PublicRoutes from "./public-routes";

export default function NavigationRoutes() {
  const { session } = useAuthContext();

  if (!session) return <PublicRoutes />;

  return <PrivateRoutes />;
}

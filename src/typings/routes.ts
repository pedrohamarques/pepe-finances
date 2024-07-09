export enum PUBLIC_ROUTES {
  WELCOME = "WelcomeScreen",
  SIGN_IN = "SignInScreen",
  SIGN_UP = "SignUpScreen",
}

export type PublicRoutesParams = {
  [PUBLIC_ROUTES.WELCOME]: undefined;
  [PUBLIC_ROUTES.SIGN_IN]: undefined;
  [PUBLIC_ROUTES.SIGN_UP]: undefined;
};

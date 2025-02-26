export enum PUBLIC_ROUTES {
  WELCOME = "WelcomeScreen",
  SIGN_IN = "SignInScreen",
  SIGN_UP = "SignUpScreen",
}

export enum PRIVATE_ROUTES {
  HOME = "HomeScreen",
  ADD_EXPENSE = "AddExpense",
}

export type PublicRoutesParams = {
  [PUBLIC_ROUTES.WELCOME]: undefined;
  [PUBLIC_ROUTES.SIGN_IN]: undefined;
  [PUBLIC_ROUTES.SIGN_UP]: undefined;
};

export type PrivateRoutesParams = {
  [PRIVATE_ROUTES.HOME]: undefined;
  [PRIVATE_ROUTES.ADD_EXPENSE]: undefined;
};

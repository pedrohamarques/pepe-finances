import { ZodIssue } from "zod";

export enum ACTION_KIND {
  EMAIL = "Email",
  PASSWORD = "Password",
  SUBMIT = "Submit",
  RESET = "Reset",
  ERROR = "Error",
}

type EmailAction = {
  type: ACTION_KIND.EMAIL;
  payload: string;
};

type PasswordAction = {
  type: ACTION_KIND.PASSWORD;
  payload: string;
};

type SubmitAction = {
  type: ACTION_KIND.SUBMIT;
};

type ResetAction = {
  type: ACTION_KIND.RESET;
};

type ErrorAction = {
  type: ACTION_KIND.ERROR;
  payload: ZodIssue[];
};

type Actions =
  | EmailAction
  | PasswordAction
  | SubmitAction
  | ResetAction
  | ErrorAction;

export type LoginState = {
  email: string;
  password: string;
  isLoading: boolean;
  errors: ZodIssue[];
};

export function loginReducer(state: LoginState, action: Actions): LoginState {
  switch (action.type) {
    case ACTION_KIND.EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case ACTION_KIND.PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case ACTION_KIND.SUBMIT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ACTION_KIND.RESET: {
      return {
        isLoading: false,
        errors: [],
        email: "",
        password: "",
      };
    }
    case ACTION_KIND.ERROR: {
      return {
        ...state,
        isLoading: false,
        errors: [...action.payload],
      };
    }
    default:
      return state;
  }
}

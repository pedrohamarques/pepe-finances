import { ZodIssue } from "zod";

export enum ACTION_KIND {
  EMAIL = "Email",
  PASSWORD = "Password",
  CONFIRM_PASSWORD = "ConfirmPassword",
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

type ConfirmPasswordAction = {
  type: ACTION_KIND.CONFIRM_PASSWORD;
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
  | ConfirmPasswordAction
  | SubmitAction
  | ResetAction
  | ErrorAction;

export type SignUpState = {
  email: string;
  password: string;
  confirmPassword: string;
  isLoading: boolean;
  errors: ZodIssue[];
};

export function submitReducer(
  state: SignUpState,
  action: Actions
): SignUpState {
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
    case ACTION_KIND.CONFIRM_PASSWORD: {
      return {
        ...state,
        confirmPassword: action.payload,
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
        confirmPassword: "",
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

import { MessageValidationProps } from "./validation-message";

const icon = {
  error: "x-circle",
  warning: "alert-circle",
  success: "check-circle",
} as const;

const color = {
  error: "#b91c1c",
  warning: "#fde047",
  success: "#059669",
} as const;

const textColor = {
  error: "text-red-700",
  warning: "text-yellow-300",
  success: "text-emerald-700",
} as const;

export function getProps(type: MessageValidationProps["type"]) {
  return {
    icon: icon[type],
    iconColor: color[type],
    textColor: textColor[type],
  };
}

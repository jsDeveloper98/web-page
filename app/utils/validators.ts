import {
  INPUT_TYPE_MAX_LENGTH,
  INPUT_TYPE_MIN_LENGTH,
  TEXTAREA_TYPE_MAX_LENGTH,
  TEXTAREA_TYPE_MIN_LENGTH,
} from "../constants/validations";

type IValidationType = "required" | "email" | "input" | "textarea";

export const validateField = (types: IValidationType[]) => {
  const validationsMap = {
    required: {
      required: true,
      message: "Field is required",
    },
    email: {
      type: "email",
      message: "Email is not valid",
    },
    input: {
      min: INPUT_TYPE_MIN_LENGTH,
      max: INPUT_TYPE_MAX_LENGTH,
      message: `Field's length should be between ${INPUT_TYPE_MIN_LENGTH} and ${INPUT_TYPE_MAX_LENGTH}`,
    },
    textarea: {
      min: TEXTAREA_TYPE_MIN_LENGTH,
      max: TEXTAREA_TYPE_MAX_LENGTH,
      message: `Field's length should be between ${TEXTAREA_TYPE_MIN_LENGTH} and ${TEXTAREA_TYPE_MAX_LENGTH}`,
    },
  } as const;

  return types.map((type) => validationsMap[type]);
};

import { FormFieldsType } from "../types";

export const formValidateMessage = (fields: FormFieldsType) => {
  if (typeof fields.name == "undefined" || fields.name === "")
    return "Name field can't be empty";

  if (typeof fields.email == "undefined" || fields.email === "")
    return "Email field can't be empty";

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fields.email))
    return "Not a valid Email address";

  if (typeof fields.message == "undefined" || fields.message === "")
    return "Message field can't be empty";

  if ((fields.name + fields.email + fields.message).split("").length > 1024)
    return "Exceeded max number of characters";

  return "validated";
};

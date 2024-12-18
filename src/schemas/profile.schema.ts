import * as Yup from "yup";

const profileMutation = (user?: any) => {
  const profileSchema = [
    {
      key: "1",
      label: "Name :",
      placeholder: "Enter Your Full Name",
      name: "name",
      type: "text",
      validationSchema: Yup.string().required("Name is Required").trim(),
      initialValue: user?.name ? user?.name : "",
      className: "col-span-12 ",
      isEditable: true,
    },
    {
      key: "2",
      label: "Email :",
      placeholder: "Enter Your Email",
      name: "email",
      type: "email",
      validationSchema: Yup.string().required("Email is Required").trim(),
      initialValue: user?.email ? user?.email : "",
      className: "col-span-12 ",
      isEditable: false,
    },
    {
      key: "3",
      label: "Gender :",
      placeholder: "Enter Your Gender",
      name: "gender",
      type: "select",
      options: [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
      ],
      validationSchema: Yup.string().required("Gender is Required").trim(),
      initialValue: user?.gender ? user?.gender : "",
      className: "col-span-12 ",
      isEditable: true,
    },
    {
      key: "5",
      label: "Phone Number :",
      placeholder: "Enter Your Phone Number",
      name: "phoneNumber",
      type: "number",
      validationSchema: Yup.string()
        // .required("Phone Number is Required")
        // .trim()
        // .matches(/^[0-9+()-]*$/, "Invalid phone number format")
        // .min(10, "Phone number is too short")
        // .max(10, "Phone number is too long"),

        .required("Phone Number is Required!")
        .test(
          "Test-valid-number",
          "Phone number must only contain digits",
          function (val) {
            if (val === undefined || val === null) return false; // Explicitly check for undefined or null
            return /^\d+$/.test(val); // Ensures the input only contains digits
          }
        )
        .min(10, "Phone number is too short")
        .max(10, "Phone number is too long"),
      initialValue: user?.phone ? user?.phone : "",
      className: "col-span-12 ",
      isEditable: true,
    },
  ];
  const profileInitialValues = profileSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name!] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const profileValidation = profileSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema }
  );

  return { profileSchema, profileInitialValues, profileValidation };
};

type profileValueType =
  | UserType
  | {
      [key: string]: string;
    };

export { profileMutation };
export type { profileValueType };

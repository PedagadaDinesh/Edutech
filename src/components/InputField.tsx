import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputBaseComponentProps,
  InputLabel,
  InputProps,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { FormikProps } from "formik";
import { ChangeEvent, Dispatch, FocusEvent, SetStateAction } from "react";
import UploadImage from "./UploadImage";

interface Props {
  type?:
    | "text"
    | "select"
    | "date"
    | "file"
    | "number"
    | "email"
    | "autocomplete"
    | "string"
    | any;
  value?: string | number;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  error?: boolean;
  defaultImage?: string;
  key?: string | number;
  helperText?: string | false;
  fullWidth?: boolean;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  options?: { label: string | number; value: string | number }[];
  id?: string | number;
  image?: string;
  variant?: "filled" | "outlined" | "standard";
  InputProps?: InputProps;
  inputProps?: InputBaseComponentProps;
  styleContact?: string;
  styleField?: string;
  onFileChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  rows?: number;
  defaultValue?: string | number | [] | object;
  label?: string;
  setIsImage?: Dispatch<SetStateAction<File | null>>;
  size?: "small" | "medium";
  formik?: FormikProps<{
    [key: string]: string;
  }>;
}

const InputField = ({
  type,
  value,
  label,
  onChange,
  onBlur,
  error,
  helperText,
  fullWidth,
  placeholder,
  name,
  disabled,
  defaultImage,
  InputProps,
  id,
  variant,
  options,
  styleContact,
  image,
  styleField,
  onFileChange,
  rows,
  setIsImage,
  multiline,
  defaultValue,
  size,
  formik,
}: Props) => {
  switch (type) {
    case "text":
    case "password":
    case "number":
    case "date":
    case "email":
    case "time":
    case "string":
      return (
        <TextField
          fullWidth={fullWidth}
          placeholder={placeholder}
          name={name}
          size={size}
          id={String(id)}
          type={type}
          disabled={disabled}
          variant={variant}
          className={styleContact}
          InputProps={InputProps}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          multiline={multiline}
          rows={rows}
          helperText={helperText}
          defaultValue={defaultValue}
        />
      );
    case "radio-group":
      return (
        <FormControl>
          <FormLabel id={String(id)}>{label}</FormLabel>
          <RadioGroup onChange={onChange} defaultValue="female" name={name}>
            {options?.map((data) => (
              <FormControlLabel
                key={data?.label}
                value={data?.value}
                control={<Radio size="small" checked={data?.value === value} />}
                label={
                  <div className="text-sm md:text-base">{data?.label}</div>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    case "photo":
      return (
        <div className={styleField}>
          <UploadImage
            image={image}
            defaultImage={defaultImage}
            onChange={onFileChange}
            className={styleField}
            setIsImage={setIsImage}
            // clearImage={() => onFileChange()}
          />
        </div>
      );
    case "select":
      return (
        <FormControl fullWidth>
          <InputLabel
            className={`${
              typeof value === "string" && value?.length !== 0 ? "!hidden" : ""
            }`}
          >
            {placeholder}
          </InputLabel>
          <TextField
            fullWidth={fullWidth}
            id={String(id)}
            size={size}
            select={true}
            name={name}
            value={value}
            variant={variant}
            onChange={onChange}
            className={styleContact}
            disabled={disabled}
            label={label}
            InputProps={InputProps}
            error={error}
            helperText={helperText}
            defaultValue={defaultValue}
          >
            {options?.map((option) => (
              <MenuItem key={option?.value} value={option?.value}>
                {option?.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      );
    case "autocomplete":
      return (
        <Autocomplete
          id={String(id)}
          freeSolo
          disableClearable
          options={options!?.map((option) => option)}
          value={options?.find((data) => data?.value === value)?.label as any}
          onChange={(event, newValue) => {
            formik && formik.setFieldValue(name!, newValue?.value);
          }}
          renderInput={(params) => (
            <>
              <TextField
                {...params}
                value={value}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                fullWidth={fullWidth}
                placeholder={placeholder}
                name={name}
                id={String(id)}
                className={styleContact}
                onBlur={onBlur}
                error={error}
                helperText={helperText}
              />
            </>
          )}
        />
      );
    default:
      return (
        <TextField
          fullWidth={fullWidth}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          size={size}
          type={type}
          id={String(id)}
          variant={variant}
          className={styleContact}
          InputProps={InputProps}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          helperText={helperText}
          defaultValue={defaultValue}
        />
      );
  }
};

export default InputField;

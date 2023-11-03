import React, { ReactNode } from "react";
import Select, {
  components,
  IndicatorsContainerProps,
  MultiValue,
} from "react-select";
import s from "./theSelect.module.scss";
import { useId } from "react";
import { InputError } from "../inputError/InputError";
import { FieldError } from "react-hook-form";

const IndicatorsContainer = (
  props: IndicatorsContainerProps<SelectOption, true>
) => {
  return (
    <div className={s.backgroundColor}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

export default ({
  // onSelectChange,
  placeholder,
  options,
  noOptionsMessage,
  isMulti,
  onChange,
  fieldName,
  error,
  errorMessage,
}: Props) => {




  
  const onChangeHandler = (e: any) => {
    let selectedValues: number | number[];

    if (Array.isArray(e)) {
      selectedValues = e.map((option) => option.value);
    } else {
      selectedValues = e.value;
    }

    onChange(selectedValues);
  };

  return (
    <div className={s.mainWrapper}>
      <Select
        name={fieldName}
        instanceId={useId()}
        placeholder={placeholder}
        onChange={onChangeHandler}
        // closeMenuOnSelect={!isMulti}
        components={{ IndicatorsContainer }}
        noOptionsMessage={() => noOptionsMessage}
        // defaultValue={  { value: 1, label: 'askjdhak' }}
        isMulti={isMulti}
        options={options}
        styles={{
          option: (base) => ({
            ...base,
            color: "#17161b",
          }),
          control: (base, state) => ({
            ...base,
            border: "2px solid white",
            ":hover": {
              border: "2px solid #47a085",
            },
            padding: "none",
            boxShadow: "none",
            borderRadius: "none",
            ...(state.isFocused && { border: "2px solid #47a085" }),
          }),
          valueContainer: (base) => ({
            ...base,
            color: "#94292b",
          }),
          indicatorSeparator: () => ({}),
          multiValueLabel: (base) => ({
            ...base,
            color: "#17161b",
            padding: "5px",
          }),
          placeholder: (base) => ({
            ...base,
            fontSize: "13px",
            fontWeight: "400",
            color: "#6c6d6c",
          }),
        }}
      />
      <InputError
        error={error}
        errorMessage={errorMessage}
        className={s.errorMessage}
      />
    </div>
  );
};

type SelectOption = {
  value: number;
  label: string;
};

type Props = {
  // onSelectChange: (e: any) => void;
  placeholder: string;
  options: SelectOption[];
  noOptionsMessage: string;
  isMulti?: true;
  onChange: (data: number | number[]) => void;
  fieldName: string;
  error: FieldError | undefined;
  errorMessage: string | undefined;
};

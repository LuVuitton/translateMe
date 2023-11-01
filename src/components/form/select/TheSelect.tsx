import React, { ReactNode } from "react";
import Select, {
  components,
  IndicatorsContainerProps,
  MultiValue,
} from "react-select";
// import { ColourOption, colourOptions } from '../data';
import s from "./theSelect.module.scss";
import { useId } from "react";

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
  onSelectChange,
  placeholder,
  options,
  noOptionsMessage,
  isMulti
}: Props) => {
  const onChangeHandler = (e: MultiValue<SelectOption>) => {
    onSelectChange(e);
  };

  return (
    <div className={s.mainWrapper}>
      <Select
        instanceId={useId()}
        placeholder={placeholder}
        onChange={onChangeHandler}
        closeMenuOnSelect={false}
        components={{ IndicatorsContainer }}
        noOptionsMessage={() => noOptionsMessage}
        // defaultValue={  { value: 1, label: 'askjdhak' }}
        isMulti={isMulti}
        options={options}
        //   [
        //   { value: 1, label: "hello" },
        //   { value: 2, label: "1hello" },
        //   { value: 3, label: "2hello" },
        //   { value: 4, label: "3hello" },
        // ]
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
    </div>
  );
};

type SelectOption = {
  value: number;
  label: string;
};

type Props = {
  onSelectChange: (e: any) => void;
  placeholder: string;
  options: SelectOption[];
  noOptionsMessage: string;
  isMulti?:true
};

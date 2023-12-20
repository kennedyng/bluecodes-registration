import { TextInput } from "flowbite-react";
import React, { HtmlHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import Select, {
  DropdownIndicatorProps,
  components,
  ClearIndicatorProps,
  MultiValueRemoveProps,
  Props,
} from "react-select";

import { MdPercent, MdClose, MdExpandMore } from "react-icons/md";
import { isError } from "react-query";

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <MdExpandMore />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props: ClearIndicatorProps) => {
  return (
    <components.ClearIndicator {...props}>
      <MdClose />
    </components.ClearIndicator>
  );
};

const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <MdClose />
    </components.MultiValueRemove>
  );
};

const controlStyles = (isError?: boolean) => {
  return {
    base: `block w-full border ${
      isError
        ? "bg-red-50 border-red-500 text-red-900"
        : "bg-gray-50 border-gray-300 text-gray-900 "
    } sm:text-md h-[60px] px-2 rounded-lg `,
    focus: `border-cyan-500 ring-[1px] ring-cyan-500 ${
      isError
        ? "border-red-500 ring-[1px] ring-red-500"
        : "border-cyan-500 ring-[1px] ring-cyan-500 "
    }`,
    nonFocus: "border-gray-300 hover:border-gray-400",
  };
};

const placeholderStyles = "text-gray-500 pl-1 py-0.5";
const selectInputStyles = "pl-1 py-0.5";
const valueContainerStyles = "p-1 gap-1";
const singleValueStyles = "leading-7 ml-1";
const multiValueStyles =
  "bg-cyan-500 rounded items-center py-0.5 pl-2 pr-1 gap-1.5";
const multiValueLabelStyles = "leading-6 py-0.5 text-white font-bold";
const multiValueRemoveStyles =
  "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md";
const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles =
  "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800";
const indicatorSeparatorStyles = "bg-gray-300";
const dropdownIndicatorStyles =
  "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black";
const menuStyles = "p-1 mt-2 border border-gray-200 bg-white rounded-lg";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded",
  focus: "bg-gray-100 active:bg-gray-200",
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

interface SelectProps extends Props {
  isError?: boolean;
  helperText?: ReactNode | string;
}
const SelectInput = (props: SelectProps) => {
  return (
    <div>
      <Select
        unstyled
        closeMenuOnSelect={false}
        isSearchable={false}
        noOptionsMessage={() => null}
        components={{
          DropdownIndicator,
          ClearIndicator,
          MultiValueRemove,
          IndicatorSeparator: () => null,
        }}
        classNames={{
          control: ({ isFocused }) =>
            clsx(
              isFocused
                ? controlStyles(props.isError).focus
                : controlStyles(props.isError).nonFocus,
              controlStyles(props.isError).base
            ),
          placeholder: () => placeholderStyles,
          input: () => selectInputStyles,
          valueContainer: () => valueContainerStyles,
          singleValue: () => singleValueStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          multiValueRemove: () => multiValueRemoveStyles,
          indicatorsContainer: () => indicatorsContainerStyles,
          clearIndicator: () => clearIndicatorStyles,
          indicatorSeparator: () => indicatorSeparatorStyles,
          dropdownIndicator: () => dropdownIndicatorStyles,
          menu: () => menuStyles,
          groupHeading: () => groupHeadingStyles,
          option: ({ isFocused, isSelected }) =>
            clsx(
              isFocused && optionStyles.focus,
              isSelected && optionStyles.selected,
              optionStyles.base
            ),
          noOptionsMessage: () => noOptionsMessageStyles,
        }}
        {...props}
      />

      <small
        className={`${
          props.isError ? "text-red-500 my-[20px] " : "text-gray-500"
        } my-6 text-sm capitalize`}
      >
        {props.helperText}
      </small>
    </div>
  );
};

export default SelectInput;

import React, { ChangeEvent, useId, useState } from "react";
import { useIntl } from "react-intl";
import { TITLES } from "../constants";

type SelectProps = {
  labelKey?: string;
  onChange?: () => void;
};

const Select: React.FC<SelectProps> = ({ labelKey, onChange }) => {
  const [value, setValue] = useState(TITLES[0].key);
  const { formatMessage } = useIntl();
  const selectId = useId();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    onChange?.();
  };

  return (
    <section className="w-full flex items-center gap-6">
      {labelKey && (
        <label
          htmlFor={selectId}
          className="text-lg font-medium text-gray-900 dark:text-white"
        >
          {formatMessage({ id: labelKey })}
        </label>
      )}

      <select
        id={selectId}
        value={value}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {TITLES.map((title) => {
          return (
            <option key={title.key} value={title.key}>
              {formatMessage({ id: title.labelKey })}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default Select;

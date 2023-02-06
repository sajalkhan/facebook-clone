import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface DateOfBirthProps {
  bDay: number;
  bMonth: number;
  bYear: number;
  days: number[];
  months: number[];
  years: number[];
  dateError: string;
  handleRegisterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DateOfBirthSelect: React.FC<DateOfBirthProps> = ({
  bDay,
  bMonth,
  bYear,
  days,
  months,
  years,
  handleRegisterChange,
  dateError
}) => {
  const isLargeScreen = useMediaQuery({
    query: '(min-width: 1170px)'
  });

  const options = [
    { name: 'bDay', value: bDay, options: days },
    { name: 'bMonth', value: bMonth, options: months },
    { name: 'bYear', value: bYear, options: years }
  ];

  return (
    <div className="a-select-birth-date" style={{ marginBottom: `${dateError && !isLargeScreen ? '90px' : '0'}` }}>
      {options.map(({ name, value, options }, index) => (
        <select name={name} value={value} onChange={handleRegisterChange} key={index}>
          {options.map((option, i) => (
            <option value={option} key={i}>
              {option}
            </option>
          ))}
        </select>
      ))}
      {dateError && (
        <div className={!isLargeScreen ? 'input_error' : 'input_error input_error_select_large'}>
          <div className={!isLargeScreen ? 'error_arrow_bottom' : 'error_arrow_left'}></div>
          {dateError}
        </div>
      )}
    </div>
  );
};

export default DateOfBirthSelect;

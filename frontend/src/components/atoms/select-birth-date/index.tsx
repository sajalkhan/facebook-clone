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

  return (
    <div className="reg_grid" style={{ marginBottom: `${dateError && !isLargeScreen ? '90px' : '0'}` }}>
      {[
        { name: 'bDay', value: bDay },
        { name: 'bMonth', value: bMonth },
        { name: 'bYear', value: bYear }
      ].map(({ name, value }, index) => (
        <select name={name} value={value} onChange={handleRegisterChange} key={index}>
          {(name === 'bDay' ? days : name === 'bMonth' ? months : years).map((option, i) => (
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

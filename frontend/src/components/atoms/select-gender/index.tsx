import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface GenderSelectProps {
  genderError: string;
  handleRegisterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GenderSelect: React.FC<GenderSelectProps> = ({ handleRegisterChange, genderError }) => {
  const isLargeScreen = useMediaQuery({
    query: '(min-width: 1170px)'
  });

  return (
    <div className="a-select-gender" style={{ marginBottom: `${genderError && !isLargeScreen ? '70px' : '0'}` }}>
      <label htmlFor="male">
        Male
        <input type="radio" name="gender" id="male" value="male" onChange={handleRegisterChange} />
      </label>
      <label htmlFor="female">
        Female
        <input type="radio" name="gender" id="female" value="female" onChange={handleRegisterChange} />
      </label>
      <label htmlFor="custom">
        Custom
        <input type="radio" name="gender" id="custom" value="custom" onChange={handleRegisterChange} />
      </label>
      {genderError && (
        <div className={!isLargeScreen ? 'input_error' : 'input_error input_error_select_large'}>
          <div className={!isLargeScreen ? 'error_arrow_bottom' : 'error_arrow_left'}></div>
          {genderError}
        </div>
      )}
    </div>
  );
};

export default GenderSelect;

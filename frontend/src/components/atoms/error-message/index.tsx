import { Text } from 'components/atoms/text';
import { mapModifiers } from 'libs/component';
import { ErrorBody } from 'libs/utils';
import React from 'react';

export interface errorMessageProps {
  id?: string;
  className?: string;
  error: ErrorBody;
}

export const ErrorMessage: React.FC<errorMessageProps> = ({ id, className: additionalClassName = '', error }) => {
  const componentClassName = mapModifiers('a-error-message');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      {error?.Message && (
        <Text size="small" className="a-error-message__message">
          {error?.Message}
        </Text>
      )}
      <div className="a-error-message__codes">
        <ul>
          <li>
            Error code : <span>{error.Code}</span>
          </li>
          {error.TranToken && (
            <li>
              Request ID : <span>{error.TranToken}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

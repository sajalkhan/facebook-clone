import PropagateLoader from 'react-spinners/PropagateLoader';

interface ActivateFormProps {
  type: 'success' | 'error' | undefined;
  header: string;
  text: string;
  loading: boolean;
}

export const ActivateForm: React.FC<ActivateFormProps> = ({ type, header, text, loading }) => {
  return (
    <div className="activate-form">
      <div className="activate-form__popup">
        <div className={`activate-form__popup-header ${type === 'success' ? 'success_text' : 'error_text'}`}>
          {header}
        </div>
        <div className="activate-form__popup-message">{text}</div>
        <PropagateLoader color="#1876f2" size={20} loading={loading} />
      </div>
    </div>
  );
};

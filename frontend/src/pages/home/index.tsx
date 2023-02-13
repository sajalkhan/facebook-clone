import React, { useState, useRef } from 'react';
import { useAppSelector } from 'store/hooks';
import { Header } from 'components/organisms/header';
import useOnClickOutside from 'helpers/clickOutside';

const Home: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(() => false);
  const { first_name, last_name } = useAppSelector(state => state.login);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div>
      <Header first_name={first_name} last_name={last_name} />

      <div className="card">
        <button onClick={() => setIsOpen(true)} className="button">
          Open Modal
        </button>
        {isOpen && (
          <div ref={ref} className="modal">
            <p>This is a modal</p>
            <button onClick={() => setIsOpen(false)} className="button">
              Close Modal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

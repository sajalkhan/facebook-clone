import React, { useEffect, useRef, useState } from 'react';
import { Search } from 'assets/svg';

interface SearchInputProps {
  color?: string;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ color = '#65676b', placeholder }) => {
  const [iconVisible, setIconVisible] = useState(true);

  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
  }, []);

  return (
    <div className="a-search-input">
      {iconVisible && <Search color={color} />}
      <input
        ref={input}
        type="text"
        placeholder={placeholder}
        onFocus={() => setIconVisible(false)}
        onBlur={() => setIconVisible(true)}
      />
    </div>
  );
};

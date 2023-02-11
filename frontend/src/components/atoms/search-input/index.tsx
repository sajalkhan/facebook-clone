import React, { useEffect, useRef, useState } from 'react';
import { Search } from 'assets/svg';

interface SearchInputProps {
  color?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ color = '#65676b' }) => {
  const [iconVisible, setIconVisible] = useState(true);

  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
  }, []);

  return (
    <div className="a-search-input">
      {iconVisible && (
        <div>
          <Search color={color} />
        </div>
      )}
      <input
        ref={input}
        type="text"
        placeholder="Search Facebook"
        onFocus={() => setIconVisible(false)}
        onBlur={() => setIconVisible(true)}
      />
    </div>
  );
};

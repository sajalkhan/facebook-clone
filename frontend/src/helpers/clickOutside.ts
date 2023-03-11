import { useEffect, useCallback, RefObject } from 'react';

const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: (event: MouseEvent | TouchEvent) => void) => {
  const listener = useCallback(
    (event: MouseEvent | TouchEvent) => {
      const headerRightIcon = document.querySelector<HTMLDivElement>('.o-header__right-icon');
      const emojiPickerIcon = document.querySelector<HTMLDivElement>('.emoji_icon_large');

      if (!ref.current || ref.current.contains(event.target as Node)) return;
      if (headerRightIcon && (event.target as HTMLElement).classList.contains(headerRightIcon.className)) return;
      if (emojiPickerIcon && (event.target as HTMLElement).className.includes(emojiPickerIcon.className)) return;
      if (
        (event.target as SVGElement).tagName === 'svg' ||
        (event.target as SVGElement).tagName === 'circle' ||
        (event.target as SVGElement).tagName === 'path'
      )
        return;

      handler(event);
    },
    [handler, ref]
  );

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [listener]);
};

export default useOnClickOutside;

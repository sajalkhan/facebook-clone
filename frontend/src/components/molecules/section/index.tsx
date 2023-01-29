import { mapModifiers, mapModifiersPrefix, ModifierProp } from 'libs/component';
import React, { forwardRef } from 'react';

export interface SectionProps {
  children?: React.ReactNode;
  modifiers?: ModifierProp<
    | 'border'
    | 'card'
    | 'card-border'
    | 'fill'
    | 'fill-white'
    | 'fullpage'
    | 'pc-bg-none'
    | 'sp-bg-none'
    | 'head'
    | 'tabs'
  >;
  size?: 'small' | 'large-mobile' | 'sp-full';
  roundedSize?: 'large';
  padding?: ModifierProp<
    'none' | 'medium' | 'pc-none' | 'sp-none' | 'horizontal' | 'vertical' | 'vertical-medium' | 'vertical-large'
  >;
  id?: string;
  className?: string;
  head?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}

// NOTE: react-hook-form requires to wrap component with forwardRef https://react-hook-form.com/get-started#Integratinganexistingform
export const Section: React.FC<SectionProps> = forwardRef(
  ({ children, modifiers, size, roundedSize, padding, id, className: additionalClassName = '', head }, ref) => {
    const componentClassName = mapModifiers(
      'm-section',
      modifiers,
      size && `size-${size}`,
      roundedSize && `round-${roundedSize}`,
      padding && mapModifiersPrefix('padding', padding),
      !!head && 'with-head'
    );
    const className = `${componentClassName} ${additionalClassName}`.trim();
    return (
      <section className={className} id={id} ref={ref}>
        {head && <div className="m-section__header">{head}</div>}
        <div className="m-section__container m-section__scrollable">{children}</div>
      </section>
    );
  }
);

Section.displayName = 'Section';

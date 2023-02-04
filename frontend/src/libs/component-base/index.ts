import { addClassName, getElementClass, modifierName, ModifiersDictionaryType } from 'libs/class-name';
import React from 'react';

export type BaseComponentProps = {
  id?: string;
  className?: string;
  marginRule?: boolean | 'onlySp';
  animation?: boolean;
};

export type ContainerProps = {
  modifiers?: ModifiersDictionaryType;
} & BaseComponentProps;

export type ContainerHTMLProps<T extends keyof React.ReactHTML> = ContainerProps & JSX.IntrinsicElements[T];

export const createComponentBase = <T extends keyof React.ReactHTML>(baseClassName: string, tagName?: T) => {
  const elementClass = (...elements: string[]) => getElementClass(baseClassName, ...elements);

  const Container = React.forwardRef(function Container(props: ContainerHTMLProps<T>, ref) {
    const { marginRule = true, modifiers, ref: propsRef, className: propsClassName, children, ...otherProps } = props;
    const marginRuleClass = marginRule ? elementClass('marginRule') : '';
    const className = propsClassName
      ? addClassName(addClassName(propsClassName, baseClassName), marginRuleClass)
      : addClassName(baseClassName, marginRuleClass);

    const dataModifier = modifierName(modifiers);

    return React.createElement(
      tagName ?? 'div',
      {
        ...otherProps,
        className,
        ref: ref || propsRef,
        ...dataModifier
      },
      children
    );
  });

  return {
    Container,
    elementClass
  };
};

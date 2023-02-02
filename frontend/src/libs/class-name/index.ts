export type ModifiersDictionaryType = Record<string, boolean | null | undefined>;

export const addClassName = (baseClassName: string, ...add: string[]) =>
  add.reduce((prev, v) => (v ? `${prev} ${v}` : prev), baseClassName);

export const modifierName = (modifiers?: ModifiersDictionaryType) => {
  return {
    'data-modifier': modifiers
      ? Object.keys(modifiers)
          .map(item => (modifiers[item] ? `${item}` : modifiers[item]))
          .filter(item => item)
          .join(' ')
      : '',
  };
};

const modifyClassName = (baseClassName: string, modifier: string) => `${baseClassName}__${modifier}`;

const mapModifiers = (baseClassName: string, ...modifiers: string[]) =>
  addClassName(baseClassName, ...modifiers.map(v => modifyClassName(baseClassName, v)));

export const getModifiedClasses = (baseClassName: string, modifiers: ModifiersDictionaryType) =>
  mapModifiers(baseClassName, ...Object.keys(modifiers).filter(key => !!modifiers[key]));

const addElementToClass = (baseClassName: string, element: string) => `${baseClassName}__${element}`;
export const getElementClass = (baseClassName: string, ...elements: string[]) =>
  elements.reduce((prev, v) => addElementToClass(prev, v), baseClassName);

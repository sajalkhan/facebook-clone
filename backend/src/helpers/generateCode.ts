export const generateCode = (length: number): string => {
  const schema = '0123456789';

  const code = Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * schema.length);
    return schema.charAt(randomIndex);
  });

  return code.join('');
};

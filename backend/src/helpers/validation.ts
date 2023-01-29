export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};

export const validateLength = (text: string, min: number, max: number) => {
  if (text.length > max || text.length < min) return false;
  return true;
};

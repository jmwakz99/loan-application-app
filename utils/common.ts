export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const formatNumberWithCommas = (number: number): string => {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

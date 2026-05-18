export const formatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat('es-ES').format(new Date(date));
};

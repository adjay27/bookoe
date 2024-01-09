export const dateFormatter = (dateString, locales = "id-ID", opt) => {
  return new Date(dateString).toLocaleDateString(locales, opt);
};

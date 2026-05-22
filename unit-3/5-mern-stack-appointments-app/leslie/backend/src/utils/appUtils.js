export const getError = (status, message, consoleMessage = undefined) => {
  console.error(consoleMessage || message);
  const error = new Error(message);
  error.status = status;
  return error;
};

export const setError = (error, status, message = undefined) => {
  console.error(error.message);
  error.status = status;
  if (message) error.message = message;
  return error;
};

export const hasDuplicates = (arr) => new Set(arr).size !== arr.length;

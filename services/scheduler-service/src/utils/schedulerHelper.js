const validateCronExpression = (expression) => {
  const cronRegex = /^(\*|[0-5]?[0-9]) (\*|[0-5]?[0-9]) (\*|[0-2]?[0-9]) (\*|[1-9]|1[0-2]) (\*|[0-7])$/;
  return cronRegex.test(expression);
};

module.exports = { validateCronExpression };

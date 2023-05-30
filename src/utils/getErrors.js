const cases = ['SNAKE', 'KEBAB', 'CAMEL', 'PASCAL', 'UPPER'];

const getErrors = (textToFormat, toCase) => {
  const errors = [];
  const regs = '"/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>"';

  if (!textToFormat) {
    errors.push(`Text to convert is required. Correct request is: ${regs}.`);
  }

  if (!toCase) {
    errors.push(`"toCase" query param is required. Correct request is: ${regs}.`);
  }

  if (toCase && !cases.includes(toCase)) {
    errors.push(
      `This case is not supported. Available cases: ${cases.join(', ')}.`,
    );
  }

  return errors;
};

module.exports = { getErrors };
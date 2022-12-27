module.exports = (options) => (option3, option4) => {
  const exported = {...options, option3, option4}
  return exported;
};

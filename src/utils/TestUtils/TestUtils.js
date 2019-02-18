export const mockOriginalFunctionality = (name) => {
  const actualModule = require.requireActual(name);

  return {
    ...Object.getOwnPropertyNames(actualModule)
      .map(functionName => ({
        [functionName]: jest.fn().mockImplementation(() => actualModule[functionName]()),
      }))
      .reduce((accumulator, currentValue) => ({ ...accumulator, ...currentValue })),
  };
};

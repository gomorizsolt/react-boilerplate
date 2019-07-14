export const mockOriginalFunctionality = name => {
  const actualModule = require.requireActual(name);

  return {
    ...Object.getOwnPropertyNames(actualModule)
      .map(functionName => ({
        [functionName]: jest
          .fn()
          .mockImplementation((...args) => actualModule[functionName](...args)),
      }))
      .reduce((accumulator, currentValue) => ({
        ...accumulator,
        ...currentValue,
      })),
  };
};

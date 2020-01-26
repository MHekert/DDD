export const exceptionDefinitions = {
  emptyProperty: (prop: string) => ({
    message: `Empty property: ${prop}`,
    statusCode: 400,
  }),
  alreadyExists: {
    message: "Object already exists",
    statusCode: 400,
  },
  saveFail: {
    message: "Saving failed",
    statusCode: 500,
  },
  forbidden: {
    message: "Forbidden",
    statusCode: 403,
  },
  notFound: {
    message: "Not Found",
    statusCode: 404,
  },
  propertyTooShort: (prop: string) => ({
    message: `Too short property: ${prop}`,
    statusCode: 400,
  }),
  propertyTooLong: (prop: string) => ({
    message: `Too long property: ${prop}`,
    statusCode: 400,
  }),
};
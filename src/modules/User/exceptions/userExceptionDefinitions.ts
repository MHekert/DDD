export const userExceptionDefinitions = {
  notValidEmail: {
    message: "Email address not valid",
    statusCode: 400,
  },
  tooShortPassword: {
    message: "Password is too short",
    statusCode: 400,
  },
  notComplexPassword: {
    message: "Password is not complex enough",
    statusCode: 400,
  },
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
};
export const loggerMiddleware = (req, res, next) => {

  // tslint:disable no-console
  console.log(`Request...`);
  console.dir(req.body);
  next();
};

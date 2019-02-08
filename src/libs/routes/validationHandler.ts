export default (config) => (req, res, next) => {
  const keys = Object.keys(config);
  keys.forEach((key) => {
    const item = config[key];
    const errMessage = config[key].errorMessage;
    const values = item.in.map((item) => {
      return req[item][key];
    });
    if (item && item.required) {
      const validatedValues = values.filter((item) => item);
      if (validatedValues.length !== values.length) {
        console.log(item.id.errorMessage);
        next({
          message: errMessage || `${key} is required` || 'Error Message' ,
          status: 'Bad Request',
        });
      }

      if (item && item.string) {
        const validatedValues = values.filter((item) => typeof item === 'string');
        if (validatedValues.length !== values.length) {
          console.log(`${key} is not String`);
          next({
            message: errMessage || `${key} is required` || 'Error Message',
            status: 'Bad Request',
          });
        }
      }
      if (item && item.number) {
        const validatedValues = values.filter(item => !isNaN(item));
        if (validatedValues.length !== values.length) {
          console.log(`${key} is not number`);
          next({
            message:
              errMessage ||
              `${validatedValues} is not number` ||
              'ERROR MESSAGE',
            status: 'Bad Request',
            });
        }
      }
      if (item && item.regex) {
        const validatedValuesEmail = values.filter(
          (item) => RegExp(item.regex).test(item) === true,
        );
        if (validatedValuesEmail.length !== values.length) {
          console.log(`${key} is not proper`);
          next({
            message:
              errMessage ||
              `${validatedValues} is not a proper name` ||
              'ERROR MESSAGE',
            status: 'Bad Request',

          });
        }
      }
      if (item && item.isObject) {
        const validatedValuesObject = values.filter( (itemObject) => typeof itemObject === 'object');
        if (validatedValuesObject.length !== values.length) {
          console.log(`${key} is not object`);
          next({
            message:
              errMessage ||
              `${validatedValues} is not a object` ||
              'ERROR MESSAGE',
            status: 'Bad Request',
          });
        }
      }
      if (item.custom) {
      item.custom('');
      }
    }
    if (!item.required && item) {
      values.forEach(function skipLimit(finalValues) {
        if (finalValues === '') {
          finalValues = item.default;
        } else {
          finalValues = values;
        }
      });
      if (item.custom) {
        values.forEach(function callCustom(v1) {
          values.custom(v1);
        });
      }
    }
  });
  next();
};

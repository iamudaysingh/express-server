export default (config) => (req, res, next) => {
  const keys = Object.keys(config);
  keys.forEach((key) => {
    const item = config[key];
    const errMessage = config[key].errorMessage;
    const values = item.in.map((((item) => {
      return req[item][key];
    })));
    if (item && item.required) {
      const validatedValues = values.filter((item) => item);
      if (validatedValues.length !== values.length) {
        console.log(item.id.errorMessage);
        console.log(' vh jnm ');
        next({
          message: errMessage || `${key} is required` || 'Error Message' ,
          status: 'Bad Request',
        });
      }
      console.log('as', values, typeof values[0]);

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
        const invalidatedValues = values.filter(
          (item) => RegExp(item.regex).test(item) !== true
        );
        if (invalidatedValues.length !== values.length) {
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
        const validatedValues = values.filter(item => typeof item === 'object');
        if (validatedValues.length !== values.length) {
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
        values.forEach(function skip_limit(v1) {
          values.custom(v1);
        });
      }
    }
    if (!item.required && item) {
      const validatedValues = values.filter((item) => item);
      console.log('value ', values);
      console.log('validated', validatedValues);

      values.forEach(function skip_limit(v1) {
        if (v1 === '') {
          v1 = item.default;
          console.log('input1', v1);
        } else {
          v1 = values;
          console.log('input2', v1);
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

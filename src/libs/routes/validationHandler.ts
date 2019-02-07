export default (config) => (req, res, next) => {
  let i = 0;
  const skipLimit = [];
  const keys = Object.keys(config);
  console.log(keys);
  keys.forEach((key) => {
    console.log('1234567890');
    const item = config[key];
    console.log('fff', item);
    const errMessage =  'error';    // config[key].errorMessage;
    console.log(errMessage);
    const values = item.in.map((item) => {
      console.log('1' ,  req[item][key]);
      return req[item][key];
    });
    console.log('hi', values );
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
      item.custom('');
      }
    }
    if (!item.required && item) {
      const validatedValues = values.filter((item) => item);
      console.log('value ', values);
      console.log('validated', validatedValues);
      values.forEach(function skip_limit(v1) {
        if (v1 === '') {
          v1 = item.default;
          // v1.push(skipLimit);
          skipLimit[i] =  v1;
          i++;
          console.log('input1', v1);
        } else {
          v1 = values;
          skipLimit[i] =  v1;
          i++;
          console.log('input2', v1);
        }
        console.log('array' , skipLimit[0] , skipLimit[1]);
        req.body.newAr = skipLimit;
      });

      if (item.custom) {
        values.forEach(function callCustom(v1) {
          values.custom(v1);
        });
      }
    }
  });
  console.log('Skip Limit' , skipLimit);

  next();
};

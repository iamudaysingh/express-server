export default config => (req, res, next) => {
  const keys = Object.keys(config);
  keys.forEach(key => {
    const item = config[key];
    const values: String[] = item.in.map(item => {
      return req[item][key];
    });
    if (item && item.required) {
      console.log("inside if");
      const validatedValues = values.filter(item => item);
      if (validatedValues.length != values.length) {
        console.log(item.id.errorMessage);
        next({ status: 404, message: item.errorMessage });
      }
      validatedValues.forEach(function(isString) {
        if (item.string && !(typeof isString == "string")) {
          console.log("id is not string type  ", validatedValues);
          next({
            status: "Bad Request",
            message:
              item.errorMessage ||
              `${validatedValues} is not string` ||
              "ERROR MESSAGE"
          });
        }
      });
      validatedValues.forEach(function(isNumber) {
        if (item.number && !(typeof isNumber == "number")) {
          console.log("inside number validation ", validatedValues);
          next({
            status: "Bad Request",
            message:
              item.errorMessage ||
              `${validatedValues} is not number` ||
              "ERROR MESSAGE"
          });
        }
      });
      if (item && item.regex) {
        validatedValues.forEach(function(isRegex) {
          let re = item.regex;
          if (!re.test(isRegex)) {
            console.log(re.test(isRegex));
            next({
              status: "Bad Request",
              message:
                item.errorMessage ||
                `${validatedValues} is not proper name` ||
                validatedValues.forEach(function(isRegex) {
                  let re = item.regex;
                  if (!re.test(isRegex)) {
                    console.log(re.test(isRegex));
                    next({
                      status: "Bad Request",
                      message:
                        item.errorMessage ||
                        `${validatedValues} is not proper name` ||
                        "ERROR MESSAGE"
                    });
                  }
                })
            });
          }
        });
      }
      if (item.isObject) {
        validatedValues.forEach(function(isObject) {
          if (!(typeof isObject == "object")) {
            console.log("inside object validation");
            next({
              status: "Bad Request",
              message:
                item.errorMessage ||
                `${validatedValues} is not proper object` ||
                "ERROR MESSAGE"
            });
          }
        });
      }
    }
    /*if (item && !item.required) {
    const validatedValues = values.filter(item => item);
      validatedValues.forEach(function skip_limit() {
        if (isNaN(req.query.skip) && isNaN(req.query.limit)) {
          console.log("Number spotted");
          next({
            status: "Bad Request",
            message: item.errorMessage || "Error Message"
          });
        }
      });

      validatedValues.forEach(function skip_limit1() {
        var skip = req.query.skip;
        console.log(skip);
        var limit = req.query.limit;
        if (isNaN(skip) && isNaN(limit)) {
          skip = item.default;
          limit = item.default;
          console.log(skip, limit);
        }
      });
    }*/
  });
  next();
};

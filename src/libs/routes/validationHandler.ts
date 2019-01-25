
/*export default function validationHandler(config){
return (req, res, next)=>{
  console.log(req.body);

  let arr1 = [];
  for(let key in req.body){
   if(config.hasOwnProperty(key)){
    arr1.push(config[key]);
   }
  }
  console.log(arr1);
  let arr = [];
  for(let key in config){
   if(config.hasOwnProperty(key)){
    arr.push(config[key]);
   }
  }
  console.log(arr);
if(req.body)
{
 arr.forEach((element1, index) => {
   console.log('Element is????', element1);
   console.log(config[element1])
   // Object.keys(element1).forEach((element2, index) => {
     // console.log(element1[element2]);

  // });
  });
next()
}

}
}*/
export default config => (req, res, next) => {
  console.log("Inside validation Handler\n");

  const values = Object.keys(config).map(key => config[key]);
  console.log(values);
  values.forEach(element => {
  const KEYS = Object.keys(element);
  const val = KEYS.map(key => element[key]);
  if(val[0]){
  const I = KEYS.indexOf('in');
  //const al: string = val[I][0];
  if(val[I][0] == 'body'){
  console.log(req.body);
  console.log('\n');
  }
  //console.log(al);
  console.log(KEYS);
  console.log(val);
  next
  }
  });
  //console.log(values.length);
  //console.log(values[0]);
  //console.log('\n');
  //console.log(values[1].in);
  next();
  };

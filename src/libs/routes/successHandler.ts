export default function successHandler(
  status: string,
  message: any,
  data: any,
) {
  console.log('Inside Success handler', data);
  return {
    data: {data} ,
    message : message || 'Successful',
    status: status || 'OK',
    timestamp: new Date(),
  };
}

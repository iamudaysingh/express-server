export default function successHandler(
  status: string,
  message: string,
  data: any,
) {
  console.log('Inside Success handler', data);
  return {
    data1: data ,
    message : message || 'Successful',
    status: status || 'OK',
    timestamp: new Date(),
  };
}

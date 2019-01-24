export default function successHandler(
  status: string,
  message: string,
  data: any
) {
  return {
    Status: status || "OK",
    Message: message || "Successful",
    Data: data || null,
    Timestamp: new Date()
  };
}

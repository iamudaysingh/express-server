export default function successHandler(
  status: string,
  message: string,
  data: any
) {
  return {
    status: status || "OK",
    message: message || "Successful",
    data: data || null,
    timestamp: new Date()
  };
}

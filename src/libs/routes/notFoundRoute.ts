export default function notFoundRoutes(req, res, next) {
  console.log("inside not found");
  next({ error: "Not Found", status: 404 });
}

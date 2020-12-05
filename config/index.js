const dev = process.env.NODE_ENV !== "production";

if (dev == "development") {
  const server = "http://localhost:8000";
  //const server = "https://dental04.vercel.app.vercel.app";
  module.exports = server;
} else {
  // const server = "https://dental04.vercel.app.vercel.app";
  const server = "http://localhost:8000";
  module.exports = server;
}

import { createServer } from "./server";

const port = process.env.PORT || 3001;
const server = createServer();

server.get("/api", (req, res) => {
  res.json({ message: "Hello from API!" });
});

server.listen(port, () => {
  console.log(`api running on ${port}`);
});

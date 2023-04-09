import net from "net";

const server = net.createServer((socket) => {
  console.log(
    "TCP handshake successful with " +
      socket.remoteAddress +
      ":" +
      socket.remotePort
  );
  socket.write("Hello client");

  socket.on("data", (data) => {
    console.log("Received data", data.toString());
  });
});

const port = 8080;
server.listen(port, "0.0.0.0", () => {
  console.log(`Server created with net library listening on port ${port}`);
});

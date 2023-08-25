const express = require("express");
const rateLimit = require("express-rate-limit");
const { createProxyMiddleware } = require("http-proxy-middleware");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const app = express();

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 30, // Limit each IP to 2 requests per `window` (here, per 15 minutes)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(limiter);

app.use(
  "/flightsService",
  createProxyMiddleware({
    target: ServerConfig.FLIGHT_SERVICE,
    changeOrigin: true,
    pathRewrite: { "^/flightsService": "/" },
  })
);
app.use(
  "/bookingService",
  createProxyMiddleware({
    target: ServerConfig.BOOKING_SERVICE,
    changeOrigin: true,
  })
);
app.use(
  "/authService",
  createProxyMiddleware({
    target: ServerConfig.AUTH_SERVICE,
    changeOrigin: true,
  })
);
app.use(
  "/reminderService",
  createProxyMiddleware({
    target: ServerConfig.REMINDER_SERVICE,
    changeOrigin: true,
  })
);
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});

app.get("/", (req, res) => {
  res.send(`
  <h1>This is api gateway to access all microservice for aerovervw</h1>
  <p>Here are some other microservice links</p>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Github Link</th>
        <th>Gateway</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>Flight and Search</td>
      <td><a href="https://github.com/SudoKMaar/aeroverve-flights-and-search-service">Github</a></td>
      <td>/flightsService</td>
    </tr>
    <tr>
    <td>Auth Microserice</td>
    <td><a href="https://github.com/SudoKMaar/aeroverve-auth-service">Github</a></td>
    <td>/authService</td>
  </tr>
  <tr>
  <td>Booking Microservice</td>
  <td><a href="https://github.com/SudoKMaar/aeroverve-booking-service">Github</a></td>
  <td>/bookingService</td>
</tr>
<tr>
<td>Reminder Microservice</td>
<td><a href="https://github.com/SudoKMaar/aeroverve-reminder-service">Github</a></td>
<td>/reminderService</td>
</tr>
    </tbody>
`);
});

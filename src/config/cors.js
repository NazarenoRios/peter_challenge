const checkNodeEnvironment = require("../utils/checkNodeEnvironment");

const origin = checkNodeEnvironment(
  "https://torre-test-client.vercel.app",
  "http://localhost:3000"
);

const corsConfig = {
  origin,
  credentials: true,
  optionSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS",
};

module.exports = corsConfig;

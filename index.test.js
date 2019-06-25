const request = require("supertest");
const app = require("./index.js");

describe("My service", () => {
  it("Should get a greeting", () => {
    return request(app)
      .get("/")
      .expect("Hello World! This app is live!!!");
  });
});

// spec/greeting.spec.js

describe("The function greeting", () => {
  it("should greet type is function", () => {
    expect(typeof greeting).toEqual("function");
  });
  it("should greet all Ironhackers", () => {
    expect(greeting()).toEqual("Hello Ironhackers!");
  });
});

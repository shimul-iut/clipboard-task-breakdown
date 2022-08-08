const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns 128 length string when given any input not as partition key", () => {
    const trivialKey = deterministicPartitionKey('12345678');
    expect(trivialKey.length).toBe(128);
  });

  it("Returns the partition key given as object", () => {
    
    const event = { 
      partitionKey : '10'
    };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(event.partitionKey);
  });

});

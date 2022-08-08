const {deterministicPartitionKey} = require("./dpk");

const event = { 
    partitionKey : 10
};
console.log(deterministicPartitionKey(event));
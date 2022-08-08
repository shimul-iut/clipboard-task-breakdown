const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  // if (event) {
  //   if (event.partitionKey) {
  //     candidate = event.partitionKey;
  //   } else {
  //     const data = JSON.stringify(event);
  //     candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  //   }
  // }

  // if (candidate) {
  //   if (typeof candidate !== "string") {
  //     candidate = JSON.stringify(candidate);
  //   }
  // } else {
  //   candidate = TRIVIAL_PARTITION_KEY;
  // }
  // if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
  //   candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  // }

  if (event){
    if (event.partitionKey) {
        candidate = event.partitionKey;
        if (typeof candidate !== "string") {
          candidate = JSON.stringify(candidate);
          if(candidate.length > MAX_PARTITION_KEY_LENGTH) candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
        }
    } 
    else {
      candidate = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex"); 
          //always returns a string and length is always 128, therefore no need to check for string or the MAX_PARTITION_KEY_LENGTH
    }
  }
  else{
    candidate = TRIVIAL_PARTITION_KEY;
  }
  return candidate;
};
// This function is the endpoint's request handler.
exports = async function({ query, headers, body}, response) {
  var d = new Date()
  console.log(d)
  await new Promise(r => setTimeout(r, 120000));
  console.log("finished sleeping, ", new Date())
  return  "Hello World!";
};

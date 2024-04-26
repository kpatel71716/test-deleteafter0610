exports = async function() {
  try {
    throw new Error("test")
  } catch (err) {
    console.log("error");
    console.error("oops")
  }
};

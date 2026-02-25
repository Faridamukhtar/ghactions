function hi(name) {
  return `Hello, ${name}`;
}

module.exports = hi;

if (require.main === module) {
    console.log(hi("World"));
}

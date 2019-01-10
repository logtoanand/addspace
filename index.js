module.exports = function addspace(string) {
  if (typeof string !== "string") {  
  console.error('String required');
  }
  return string.replace(/\s/g, " ");
};

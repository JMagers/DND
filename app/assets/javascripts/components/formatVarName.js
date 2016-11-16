// Converts variable name to printable name by replacing underscores with
// spaces and capitalizing first character
var formatVarName = function(name) {
  var new_name = name.replace(/_/g, ' ');
  new_name = new_name.charAt(0).toUpperCase() + new_name.slice(1);
  return new_name;
};

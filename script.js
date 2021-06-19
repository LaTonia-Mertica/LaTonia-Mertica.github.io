//REGEX CODE FOR NONITALIC PARENTHESES AROUND ITALIC PRONUNCIATION OF NAME IN FOOTER
$("#str").html(function (i, h) {
  return h.replace(/\(([^\)]+)\)/, "(<i>$1</i>)");
});

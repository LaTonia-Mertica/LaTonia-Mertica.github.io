//REGEX CODE FOR NONITALIC PARENTHESES AROUND ITALIC PRONUNCIATION OF NAME IN FOOTER
// $("#str").html(function (i, h) {
//   return h.replace(/\(([^\)]+)\)/, "(<i>$1</i>)");
// });

const strElement = document.getElementById("str");
// strElement.innerHTML = "change this";
const replaced = strElement.innerHTML.replace(
  /\(([^\)]+)\)/,
  `(<span class="pronunciation">$1</span>)`
);
console.log(replaced);
strElement.innerHTML = replaced;

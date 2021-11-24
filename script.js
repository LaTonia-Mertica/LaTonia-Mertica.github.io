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

// //when we scroll
// window.addEventListener("scroll", (evt) => {
//   //get scroll height
//   const scrollHeight = window.scrollY;

//   //get overlay height
//   const overlayHeight = document.getElementById("overlay").offsetHeight;
//   const socials = document.getElementById("socials");
//   console.log(overlayHeight);
//   console.log(scrollHeight);

//   //figure out if scroll height is more than overlay height.
//   //MZM 11-17-21 TODO: Never got the math working on the psuedo code above
//   if (scrollHeight > 115) {
//     //hide the icons
//     socials.style.display = "none";
//   } else if (scrollHeight < 115) {
//     //if you scroll back up, they should appear again
//     socials.style.display = "block";
//   }
// });

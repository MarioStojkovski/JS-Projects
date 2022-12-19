const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  const word = document.querySelector(".input-text").value;
  let len = word.length;

  let begin = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  let flip = [...end].reverse().join("");
  if (begin !== "") {
    if (begin == flip) {
      result.innerHTML = `${word.toLowerCase()} is a palindrome`;
    } else {
      result.innerHTML = `${word.toLowerCase()} is not a palindrome`;
    }
  } else {
    alert("Please input a valid word");
  }
}

let shortBTN = document.querySelector(".main-url");
let resetLink = document.querySelector(".reset-link");
let heading = document.querySelector("h1");

shortBTN.addEventListener("click", function () {
  let url = document.querySelector(".main-link").value;
  //   console.log(url);
  async function urlshortner() {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    try {
      const data = await res.json();
      // console.log(data.result.short_link);
      shortLink = data.result.short_link;
      document.querySelector(".short-link").value = shortLink;
    } catch (err) {
      heading.innerHTML = "Please enter a valid URL";
      heading.style.fontSize = "20px";
      document.querySelector(".main-link").value = "";
      document.querySelector(".short-link").value = "";
    }
  }
  urlshortner();
});
// console.log(shortLink);

resetLink.addEventListener("click", function () {
  document.querySelector(".main-link").value = "";
  document.querySelector(".short-link").value = "";
  copyBTN.innerHTML = "Copy";
  heading.innerHTML = "URL Shortener";
  heading.style.fontSize = "30px";
});

let newShortUrl = document.querySelector(".short-link");
// console.log(newShortUrl);
let copyInput = document.querySelector(".short-link");

let copyBTN = document.querySelector(".new-url");
copyBTN.addEventListener("click", function () {
  if (copyInput.value === "") return;
  else {
    navigator.clipboard
      .writeText(copyInput.value)
      .then(() => {
        copyBTN.innerHTML = "Copied";
      })
      .catch((err) => console.error("Unable to copy text: ", err));
  }
});

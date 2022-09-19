

function showImage() {
  fetch("https://xkcd.vercel.app/?comic=latest")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((jsonResponse) => {
      // do whatever you want with the JSON response
      let funnyPicEl = document.createElement("img");
      funnyPicEl.src = jsonResponse.img;
      document.getElementById("display").appendChild(funnyPicEl);
    })
    .catch((error) => {
      // Handle the error
      console.log(error);
    });
}

let count = 0;

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
      let imgDisplay = document.getElementById("display");
      if (imgDisplay.firstChild) {
        imgDisplay.removeChild(imgDisplay.firstChild);
      }
      count++;
      console.log(count);
      let funnyPicEl = document.createElement("img");
      funnyPicEl.src = jsonResponse.img;
      document.getElementById("display").appendChild(funnyPicEl);
    })
    .catch((error) => {
      // Handle the error
      console.log(error);
    });
}

showImage();
document.getElementById("next").addEventListener("click", showImage);

//Please note, the API itself is is not updating the pictures.

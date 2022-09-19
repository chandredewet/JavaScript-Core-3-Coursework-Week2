getImage();
document.getElementById("btnNext").addEventListener("click", getImage);
document.getElementById("btnRemove").addEventListener("click", removeImage);

function getImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
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
      let dogFirstLi = document.createElement("li");
      let dogFirstPic = document.createElement("img");
      dogFirstPic.src = jsonResponse.message;
      dogFirstPic.alt = "Dog Pic";
      dogFirstLi.appendChild(dogFirstPic);
      document
        .getElementById("photoList")
        .insertBefore(dogFirstLi, photoList.firstChild);
    })
    .catch((error) => {
      // Handle the error
      console.log(error);
    });
}

function removeImage() {
  let ulDog = document.getElementById("photoList");
  ulDog.removeChild(photoList.firstChild);
}

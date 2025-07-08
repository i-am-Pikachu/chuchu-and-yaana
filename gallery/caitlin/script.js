let data = {};
let index = 0;

fetch('list.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(json => {
    data = json;
    document.getElementById("image").src = data[Object.keys(data)[index]];
    document.getElementById("current-image").innerText = index+1;
    document.getElementById("total-image").innerText = Object.keys(data).length;
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });

function next_image() {
  document.getElementById("image").src = "";
  const keys = Object.keys(data);
  index = (index + 1) % keys.length;
  document.getElementById("image").src = data[keys[index]];
  document.getElementById("current-image").innerText = `${index+1}`;
}

function prev_image() {
  document.getElementById("image").src = "";
  const keys = Object.keys(data);
  index = (index - 1 + keys.length) % keys.length;
  document.getElementById("image").src = data[keys[index]];
  document.getElementById("current-image").innerText = `${index+1}`;
}


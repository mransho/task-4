// Use fetsh -----------------------------------------------------------------
function getData() {
  // fetch used to GET data from the server
  fetch("https://api.github.com/users/mransho/repos")
    .then((res) => {
      // when get data successfully The promise is fulfilled
      return res.json();
      // Convert Received data from JSON to JS Object
    })
    .then((data) => {
      console.log(data);
    });
}
getData();

// Use XMLHttpRequest -----------------------------------------------------------------
// XMLHttpRequest() used to fetch or send data from and to the server
let xhr = new XMLHttpRequest();

// Open the connect and send getRequest from URL , true => Request is asynchronous
xhr.open("GET", "https://api.github.com/users/mransho/repos", true);

// when readyState changed
xhr.onreadystatechange = function () {
  // the Request completed and response successful
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Convert Received data from JSON to JS Object
    let data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
xhr.send();

// Use async and try/catch -----------------------------------------------------------------
async function fetchData() {
  try {
    // get data from server and stops executing until the promise is resolved
    let response = await fetch("https://api.github.com/users/mransho/repos");
    // if not successful response
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    // Convert Received data from JSON to JS Object
    // await => don't do anything before Convert the data
    let data = await response.json();
    console.log(data);
  } catch (error) {
    // if reject request catch the Error
    console.error("There has been a problem with your fetch operation:", error);
  }
}
fetchData();

const apiUrl1 = 'https://dummyjson.com/posts';
const apiUrl2 = 'https://dummyjson.com/products';
const apiUrl3 = 'https://dummyjson.com/todos';

function fetchApiData(apiUrl) {
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Show data in UI
      const outputDiv = document.getElementById('output');
      const dataDiv = document.createElement('div');
      dataDiv.innerHTML = JSON.stringify(data);
      outputDiv.appendChild(dataDiv);
      return true;
    });
}

function promiseAPI1() {
  return new Promise(resolve => {
    setTimeout(() => {
      fetchApiData(apiUrl1).then(() => resolve(true));
    }, 1000);
  });
}

function promiseAPI2() {
  return new Promise(resolve => {
    setTimeout(() => {
      fetchApiData(apiUrl2).then(() => resolve(true));
    }, 2000);
  });
}

function promiseAPI3() {
  return new Promise(resolve => {
    setTimeout(() => {
      fetchApiData(apiUrl3).then(() => resolve(true));
    }, 3000);
  });
}

document.getElementById('startPromiseChainBtn').addEventListener('click', () => {
  promiseAPI1().then(result1 => {
    if (result1) {
      promiseAPI2().then(result2 => {
        if (result2) {
          promiseAPI3().then(result3 => {
            if (result3) {
              // All promises resolved successfully
              console.log('All promises resolved successfully');
            }
          });
        }
      });
    }
  });
});


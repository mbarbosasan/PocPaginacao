const url = "https://630e8e7a37925634187ee4ae.mockapi.io/users";

let limite = 10;
let pagina = 1;

document.querySelectorAll('.limitSize').forEach(item => {
  item.addEventListener('click', () => {
    console.log(limite)
    limite = item.value;
    pagina = 1;
    document.querySelector('.container').innerHTML = '';
    fillContainer();
  })
})

document.querySelectorAll('.pageSelector').forEach(item => {
  item.addEventListener('click', () => {
    console.log(limite)
    pagina = item.value;
    document.querySelector('.container').innerHTML = '';
    fillContainer();
  })
})


async function fetchData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
} 

function buildContainer(item) {
  const container = document.createElement('ul')
  const id = document.createElement('li')
  id.innerText = item.id;
  const timestamp = document.createElement('li');
  timestamp.innerText = item.createdAt;
  const title = document.createElement('li')
  title.innerText = item.name;
  const content = document.createElement('img')
  content.setAttribute('src', item.avatar);
  container.appendChild(id)
  container.appendChild(content)
  container.appendChild(title)
  container.appendChild(timestamp)
  document.querySelector('.container').appendChild(container);
}

async function fillContainer() {
  const json = await fetchData(url);
  const result = [];
  for(let i = ((limite * pagina) - limite); i < (limite * pagina); i++) {
    result.push(json[i])
  }
  result.forEach(item => {
    buildContainer(item);
  })
}

fillContainer(); 
let add = document.querySelector('#add');
let name = document.querySelector('#taskName');
let description = document.querySelector('#description');
let list = document.querySelector('#taskList');

function addTask(title, time, description) {
  return `<div class="container border w-100 rounded-5 my-3 px-4 py-3">
    <div class="d-flex justify-content-between align-items-start flex-row">
      <h2>${title}</h2><span>${time}</span>
    </div>
    <div><p>${description}</p></div>
  </div>`;
}

add.addEventListener('click', () => {
  const html = addTask(name.value, `${new Date().getHours()}:${new Date().getMinutes()}`, description.value);
  list.insertAdjacentHTML('beforeend', html);
});

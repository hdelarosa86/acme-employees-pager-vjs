let pager = document.querySelector('#pager');
let usersList = document.querySelector('#usersList');
let hash = window.location.hash.slice(1);
let linksNodeList;
const renderUserList = (data) => {
  return data.users
    .map((user) => {
      return `<li class="user">
          <div>${user.firstName}</div>
          <div>${user.lastName}</div>
          <div>${user.email}</div>
          <div>${user.title}</div>
        </li>`;
    })
    .join('');
};

const handleHashChange = (hashValue) => {
  linksNodeList.forEach((ele, idx) => {
    if (Number(hashValue) === idx) {
      ele.classList.add('active');
    } else {
      ele.classList.remove('active');
    }
  });

  if (hashValue === '0') {
    hashValue = '';
  }
  window
    .fetch(`https://acme-users-api-rev.herokuapp.com/api/users/${hashValue}`)
    .then((response) => response.json())
    .then((data) => {
      usersList.innerHTML = renderUserList(data);
    });
};

window
  .fetch(`https://acme-users-api-rev.herokuapp.com/api/users/${hash}`)
  .then((response) => response.json())
  .then((data) => {
    let links = '';
    for (let i = 0; i < Math.ceil(data.count / 50); i++) {
      links += `<a href='#${i}'>${i + 1}</a>`;
    }
    pager.innerHTML = links;
    usersList.innerHTML = renderUserList(data);
    linksNodeList = document.querySelectorAll('a');
    // linksNodeList.forEach((ele) => {
    //   ele.addEventListener('click', (ev) => {});
    // });
  });

window.addEventListener('hashchange', () =>
  handleHashChange(window.location.hash.slice(1))
);

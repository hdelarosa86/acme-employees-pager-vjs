window
  .fetch('https://acme-users-api-rev.herokuapp.com/api/users')
  .then(response =>
    response.json().then(data => {
      let html = data.users
        .map(user => {
          return `<div class="user">
            <div>${user.firstName}</div>
            <div>${user.lastName}</div>
            <div>${user.email}</div>
            <div>${user.title}</div>
          </div>`;
        })
        .join('');
        html = `<div class="header">
          <div>First Name</div>
          <div>Last Name</div>
          <div>Email</div>
          <div>Title</div>
        </div>${html}`;
      document.querySelector('#usersList').innerHTML = html;
    })
  );














// // const users = myFunction();
// // const usersArray = users.then(data => data.users).then(value => render(value))

// // console.log(usersArray);
// async function myFunction() {
//   const response = await fetch(
//     'https://acme-users-api-rev.herokuapp.com/api/users'
//   );
//   const json = await response.json(); // convert response to JSON data; .json() also needs the await keyword
//   // console.log(json);
//   // return json;

//   //const users = myFunction();
//   const users = json;
//   // const usersArray = users.then(data => data.users); //.then(value => render(value));
//   c;
//   function render(arr) {
//     let html = arr.map(user => {
//       `<div class=userContainer>

//             <div>
//             ${user.firsName}
//             </div>
//             <div>
//             ${user.lastName}
//             </div>
//             <div>
//             ${user.email}
//             </div>
//             <div>
//             ${user.title}
//             </div>

//             </div>
//             `;
//     });
//     console.log(html);
//   }

//   render(users);
// }
// myFunction();
// // render(usersArray);

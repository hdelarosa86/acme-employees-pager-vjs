// const users = myFunction();
// const usersArray = users.then(data => data.users).then(value => render(value))

// console.log(usersArray);
async function myFunction() {
    const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/users');
    const json = await response.json(); // convert response to JSON data; .json() also needs the await keyword
    // console.log(json);
    // return json;

    //const users = myFunction();
    const users = json;
    // const usersArray = users.then(data => data.users); //.then(value => render(value));
    c
    function render(arr) {
        let html = arr.map(user => {
            `<div class=userContainer>

            <div>
            ${user.firsName}
            </div>
            <div>
            ${user.lastName}
            </div>
            <div>
            ${user.email}
            </div>
            <div>
            ${user.title}
            </div>

            </div>
            `
        });
        console.log(html);
    }
    
    render(users);
}
myFunction();
// render(usersArray);

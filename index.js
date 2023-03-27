var toDoList = [];
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (resp) { return resp.json(); })
    .then(function (json) {
    if ('id' in json) {
        toDoList.push(json);
    }
    else if (Array.isArray(json)) {
        toDoList = json;
    }
    console.log(toDoList);
});


/*
Create an empty array called tasks.

Write functions to:

Add a new task (addTask("Buy milk"))

List all tasks (listTasks())

Remove a task by index (removeTask(2))

Use loops and array methods like push(), splice(), and forEach().

Bonus: Validate user input.

Expected Skills: arrays, functions, loops, conditionals. */

let tasks = {
    name: ""
};

function addTask(userTask)
{
    if (typeof(userTask) !== "string"){
        console.log('Please type a string i.e "Shopping"');
        return;
    }
    if (userTask == ""){
        console.log('Please input something');
        return;
    }

    tasks.push(userTask);

    console.log(userTask + " has been added to your list.");
} 

function listTasks()
{
    if (tasks.length === 0)
    {
        console.log('There are no tasks here.');
        return;
    }

    tasks.forEach(function(element, index){
        tasks.splice(index, 1, element[0].toUpperCase() + element.slice(1));
    });

    for (let task in tasks) 
        console.log(++task + '.) ' + tasks[--task]);
}

function removeTask(index)
{
    if (tasks.length === 0)
    {
        console.log('There are no tasks here.');
        return;
    }

    if (typeof(index) !== "number"){
        console.log('Please type a number');
        return; 
    }

    if(typeof(tasks[index]) === "undefined")
    {
        console.log('There is no task of this index');
        return;
    }

    let deleteItem = tasks[index];

    tasks.splice(index,1);

    console.log(deleteItem + " has been deleted.");
}
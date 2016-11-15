//Global Variable
var taskList = [];

//Display Dynamic HTML Lists
//UL & LI Tags
//Remove Button Displays
function displayList()
{
    
    //Variable for creating and storing dynamic HTML Elements
    var taskListContent = "<ul>";
    
    //Create LI Tags and Loop through the Array
    for(var i=0; i < taskList.length; i++)
    {
        taskListContent += "<li>"+taskList[i]+"<button>"
        document.
    }
}

function addTask ()
{
    //Add in the Tasks from the input field in our HTML File
    //Display the latest list of tasks
    displayList();
}

displayList();
document.getElementById("Add").addEventListener("click", addTask);
                                                
function remove ()
{
    
}
function  display ()
{
    
}


# To-Do List Pseudocode

## **Questions**


## **Concept**
- Create an online to-do list manager application

## **MVP**
- App should display:
	- Items on the to-do list
	- List the status of items on to-do list

## **Requirements**
- Dynamically render the content with React using components
- Display all to-do list items
- Three “views” for the user:
    - All
    - Completed
    - To-Do (not completed)
- Cross out or check off one item as “completed”
- See a count of remaining items
- Remove one items (either hard delete or soft delete/archive)
- Check off or cross out all items in one click as a “completed all” function
- Remove all completed items (soft delete/archive)
- Ability to press a button and all checked off items become active again

## **Requirements/Basic Concept**
- Displaying the number of items for a specific view (JSX/State)
- Rendering any content using react (Rendering Elements)
- ToDoList, ToDoItem, Input, etc. (Components)
- Sending the to-do item data from the app down to the to-do item (props)
- Modifying a to-do item from in-progress to completed (State)
- Handling an onClick or onChange (Events)
- Displaying “ass a new task”/no”no completed tasks” if there are none OR listing the remaining     
  to-do / completed items instead (Conditional Rendering)
- Looping (.map()) over the to-do items from state and displaying them on screen (Rendering Lists)
- Clicking on a to-do item and updating the app level state Lifting/Hoisting State
- Looping over the to-do items from state and displaying specific ones on the screen based on the  
  view you are on (Dynamic Rendering, JS Array Methods)
- Using radios and checkboxes (no need to submit or have a <form> component, you can just use the 
  individual input types) (Inputs, State)

## **Additional Requirements**
- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete website
- Repo should be public so that others can see your code and comment on it
	- Push to GitHub!
	- Potential employers will view your GitHub profile - activity is crucial

## **HTML/CSS**
- **TodoList**
	`<ul> of <TodoItem/>`
- **TodoItem**
	- Delete Button X
	- Checkbox - update state from todo to todone
	- Text of the todo
	- Classes added based on todo status
- **Header**
- **Input textbox**
	- Add button definitely
- Buttons (All/Active/Completed)
	- `<Button text=”All”>`
	- OnClick Event to update some state somewhere
- **Count / Items Left**
	- Getting a count of the items in the state that are still left to do
- **Check all (Should Have)**
- **Clear Completed button (deletes all to-do)**
- **Button to complete all (should have)**
	- Changes all to-dones to to-dos / completed to active

## **React Component Hierarchy**
- Index.js
	- App.js
		- currentView (state)
		- Todos (state)
		- Filter todos based on the currentView before rendering
		- Return (
			- `<Header>`
			- `<Input>`
				- `<button>`
			- `<TodoList todos>`
				- Loop through todos to render
				- `<TodoItem>`
					- Checkbox
					- Text
					- DeleteButton


## **Variables**

- STATE
- Todo item
	- Text: some task
	- Done: false // status: ‘todo’
- Todos - Array of Todo Item
	- Saw an example of something similar in the wizards/elixirs/houses
	- To show count, we can use length of the visible todos to show there
- CurrentView
	- String for view (‘active’, ‘all’, ‘completed’)

## **Functions**



## **Procedures**

//Start Program

    START

        INIT
        PAGE LOAD
        DISPLAY input field for to-do item
        DISPLAY button to add to-do item to list
        DISPLAY CurrentView “All”

        INPUT to-do item
            INPUT click “Add Item” button
            DISPLAY to-do item added to list
            DISPLAY unchecked box
            DISPLAY X on hover to remove items from list

        INPUT click to-done
            DISPLAY line through to-do items
            ADD to-do item to completed list

        INPUT click X
            REMOVE item from list

        INPUT click Active button
            DISPLAY Active list

        INPUT click Completed button
            DISPLAY Completed list
        INPUT click Clear Completed button
            Remove all items from completed items list
        

    END

//End Program

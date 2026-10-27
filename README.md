# PassengerLoader
A site that tracks and counts the number of passengers that are transported per set/day.
The website consists of two buttons that add and save the number of passengers and displays two set of texts that captures the number and one that saves the previous number of passengers.

Learning Curve:
The save(){} function could not save the previous entry and add the next one. Every time I save an entry it resets the same previous entry to 0. 
How I corrected my mistake:
1. Line 14 of passloader.js is the reason why I encountered this issue.
2. Previous line of code: entriesPerTrip.textContent = "Enter the number of passengers per trip:" data. This took the already existing html text and repeated its output instead of concatenating the text with every new entry that is saved into the database.
3. New line of code: entriesPerTrip.textContent += data. This concatenated the already existing data and added new data into the database acting as a for loop. The line of code is invoked each time the button is clicked by the user.
4. Difference between previous and new line of code: The difference is that "=" overwrites the previous entry, while "+=" preserves the existing text and adds the new entry to it. In simpler words the "=" reassigns each time the function is invoked and "+=" increments to what is already there.

Learn
JavaScript:
1. <script></script> can be used to write js code.
2. Linking a JS file to html is scripted through this <script src="car.js"></script>.
3. let keyword in JavaScript declares a re-assignable, block-scoped local variable.
4. console.log(count) logs information into the terminal.
5. document.getElementById = gets html elements for modification
6. <button onclick="(function/variable)"></button> = gives access to a function/variable for modification when the button is clicked.
7. "textContent" over "innerText" = accesses html text in human readable format.
8. count = count + 1 | shortcut count += 1
9. The DOM = The Document Object Model (DOM) is a programming interface that represents an HTML document as a tree of objects, allowing JavaScript to dynamically read, add, modify, or delete elements and styles.
10. If you concatenate a string and a number the code is viewed as a string.

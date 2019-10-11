You task

You have been asked to create two web pages with statistics on the Senate and the House (checkout Email and files m2task3). This will involve:

looping over the data about the members of the two houses, counting and adding as you go
constructing an HTML table to display the final results with clear labels and properly formatted number

Each statistic requires different logic to calculate. Some are simple counts, others are complex. The best way to organize such code is to define a function to calculate each statistic. Each function may in turn call other functions.

Best practice also suggests separating the calculation of the statistics from the construction of the HTML. This is called separating the model from the view. That way your calculation code can be written and tested separately from the HTML code. Also, the calculation code could more easily be reused in future programs.

So the steps in this Plan of Attack first focus on creating a JSON object to hold all the statistics. We'll refer to this JSON object as the statistics object.

You'll create an HTML page for the Senate, but you won't worry about the HTML itself at first. Just write the JavaScript to do the statistics you need, and use the Developer Console to test how your code works.

Once the JSON statistics object is constructed correctly, then you'll add the code to create the HTML to display the JSON, just as you did in a previous task with the JSON returned by the Congress API. 

Numbers and Strings in JavaScript

In every programming language, the number 12 is not the same as the string "12". But the operator plus (+) can be used with both:

Number + number returns the sum of the two numbers
String + string returns the concatenation of the two strings

Which rule is used if you add a number and a string? The answer is well-defined, i.e., the same in all browsers, but not intuitive. Try each of the following in the JavaScript console.

  Test

  Result

  1 + 2

 

  "1" + "2"

 

  1 + "2"

 

  "1" + 2

 

  + "2"

 

  "" + 2

 

  + "abc"

 



From these experiments, you should be able to see how you can convert numbers to strings and vice versa.  Just be careful not to use one where you meant the other!


Create Senate HTML File and JSON Statistics Object 

To hold your calculation results, you need a JSON object, which we'll call the statistics object.

The statistics object will have a key for each statistic, e.g., "Number of Democrats", and the value for that statistic. Use strings for the keys that are what you will want printed on the web page. The values you will calculate in later steps.

1. Open the Attendance starter HTML file.  Create a Senate Attendance statistics page from this file.

2. In the new HTML file, inside SCRIPT tags, create a JSON object named statistics. See Resources for help with JSON.

3. In the statistics object, include fields for all the statistics the client has requested (e.g., "Number of Democrats"). For now, initialize each value to zero.

4. Open the Party Loyalty starter HTML file. Create the Senate Party Loyalty statistics page from this file.  Repeat steps 2-3 for the Senate Party Loyalty page.

Get the Number of Members in Each Party

There are two obvious ways to do this.

Go through the list of all members in one of the chambers and count the Democrats, Republicans, and Independents OR
Make three lists, one for each party, and get the length

If all you needed was the counts, the first approach would be more efficient for that task. But since some of the other statistics will need lists of party members, the second approach will be more efficient overall. So:

1. Open your Senate Attendance HTML file.

2. Write code to create and fill three variables, one for a list of the Democrat objects, one for the Republican objects, and one for the Independents. See your Resources for help with JSON and looping.

3. Then update your statistics object with the number of members in each party, e.g. for the key "Number of Democrats" replace the default value of zero with the length of the list of Democrat objects.

4. Use console.log() to print your updated statistics object to the Developer Console so that you can inspect it to verify that it contains the correct answers. See Resources for help with console.log()

TIP: To make the JSON statistics object's contents a string before outputting with console.log(), use the stringify method.

5. Open your Senate Party Loyalty HTML file.  In order to be DRY (Don't Repeat Yourself), move your statistics object code to a separate javascript file and load it in both the Senate Attendance page and the Part Loyalty Page.  

SUBMIT: You will need to submit this javascript file, along with the associated HTML files, when you submit your work. 
Submit Get the Number of Members in Each Party Tarea
Sin finalizar: Submit Get the Number of Members in Each Party
Calculate the Average "Votes with Party" for Each Party

1. Open your statistics javascript file.

2. To get an average of an array of data, you first sum up the relevant numbers from that array, then divide by the size of the array. Do that with the list of Democrats, using the percent party votes for each member.

3. Store the result in your statistics object.

4. Repeat for the list of Republicans.

5. Call your results in your Senate Party Loyalty HTML file.  

6. Use console.log to print this object to the Developer Console so that you can inspect and verify it contains the correct answers. (Remember to stringify.)

SUBMIT: Submit your Senate Part Loyalty HTML file and your statistics javascript file for mentor review.
Submit Calculate the Average "Votes with Party" for Each Party Tarea
Sin finalizar: Submit Calculate the Average "Votes with Party" for Each Party
Identify the Members Who Least Often Vote with Their Party

This is a non-trivial problem, and there are multiple ways to solve it, some simpler than others.

1. Think about the problem in general, which is

Given a list of N numbers and a percentage K
Example: 100 values and you want to find the 10% of those values that are the smallest values in the set.
Sort the values so there are listed from least to greatest
Calculate how many values represents the 10% of them
Take the amount of values from the previus calculus

2. Develop and test code to solve this problem, then apply it to the data on voting with one's party. Your goal is to generate a list of the names of the 10% of Senators who vote least often with their party.

3. Call your code in the Senate Party Loyalty HTML file and use console.log to check your answers on different test data.

SUBMIT: Submit your Senate HTML file and statistics javascript file for mentor review.

Submit Members Who Least Often Vote with Their Party Tarea
Sin finalizar: Submit Members Who Least Often Vote with Their Party
Get the Remaining Statistics 

The remaining statistics are the same logic, differing only in what numbers are looked at and whether to collect the smallest or biggest values. 

1. The real challenge now is to generalize your code into a few functions that can get these answers, with as little repeated code as possible. Can you come up with one function that, given the appropriate parameters, can do all these statistics?

2. Collect and store the results into your statistics object with the appropriate keys.

3. Call the results in Senate Party Attendance HTML file and in the Senate Attendance HTML file.

SUBMIT: Submit your Senate HTML files and statistics javascript file for mentor review.
Submit Get the Remaining Statistics Tarea
Sin finalizar: Submit Get the Remaining Statistics
Create HTML Table to Display the Statistics 

Add the HTML elements for the table to display your statistics.

1. Write JavaScript code to loop through your statistics object and construct the each table's rows.  You will be creating three tables of calculated data from the same statistics object for each Senate page:

Attendance Page: Senate at a Glance Table, Most Engaged Table, Least Engaged Table
Party Loyalty Page: Senate at a Glance Table, Most Loyal Table, Least Loyal Table
TIP: For review- refer to the previous task on constructing HTML tables from JSON data.

2. Once you have the code in place for all the tables, call the appropriate functions in the HTML to create each table as specified in Step 1.  Remove any remaining calls to the javascript from previous steps.

3. Refer to the wireframes and style the first page with bootstrap.  Repeat with the second page.

SUBMIT: Submit the Senate HTML files and javascrpt file for mentor review.
Submit HTML Table to Display the Statistics Tarea
Sin finalizar: Submit HTML Table to Display the Statistics 
Repeat for House data

Do the same process for the House data.

1. Repeat steps 1-6, starting with creating HTML pages for your House statistics. 

SUBMIT: When your House statistics calculations are working and the results are displayed in tables on both pages, submit your project with statistics.

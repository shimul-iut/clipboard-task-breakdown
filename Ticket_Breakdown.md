# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

##Feature Request:

**Use custom Agent Id instead of database Id for report genaration**

##Task Description:

- Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

######################################################################
## Subtasks:
######################################################################

**1. Change Database schema, migrations and relationships**

## Subtask Description:
- Add a new column in the Agents table named "custom_agent_id" which would be a unique field (system generated) and type varchar
- Fix the foreign key constraints for Shifts table (and possibly in the Facilities table) and make the new column as foreign key.
- Run migrations with some dummy data (use faker library) to test the migration and the relationships.

## Estimated duration:
- 1 day

## Blocks:
 - Taks 4

######################################################################

**2. Update the Add/Edit Agent Information Forms (Front End)**

## Subtask Description:

- The newly created custom_agent_id column should be populated with the appropriate value from the UI. All three forms should have a new field called "Agent ID", which would be dynamically populated with unique values via API calls. This form field will be non-editable.

# Estimated duration: 
- 0.5 day

######################################################################

**3.  Update the Add/Edit Agent Information in the Database (Back End)**

## Subtask Description:

- Change the Add/Edit Agent Information form submission methods to facilicate the new field. 
- Run Back End validation for the unique field.
- Change relevant jobs/events that trigger agains these form changes and make them based on the new agent id field.
- Crete unit tests for the change.

# Estimated duration:
- 1 day

# Blocked By:
- Task 4

######################################################################

**4. Provide a method to auto-genarate unique Agent IDs (Back End)**

- A method is required to generate a unique Agent ID that will be checked for validity against the databse Agent table. This method will be tied against an api which will be called via a get request.
- Create couple of unit tests to check the validity of the method

## Estimated duration:
- 0.5 day

# Blocked By:
- Task 1

######################################################################

**5. Make relavant refactoring in the reporting module to facilicate the usage of the new agent id field**

## Subtask Description:

- Identify the relevant methods responsible for reporting that are required to be refactored.
- Adjust the queries (if ORM is used, change the Model definition)
- Run unit tests
- Test on the dev system pre-deployment (Regression test)

## Estimated duration:
- 2 days

# Blocked By:
- Task 3

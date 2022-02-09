`Jira SoftER` is basically a very light version of <a href="https://www.atlassian.com/software/jira">Jira</a>. I thought this would be the best project to demonstrate all the things I learned through full stack development journey and use all techniques most efficiently with the experience I had till now. I tried to remake the agile development part of Jira. You can create account then create a team or get added to other teams in order to assign issues to others or get assigned yourself. Project lead can create or modify issues and assign them to team members. There is backlog for all issues, sprint for creating a sprint with some issues and roadmap for tracking all the epics and sub-issues under them including the completion percentage.
### Features-
In homepage there are projects you work on and the issues you've been assigned. These things are under a project- 
<li> Backlog: A place for all the issues related to this project, and to create and start sprints. </li>

<li> Boards: If there is an active sprint, the issues under that sprint will be shown here in different boards based on their status. Number of remaining days to complete the sprint will be shown and option to complete it. After completing a sprint, finished issues are deleted and unfinished ones are moved to backlog. </li>

<li> Roadmap: It contains the epic issues of a project. All the other issues under those epics are listed below. New issues under them can be added or new epic can be created directly from there. A progress bar based on number of issues that are marked as 'done' is also there under each epic. </li>

<li> Issues can be epic, story, task or bug. These can be created and modified by only project lead and the issue status can be changed by assignee as well. Users related to the same project can comment on issues as well. Trying to bring the drag and drop feature of changing issue status and stuff like that in original Jira in next version, as that seemed complicated right now. </li>

<li> Sprint can be started after providing a start and end date. Remaining days to the end date from current date is shown on sprints page (boards).</li>

<li> A team has to be created to add assignees to issues. The assignee list for any project shows the users that are in a team where the team lead is also the project lead. In teams, people can send message which is basically commenting. I'd like to use sockets and implement actual live chatting later on.

</li>
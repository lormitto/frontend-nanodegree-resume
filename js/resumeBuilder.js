/*
This is empty on purpose! Your code to build the resume will go here.
 */
 $("#main").append(["Adamek Jakistam"]);
 var formattedName = HTMLheaderName.replace("%data%", "Adam Nowicki");
 var formattedRole = HTMLheaderRole.replace("%data%", "R&D Manager");

 $("#header").prepend(formattedName);
 $("#header").prepend(formattedRole);

 var skills = ["awesomeness", "programming"];

$("#main").append(skills.length);
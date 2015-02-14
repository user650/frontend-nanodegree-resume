// Scott Stubbs Resume
// Nano Degree class - Proejct #2
// Feb 2, 2015


//bio information (this is a non array object)
var bio = {
	"name": "Scott Stubbs",
	"role": "Sr. Technical Architect",
	"contacts": {
		"mobile": "951-314-5555",
		"email": "scstubbs@pacbell.net",
		"github": "scstubbs@pacbell.net",
		"twitter": "@scstubbs",
		"location": "500 North Point Parkway, Alpharetta, GA 30005"
	},
	"WelcomeMessage": "Before you criticize others, you should walk a mile in their shoes.  That way when you criticize them, you are a mile away from them and have their shoes. - Jack Handey",
	"skills": ["JAVA Script", "HTML 5", "CSS",  "C++", "RPG/LE"],
	"bioPic": "images/scott.jpg",
   	display : function () {
   		var formattedHeader = HTMLheaderName.replace("%data%",bio.name);
   		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        var formattedGit = HTMLgithub.replace("%data%",bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.WelcomeMessage);
		var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    	$("#header").prepend(formattedRole);
    	$("#header").prepend(formattedHeader);
    	$("#topContacts").append(formattedMobile + formattedEmail + formattedGit + formattedTwitter + formattedLocation);
    	$("#footerContacts").append(formattedMobile + formattedEmail + formattedGit + formattedTwitter + formattedLocation);
 	  	$("#header").append(formattedbioPic);
    	$("#header").append(formattedWelcomeMessage);
    	$("#header").append(HTMLskillsStart);
    	for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#header").append(formattedSkill);
		}
	}
};
bio.display();



//work information
var work = {
	"jobs":	[
		{
		  "employer": "AT&T",
		  "title": "Sr. Technical Director",
		  "location": "900 North Point Parkway, Alpharetta, GA 30005",
		  "dates": "July 1998 - Current",
		  "description":"Led multi milion dollar capital projects from many different perspectives as a Sr. Programmer Analyst, a Project Manager and a Deployment / Release Manager perpective.  As a Sr. Technical Director in Service Delivery, I had overall resposbility for all prodcution changes including major upgrades, project deployments, critical database and application maintenance and daily code fixes"
		},
		{
		  "employer": "Fox Sports Net",
		  "title": "Sr. Programmer / Analyst",
		  "location": "12900 Park Plaza Drive, Cerritos, CA 90703",
		  "dates": "Aug 1997 - July 1998",
		  "description": "Lead programmer during JDEdwards HR module installation for For Sports Net and all affiliates."
		 },
		{
		  "employer": "IT Corporation",
		  "title": "Programmer / Analyst",
		  "location": "23441 Madison St, Torrance, CA 90505",
		  "dates": "1993 - July 1998",
		  "description": "Worked as testing lead and later programming analyst for the implementation of a new JDEdwards installation."
		 }
	],
	display : function () {
	for (job1 in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job1].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job1].title);
		var formattedEmployerTitle =formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLoc = HTMLworkLocation.replace("%data%",work.jobs[job1].location);
		$(".location-text:last").append(formattedLoc);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job1].dates);
		$(".date-text:last").append(formattedDates);
		var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job1].description);
		$(".work-entry:last").append(formattedDesc);
		}
	}
};
work.display();

// project information using the bracket format
var projects = {
	"projects":[
	  {
		"title":"Oracle EBS R12 Upgrade",
		"dates":"2014 Feb",
		"description":"Release manager for AT&T's Oracle EBS 11i to R12 upgrade",
	  	"images":["images/OracleR12.jpg", "images/OracleR12Upgrade.jpg"]
	  },
	  {
		"title":"iPhone Project Lanuch",
		"dates":"2014 Jul to Oct",
		"description":"Release and Performance Manager for AT&T's Supply Chain Systems product launch of the Apple iPhone 6/6+.",
		"images":["images/iphone6.jpg", "images/iphone6white.jpg"]
	  }
	 ],
   	 display : function () {
		for (p in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[p].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[p].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDesc = HTMLprojectDescription.replace("%data%",projects.projects[p].description);
			$(".project-entry:last").append(formattedProjectDesc);
			var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[p].images[0]);
			$(".project-entry:last").append(formattedProjectImage);
			var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[p].images[1]);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
}
projects.display();

//Education using the JSON notation
var education = { 
	"schools": [
		{
			"name": "El Camino",
			"location": "Manhattan Beach, CA",
			"degree": "General Education",
			"majors": ["General Education", "Computer Science"],
			"dates": "1989 - 1992",
			"url" : "http://www.elcamino.edu/"
		},
		{
			"name": "Cal State Dominguez Hills",
			"location": "Carson, CA",
			"degree": "BS, Computer Science",
			"majors": ["Computer Science", "Programming Languages"],
			"dates": "May 1993 - March 1995",
			"url" : "http://www.csudh.edu/"
		}
	],
    "online_course": [
        {
	    	"title": "High Performance Computer Architecture",
	    	"school": "Georgia Tech",
	    	"date": "Aug 2014 - Dec 2014",
	    	"URL": "https://www.udacity.com/wiki/hpca/Glossary/Glossary"
        },
        {
	    	"title": "Front-End Web Developer - Nano Degree",
	    	"school": "Udacity",
	    	"date": "Dec 2014 - Apr 2015",
	    	"URL": "http://www.udacity.com/course/ud804"
        }
    ],
   	display : function () {
   	    $("#education").append(HTMLschoolStart);
		for (i in education.schools) {
			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
			$(".education-entry:last").append(formattedSchoolName);
			var formattedSchoolDegree= HTMLschoolDegree.replace("%data%",education.schools[i].degree);
			$(".education-entry:last").append(formattedSchoolDegree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedSchoolLoc = HTMLschoolLocation.replace("%data%",education.schools[i].location);
			$(".education-entry:last").append(formattedSchoolLoc);
			for (j in education.schools[i].majors) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
				$(".education-entry:last").append(formattedSchoolMajor);
			}
		};
  		$(".education-entry:last").append(HTMLonlineClasses);
		for (i in education.online_course) {
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.online_course[i].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%",education.online_course[i].school);
			var formattedDates = HTMLonlineDates.replace("%data%",education.online_course[i].date);
			var formattedURL = HTMLonlineURL.replace("%data%",education.online_course[i].URL);
			$(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedURL);
		}
	}
};
education.display();

//======================
// Add the GoogleMaps API
$("#mapDiv").append(googleMap);

//=====================
//Location Click information
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
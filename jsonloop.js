//question 1
// for the given JSON iterate over all for loops
//for-in loop
var resume = {
    "name": "hitesh k",
    "label": "java developer",
    "email": "selvamurugaiah100@gmail.com",
    "phone":"+91-9370119221",
    "SUMMARY": ["Aiming to be a unique part of an organization through my updated knowledge, skills in Design & Analysis",
"and do the smart work for the consistent growth of the company."],
    "LOCATION": {
      "address": "abcd, abcd, abcd",
      "postalCode": "421001",
      "city": "mumbai",
      "District":"mumbai",
      "State":"maharashtra",
     
    },
  
  "PROFILE SNAPSHOT ": {
    "A goal-oriented and dedicated professional with over three years of commendable success in":["Product Design & Development","Effective Analysis","Business Excellence","Reporting & Documentation","Team Management" ]
    
  },
  "EDUCATION": {
    "institution": "mumbai university",
    "college":"mumbai university",
    "Degree": "ms IT",
    "Duration": "2020- 2022",
    "cgpa": "8.4",
    
  },
  
  "CERTIFICATES": {
    "NCC": "India level",
    "date": "june 2019",
    "cricket":"in state"
  },
  "SKILLS": {
    "name": "Java development ",
    
    ]
  },
  "LANGUAGES": {
    "language": "Hindi, sindhi, marathi , English",
  },
  "INTEREST": {
    "name": "Watching movie",
    "keywords": 
      "thriller",
    
  },
  "REFERENCE": {
    "name": "hitesh",
    "reference": "hitesh",
    "phone":"+91-9370119221",
  },
};
for(var i in resume){
    console.log(i,resume[i]);
}



//2nd loop
//for loop iteration
var resume = [{
  "name": "hitesh k",
  "label": "java developer",
  "email": "htesh97@gmail.com",
  "phone":"+91-9370119221",
  "SUMMARY": ["Aiming to be a unique part of an organization through my updated knowledge, skills in Design & Analysis",
"and do the smart work for the consistent growth of the company."],
  "LOCATION": {
    "address": "mumbai abc",
    "postalCode": "421001",
    "city": "mumbai",
    "District":"mumbai",
    "State":"maharashtra",
   
  },

"PROFILE SNAPSHOT ": {
  "A goal-oriented and dedicated professional with over three years of commendable success in":["Product Design & Development","Effective Analysis","Business Excellence","Reporting & Documentation","Team Management" ]
  
},
"EDUCATION": {
  "institution": "Anna University",
  "college":"Dr.Sivanthi Aditanar college of Engineering",
  "Degree": "BE",
  "Duration": "2015-2019",
  "cgpa": "7.8",
  
},

"CERTIFICATES": {
  "ncc": "in state level",
  "date": "10-7-2019",
  "cricket":"in zonal level"
},
"SKILLS": {
  "name": "Drafting Software and Modelling software ",
  "keywords":[
    "Autodesk Inventor,",
    "Catia V5,",
    "Ansys work bench,"
  ]
},
"LANGUAGES": {
  "language": "Hindi, sindhi, marathi , English",
},
"INTEREST": {
  "name": "Watching movie",
  "keywords": 
    "triller",
  
},
"REFERENCE": {
  "name": "Hitesh",
  "reference": "hitesh",
  "phone":"+91-9370119221",
},
}];
for(var i = 0; i<resume.length; i++){
  console.log(resume[i]);
}


// 3.for of -loop iteration

const num = [10,20,30,40,50];

for(var newnum of num){
  console.log(newnum);
}
//output
//10
//20
//30
//40
//50

//4. for each-loop iteration

let str = [1,2,3,4,5];
str.forEach(element => {
  console.log(element)
});
//output
//1
//2
//3
//4
//5


//question 2
//2.create your own resume for JSON format
var resume = {
  "name": "Hitesh",
  "label": "java engineer",
  "email": "htesh97@gmail.com",
  "phone":"+91-9370119221",
  "SUMMARY": ["Aiming to be a unique part of an organization through my updated knowledge, skills in Design & Analysis",
"and do the smart work for the consistent growth of the company."],
  "LOCATION": {
    "address": "mumbai, abc, abc",
    "postalCode": "421001",
    "city": "mumbai",
    "District":"mumbai",
    "State":"maharashtra",
   
  },

"PROFILE SNAPSHOT ": {
  "A goal-oriented and dedicated professional with over three years of commendable success in":["Product Design & Development","Effective Analysis","Business Excellence","Reporting & Documentation","Team Management" ]
  
},
"EDUCATION": {
  "institution": "mumbai University",
  "college":"mumbai unniv",
  "Degree": "ms IT",
  "Duration": "2020-2022",
  "cgpa": "8.4",
  
},

"CERTIFICATES": {
  "ncc": "in state level",
  "date": "10-7-2019",
  "cricket":"in zonal level"
},

  
"LANGUAGES": {
  "language": "hindi, sindhi, marathi , English",
},
"INTEREST": {
  "name": "Watching movie",
  "keywords": 
    "thriller",
  
},
"REFERENCE": {
  "name": "hitesh",
  "reference": "hitesh",
  "phone":"+91-9370119221",
},
};
console.log(resume);

//output
/*
{
name: 'hitesh ',
label: 'javadeveloper',
email: 'htesh97@gmail.com',
phone: '+91-9370119221',
SUMMARY: [
  'Aiming to be a unique part of an organization through my updated knowledge, skills in Design & Analysis',
  'and do the smart work for the consistent growth of the company.'
],
LOCATION: {
  address: 'mumbai, abc, abc',
  postalCode: '421001',
  city: 'numbai',
  District: 'mumbai',
  State: 'maharashtra'
},
'PROFILE SNAPSHOT ': {
  'A goal-oriented and dedicated professional with over three years of commendable success in': [
    'Product Design & Development',
    'Effective Analysis',
    'Business Excellence',
    'Reporting & Documentation',
    'Team Management'
  ]
},
EDUCATION: {
  institution: 'mumbai University',
  college: mumbai university,
  Degree: 'ms IT',
  Duration: '2020-2022',
  cgpa: '8.4'
},

CERTIFICATES: {
  ncc: 'in state level',
  date: '10-7-2019',
  cricket: 'in zonal level'
},
SKILLS: {
  name: 'Drafting Software and Modelling software ',
  keywords: [ 'Autodesk Inventor,', 'Catia V5,', 'Ansys work bench,' ]
},
LANGUAGES: { language: ' hindi, sindhi, marathi , English' },
INTEREST: { name: 'Watching movie', keywords: 'thriller' },
REFERENCE: [
  {
    name: 'hitesh k',
    reference: 'hitesh',
    phone: '+91-7709791670'
  }
]
}
*/

// alert("loading");

function addNewWEField()
{
     // console.log("Adding New field");

     let newNode=document.createElement('textarea');
     newNode.classList.add('form-control');
     newNode.classList.add('weField');
     newNode.classList.add('mt-2');
     newNode.setAttribute("rows",5);
     newNode.setAttribute('placeholder')

     let weOb = document.getElementById("we");
     let weAddButtonOb = document.getElementById("weAddButton");

     weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement('textarea');
     newNode.classList.add('form-control');
     newNode.classList.add('aqField');
     newNode.classList.add('mt-2');
     newNode.setAttribute("rows",5);
     newNode.setAttribute('placeholder')

     let aqOb = document.getElementById("aq");
     let aqAddButtonOb = document.getElementById("aqAddButton");

     aqOb.insertBefore(newNode, aqAddButtonOb);
}

document.getElementById('form-group').addEventListener('btn btn-primary btn-lg', function(event) {
     event.preventDefault(); // Prevent the default form submission

     // Get form data
     const name = document.getElementById('name').value;
     const contact = document.getElementById('contact').value;
     const address = document.getElementById('address').value;
     const email = document.getElementById('email').value;
     const workexperience = document.getElementById('workexperience').value;
     const objective = document.getElementById('objective').value;
     const acdemicqualification = document.getElementById('acdemicqualification').value;


     // Construct the resume output
     const resumeOutput = `

         <h1>ResumeGenerator</h1>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Contact:</strong> ${contact}</p>
         <p><strong>Address:</strong> ${address}</p>

         <p><strong>Facebook:</strong> ${facebook}</p>
         <p><strong>Instagram:</strong> ${instagram}</p>
         <p><strong>LinkedIn:</strong> ${linkedin}</p>

         <p><strong>WorkExperience:</strong> ${workexperience}</p>
         <p><strong>Objective:</strong> ${objective}</p>
         <p><strong>AcademicQualification:</strong> ${academicqualification}</p>

         `;

     document.getElementById('resumeOutput').innerHTML = resumeOutput;
 }); 
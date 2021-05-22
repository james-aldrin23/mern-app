
var body=  document.querySelector('.tbody');
var tbody = "";
var submit = document.querySelector('#submit');



window.addEventListener('load', ()=>{
    getStudent();
})

//submit
submit.addEventListener('click', ()=>{
    addStudent();
})




//call back function to get data
function getStudent(){

    fetch('http://localhost:5000/student/', {mode:"cors"})
    .then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        
        console.log(data);

        data.forEach(element => {

            console.log(element.fullname);
            console.log(element._id);

            //<input type="hidden" name="id" value="${element._id}"/>

            tbody += `<tr>
                        <td>${element._id}</td>
                        <td>${element.fullname}</td>
                        <td>${element.email}</td>
                        <td>${element.address}</td>
                        <td>                   
                           <button class ='btn btn-success text-white' onClick = updateStudent(${element._id})> Update </a>
                        </td>
                        <td >
                            <button class ='btn btn-danger text-white deletebtn' onClick = "deleteStudent('${element._id}')"> Delete </button>
                        </td>
                    </tr>`;
        });
           
        body.innerHTML = tbody;
          

    }).catch(err =>{
        console.log(err);
    })   
}


//callback function to delete data
function deleteStudent(id){
   // alert(id);
   
    let formData = { id };

    fetch('http://localhost:5000/student/'+id, {
        
        
        method : "DELETE",
        body:JSON.stringify(formData),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(err =>{
        console.log(err);
    })
}


//callback function to delete data
function updateStudent(id){

     
     fetch('http://localhost:5000/student/', {              
         method : "POST"
     }).then(err =>{
         console.log(err);
     })
 }



function addStudent(){

   let fullname = document.querySelector("#fullname").value;
   let email = document.querySelector("#email").value;
   let address = document.querySelector("#address").value;
   let formData = {
       fullname,
       email,
       address
   }

   fetch('http://localhost:5000/student/add',{

       method : "POST",
       body :JSON.stringify(formData),
       headers:{
           'Content-Type' : 'application/json'
       }
    
    }).then(err =>{
        console.log(err);
    })

}

function updateStudent(id){
    document.querySelector("#fullname").value = data[0].fullname,
    document.querySelector("#email").value;
    document.querySelector("#address").value;
}



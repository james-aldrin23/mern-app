
var body=  document.querySelector('.tbody');
var tbody = "";
var submit = document.querySelector('#submit');
var updatebtn = document.querySelector('#updatebtn');
var deletebtn = document.querySelector('#deletebtn');



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
                           <button class ='btn btn-success text-white' onClick = updateStudent('${element._id}')> EDIT</button>
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





    fetch(`http://localhost:5000/student/${id}`,{mode:"cors"})
    .then(response => {
        console.log(response);
        return response.json();
    }).then(data => {


        
        console.log(data);
        document.querySelector("#fullname").value = data.fullname;
        document.querySelector("#email").value = data.email;
        document.querySelector("#address").value = data.address;
        document.querySelector("#ID").value = data._id;
        
        

    }).catch(err =>{
        console.log(err);
    })   
}


updatebtn.addEventListener('click', ()=>{



    let fullname = document.querySelector("#fullname").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let id = document.querySelector("#ID").value;
    let formData = {
        fullname,
        email,
        address,
        id
    }
 
    fetch(`http://localhost:5000/student/update/${id}`,{
 
        method : "POST",
        body :JSON.stringify(formData),
        headers:{
            'Content-Type' : 'application/json'
        }
     
     }).then(err =>{
         console.log(err);
     })
 
})

deletebtn.addEventListener('click', ()=>{



    let fullname = document.querySelector("#fullname").value;
    let email = document.querySelector("#email").value;
    let address = document.querySelector("#address").value;
    let id = document.querySelector("#ID").value;
    let formData = {
        fullname,
        email,
        address,
        id
    }
 
    fetch(`http://localhost:5000/student/${id}`,{
 
        method : "DELETE",
        body :JSON.stringify(formData),
        headers:{
            'Content-Type' : 'application/json'
        }
     
     }).then(err =>{
         console.log(err);
     })
 
})




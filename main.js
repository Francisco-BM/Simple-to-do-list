const input= document.querySelector("input");
const addBtn=document.querySelector(".btn-add");
const ul=document.querySelector("ul");
const empty=document.querySelector(".empty");


addBtn.addEventListener("click", (e)=>{

e.preventDefault();

const text = input.value;
 // guarda el valor que este dentro de l input

if(text !==""){
    
    
const li= document.createElement("li");
li.appendChild(addDeleteBtn())
const p=document.createElement("p");
// le indeicamos al js que cree elementos li y p 

input.value="";
empty.style.display="none";


p.textContent=text;

li.appendChild(p);
ul.appendChild(li);
/*le indicamos que los elementos deben estar
 detro del elemento marcado con anterioridad el del "." */

}


});
/*----------------------------------------------------------------------------------------------------------------------------- */


function addDeleteBtn(){
  
    const deleteBtn=document.createElement('button');
    
    deleteBtn.textContent="x";
    deleteBtn.className="btn-delete";
 

    deleteBtn.addEventListener("click",(e)=>{
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items=querySelectorAll('li');
    
    if (items.length === 0) {
        empty.style.display = "block";
      }

    });
    return deleteBtn
}
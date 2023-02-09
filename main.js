let form=document.getElementById("addForm")
let itemList=document.getElementById("items")
let filter=document.getElementById("filter")


form.addEventListener("submit",addTask)
itemList.addEventListener("click",removeTask)
filter.addEventListener("keyup",searchTask)


function addTask(e){
    
        e.preventDefault()
        //fetching data
        let  task=document.getElementById("task").value 
        let time=document.getElementById("time").value
        let dates=document.getElementById("dates").value
       
        // creating new tags and adding text to them
       let li= document.createElement("li")
       li.appendChild(document.createTextNode(task))
       let btn=document.createElement("button")
       btn.appendChild(document.createTextNode("Remove"))
       let dateLabel=document.createElement("label")
       dateLabel.appendChild(document.createTextNode(dates))
       let timeLable=document.createElement("label")
       timeLable.appendChild(document.createTextNode(time))
       
       //adding class names
       btn.className="btn btn-danger btn-sm float-right delete"
       dateLabel.className="mar-right btn btn-primary btn-sm float-right"
       timeLable.className="mar-right btn btn-primary btn-sm float-right"
       
       //appending child
       li.appendChild(btn)
       li.appendChild(timeLable)
       li.appendChild(dateLabel)
       li.className="list-group-item"    
       itemList.appendChild(li)   
       document.getElementById("task").value=''  
}

function removeTask(e){
    if(e.target.classList.contains("delete")){
        if(confirm("ARE YOU SURE")){
             itemList.removeChild(e.target.parentElement)
        }
    }
}

function searchTask(e){
let value=e.target.value.toLowerCase()
let li=document.getElementsByTagName("li")
Array.from(li).forEach(function(item){
   if(item.firstChild.textContent.toLowerCase().indexOf(value)!==-1){
    item.style.display="block"

   }else{
    item.style.display="none"

   }

})

}
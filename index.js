// alert("Welcome to the library");

const myLibrary = [];

class Book {

constructor(id,title,author,pages,read,note){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.note = note;
}
}
const button = document.getElementById("btn");

button.addEventListener("click",(event,titles,authors,pages,reads,notes)=>{
    event.preventDefault();
    const id = crypto.randomUUID();
    let book1 = id;
     titles = document.getElementById("title");
     authors = document.getElementById("author");
     pages  =document.getElementById("pages");
     console.log(pages.value)
     reads = document.getElementsByName("read");
     console.log(reads);
    let selectedValue 
    for(let i of reads){
        if(i.checked){
            selectedValue = i.id;
            //  console.log(selectedValue);
            break;
        }
    }

    notes = document.getElementById("note")
           console.log(notes.value);
    if(titles.value == "" || authors.value == "" || pages.value == "" || notes.value ==""){
        alert("fill all the details");
    }
    else{
     book1 = new Book(id,titles.value,authors.value,pages.value,selectedValue,notes.value);
    myLibrary.push(book1);
    console.log(myLibrary)

        pages.value = null;
        notes.value = null;
        titles.value = null;
        authors.value = null;

    const table = document.getElementById("table");
    const row = document.createElement("tr");
    const valuesArr = Object.values(book1);
    console.log(valuesArr);

    //Object.values(i.length-1));
    // console.log(valuesArr)

    const dataWithIds = Object.keys(book1);
    console.log(dataWithIds)

for(let i=0; i<=valuesArr.length;i++){
    const readBtn = document.createElement("button");
     readBtn.innerText="change";
     const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
     
    const data = document.createElement("td");
    table.appendChild(row);
    row.appendChild(data);
    data.innerText = valuesArr[i];
    
    if(data.innerText == "reading" || data.innerText 
    == "complete" || data.innerText == "not yet"){
       
        readBtn.textContent = data.textContent;
         data.textContent="";
        data.appendChild(readBtn);
        
    }
       if(i===valuesArr.length){
         data.textContent = ""
            data.appendChild(delBtn); 
     }

 delBtn.addEventListener("click",(event)=>{
    
   if(event.target.nodeName === "BUTTON" && event .target.textContent === "Delete"){
    let row = event.target.closest("tr");
    console.log(row);
        
        if(row){
         row.remove();
        }
    }   
    });

    readBtn.addEventListener("click",(event)=>{
        const change = event.target.closest("button");
        // console.log(change.textContent)
         if(change.textContent == "complete"){
            change.textContent = "not yet";
         } else if(change.textContent == "not yet"){
            change.textContent = "reading"
         }else if(change.textContent =="reading"){
            change.textContent = "complete";
         }
    })
}
}
})



    
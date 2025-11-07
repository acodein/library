// alert("Welcome to the library");

const myLibrary = [];

function Book(id,title,author,pages,read,note){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.note = note;
}

const button = document.getElementById("btn");
 const delBtn = document.createElement("button");
const readBtn = document.createElement("button");


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
             console.log(selectedValue);
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

    //Object.values(i.length-1));
    console.log(valuesArr)


for(let i=0; i<= valuesArr.length;i++){
    valuesArr[6]=delBtn;
    console.log(i);
    const data = document.createElement("td");
    table.appendChild(row);
    row.appendChild(data);
    data.innerText = valuesArr[i];

    if(i === 6){
        data.appendChild(delBtn);
        delBtn.textContent = "Delete";
    }
}

    // delBtn.id = `${id}`;
    // return myLibrary;
 
}
} )

delBtn.addEventListener("click",(event)=>{
    
   if(event.target.nodeName === "BUTTON" && event .target.textContent === "Delete"){

    let row = event.target.closest("tr");
    console.log(row);
    if(row){
        row.remove();
    }
   }   
}
)

readBtn.addEventListener("click",()=>{
    let data = document.getElementsByTagName("td");

    for(let i=7; i<data.length;i++){
      if(data[i].textContent === "not-yet"){
        data[i].innerText = "reading";
      }
    }  
    });
    
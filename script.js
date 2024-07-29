function printpdf(){
    var content = document.getElementById("resume");

    let everyButton = document.querySelectorAll("#print button");
    everyButton.forEach(button => {
        button.classList.add("none");
    });

    let everyInputCheckbox = document.querySelectorAll(".input-checkbox");
    everyInputCheckbox.forEach(input =>{
        input.classList.add("none");
    });

    everyButton.forEach(button =>{
        button.classList.remove("none");
    })

    everyInputCheckbox.forEach(input =>{
        input.classList.remove("none");
    })

    html2pdf(content, {
        html2canvas: {scale:1, logging:true, dpi:500}
    });
}  

function addedu(){
        const head = document.createElement('div');
        document.getElementById("education").appendChild(head);
        head.innerHTML =('<span id="edu"><input type="checkbox" class="input-checkbox" name="educat" id="diffedu"><i class="bi bi-caret-right-fill"></i><span contenteditable="true"><b>YOUR DEGREE</b></span><br><span class="content" contenteditable="true">Institute Name</span>-<span contenteditable="true">Passing Year</span></span><br><br>');
        saveresume();
};

function remedu(event){
    let val = 0;
    let empty = true;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if(array.length ===0){
        alert("No instances are present to be deleted!");
    }
    else{
        console.log(array);
        array.forEach(element =>{
            if(element.checked === true){
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })

        if(val ===0) alert("Please select the checkboxes of the instances you want to delete!");
    }
    saveresume();
}


function addskills(){
    const head = document.createElement('div');
    document.getElementById("skills").appendChild(head);
    head.innerHTML = ('<div class="achblock"><span id="ach"><input type="checkbox" class="input-checkbox" name="achieve" id="diffach"><i class="bi bi-caret-right-fill"></i><span class="content" contenteditable="true">Enter your achievement here</span></span></div>')
    saveresume();

}

function remskills(event){
        let val = 0;
        const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
        const array = Array.from(allInputCheckboxes);
        if(array.length ===0){
            alert("No instances are present to be deleted!");
        }
        else{
            console.log(array);
            array.forEach(element =>{
                if(element.checked === true){
                    val = 1;
                    element.parentElement.parentElement.remove();
                }
            })
    
            if(val ===0) alert("Please select the checkboxes of the instances you want to delete!");
        }
        saveresume();
}



function addachieve(){
    const head = document.createElement('div');
    document.getElementById("achievements").appendChild(head);
    head.innerHTML = ('<span id="ach"><input type="checkbox" class="input-checkbox" name="achieve" id="diffach"><i class="bi bi-caret-right-fill"></i><span class="content" contenteditable="true">Enter your achievement here</span></span><br><br>')
    saveresume();

}

function remachieve(event){
        let val = 0;
        const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
        const array = Array.from(allInputCheckboxes);
        if(array.length ===0){
            alert("No instances are present to be deleted!");
        }
        else{
            console.log(array);
            array.forEach(element =>{
                if(element.checked === true){
                    val = 1;
                    element.parentElement.parentElement.remove();
                }
            })
    
            if(val ===0) alert("Please select the checkboxes of the instances you want to delete!");
        }
        saveresume();
    }


function addlang(){
    const head = document.createElement('div');
    document.getElementById("languages").appendChild(head);
    head.innerHTML = ('<div class="langblock"><span id="lang"><input type="checkbox" class="input-checkbox" name="language" id="difflang"><i class="bi bi-caret-right-fill"></i><span class="content" contenteditable="true">Enter your languages here</span></span></div>')
    saveresume();

}

function remlang(event){
        let val = 0;
        const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
        const array = Array.from(allInputCheckboxes);
        if(array.length ===0){
            alert("No instances are present to be deleted!");
        }
        else{
            console.log(array);
            array.forEach(element =>{
                if(element.checked === true){
                    val = 1;
                    element.parentElement.parentElement.remove();
                }
            })
    
            if(val ===0) alert("Please select the checkboxes of the instances you want to delete!");
        }
        saveresume();
    }


function addint(){
    const head = document.createElement('div');
    document.getElementById("interests").appendChild(head);
    head.innerHTML = ('<div class="intblock"><span id="int"><input type="checkbox" class="input-checkbox" name="interest" id="diffint"><i class="bi bi-caret-right-fill"></i><span class="content" contenteditable="true">Enter your interest here</span></span></div>')
    saveresume();

}

function remint(event){
        let val = 0;
        const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
        const array = Array.from(allInputCheckboxes);
        if(array.length === 0){
            alert("No instances are present to be deleted!");
        }
        else{
            console.log(array);
            array.forEach(element =>{
                if(element.checked === true){
                    val = 1;
                    element.parentElement.parentElement.remove();
                }
            })
    
            if(val ===0) alert("Please select the checkboxes of the instances you want to delete!");
        }
        saveresume();
    }
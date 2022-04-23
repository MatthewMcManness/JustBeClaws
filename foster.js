const info = [
    "Name:",
    "ID:",
    "Level:",
    "Birth Date:",
    "Address:"
];
const data = ['Mathew McManess','3','18'];

let imageSource = "foster-placeholder.jpg";

let imageIndex = 0;
//#region  old code
// //initialize page
// const initializePage = function () {
//     let labels = document.getElementById('info-div').getElementsByTagName('label');
//     let forms = document.getElementById('info-div').getElementsByTagName('input');
//     for(let i = 0; i < labels.length; i++) {
//         labels[i].innerText = info[i];
//         forms[i].value = info[i].toString().slice(0,-1);
//         forms[i].readOnly = true;
//         forms[i].style.color = "black";
//     }

//     //set image source
//     document.getElementById('animal-image').src = imageSource;

//     //clear image selection
//     clearSelection();

//     //get animals
//     printAnimals();

//     //add animal subtitle
    
// }

// //editbutton handler
// const editButtonHandler = function () {
//     if(document.getElementById('edit-btn').innerText == "Edit") editFosterInfo();
//     else submitEdits();
// }

// //edit foster
// const editFosterInfo = function() {
//     //loop through each form allow them to be editable
//     let forms = document.getElementsByTagName('input');
//     for(let i = 0; i < forms.length; i++) {
//         forms[i].readOnly = false;
//     }

//     //update button text
//     document.getElementById('edit-btn').innerText = "Submit";

//     //show file select & clear
//     document.getElementById('image-uploader').style.display="inline-block";
//     document.getElementById('clear-btn').style.display='inline-block';
//     document.getElementById('clear-btn').style.float='right';
// }

// //submit edits
// const submitEdits = function() {
//     //loop through each form and save their text, make the forms readonly again
//     let forms = document.querySelectorAll('input');
//     for(let i = 0; i < forms.length; i++) {
//         //saveEdits();  //implemented later
//         forms[i].readOnly = true;
//     }

//     //update button inner text
//     document.getElementById('edit-btn').innerText = "Edit";

//     changeImage();

//     //hide file selector & clear
//     document.getElementById('image-uploader').style.display="none";
//     document.getElementById('clear-btn').style.display='none';
// }

// //change image
// const changeImage = function() {
//     let src = document.getElementById('image-uploader').value;
//     if(src != ''){ 
//         imageSource = src;
//     }
//     console.log(imageSource);
//     clearSelection();
// }

// //clearselection
// const clearSelection = function() {
//     document.getElementById('image-uploader').value = '';
// }

// //print animals
// const printAnimals = function() {

// }
//#endregion

//initializePage();


//initialize page
const updatePageData = () => {
    //query db for foster data
    
    document.getElementById('foster-name').innerText = `Name: ${data[0]}`;
    document.getElementById('foster-level').innerText = `Foster Level: ${data[1]}`;
    document.getElementById('num-fosters').innerText  = `Current Fosters: ${data[2]}`;
}


//modal funcitons
const onModal = (modalId) => {
    if(modalId == 'modal1') {
        //query available cats
        const availableCats = ['cat A', 'cat B', 'cat C'];
        availableCats.forEach((cat,id) => {
            const option = document.createElement('option');
            option.innerHTML = `value=${id}`;
            option.innerText = `${cat}, id: ${id}`;
            document.getElementById('assign-cat-select').appendChild(option);
        });
    } else {
        
    }
}



const assignCat = () => {
    //query db

    //placeholder result
    console.log(document.getElementById('assign-cat-select').value);
    data[2]++;
    updatePageData();
}

const changeFosterLevel = () => {
    //query db

    //placeholder result
    console.log(document.getElementById('foster-level-select').value);
    data[1] =     document.getElementById('foster-level-select').value;
    updatePageData();

}

updatePageData();
//event listeners
//document.getElementById('modal2-btn').addEventListener('click', changeFosterLevel());


const info = [
    "Litter Name:",
    "Animal Name:",
    "Birth Date:",
    "Intake Date:",
    "Adoption Date:",
    "Adopter Name:"
];

let imageSources = [
    "animals-main-img-placeholder.png",
    "cat-image-placeholder-2.jpg"
];

let imageIndex = 0;

//#region Edit & Submit
const editButtonHandler = function () {
    if(document.getElementById('edit-btn').innerText == "Edit") editAnimalInfo();
    else submitEdits();
}

const editAnimalInfo = function() {
    //loop through each form allow them to be editable
    let forms = document.getElementsByTagName('input');
    for(let i = 0; i < forms.length; i++) {
        forms[i].readOnly = false;
    }

    //get text area and description
    let textarea = document.getElementById('description-box');
    let description = document.getElementById('description');
    
    //update textarea text
    textarea.value = description.innerText;

    //hide description paragraph and show textarea
    description.style.display = 'none';
    textarea.style.display = 'block';
    textarea.setAttribute('rows',8);

    //update button text
    document.getElementById('edit-btn').innerText = "Submit";

    //show file select & clear
    document.getElementById('image-uploader').style.display="inline-block";
    document.getElementById('clear-btn').style.display='inline-block';
    document.getElementById('clear-btn').style.float='right';
}

const submitEdits = function() {
    //loop through each form and save their text, make the forms readonly again
    let forms = document.querySelectorAll('input');
    for(let i = 0; i < forms.length; i++) {
        //saveEdits();  //implemented later
        forms[i].readOnly = true;
    }

    //get textarea and description
    let textarea = document.getElementById('description-box');
    let description = document.getElementById('description');

    //update description text
    description.innerText = textarea.value;

    //hide textarea and show description
    textarea.style.display = 'none';
    description.style.display = 'block';

    //update button inner text
    document.getElementById('edit-btn').innerText = "Edit";

    //add image
    addImage();

    //hide file selector & clear
    document.getElementById('image-uploader').style.display="none";
    document.getElementById('clear-btn').style.display='none';
}
//#endregion

//#region show hide arrows
const showArrows = function() {
    console.log("called");
    document.getElementById('prev-image').style.opacity = 1;
    document.getElementById('next-image').style.opacity = 1;
}

const hideArrows = function() {
    document.getElementById('prev-image').style.opacity = 0;
    document.getElementById('next-image').style.opacity = 0;
}
//#endregion 


//NOTE: the add image function is not funcitonal yet, but more elements are added to 
//imageSources, so after adding an image you may click to scroll through the gallery 
//have to click multiple times. This is a known bug that will be addressed in project 4.
const changeImage = function(indexChange) {
    let newIndex = imageIndex + indexChange; //get new index

    if(newIndex < 0) newIndex = imageSources.length - 1; //loop to end of images
    if(newIndex >= imageSources.length) newIndex = 0;    //loop to beginnning of images

    imageIndex = newIndex;  //set image index
    
    //update image
    document.getElementByClass('.animal-image').src = imageSources[imageIndex];
    console.log(imageSources[imageIndex]);
}

const addImage = function() {
    let image = document.getElementById('image-uploader').value;
    if(image != '') imageSources.push(image);
    console.log(imageSources);
    clearSelection();
}

const clearSelection = function() {
    document.getElementById('image-uploader').value = '';
}


// DATABASE QUERIES
//get images
const getImageSrcs = () => {

};

//upload image
const uploadImageToDB = () => {

}

//assign to foster
const assignToFoster = () => {

}


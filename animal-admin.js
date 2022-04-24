let imageSources = [
    "animals-main-img-placeholder.png",
    "cat-image-placeholder-2.jpg"
];


let data = ['Ruby','1 year 9 months', 'Domestic Long Hair', 'none', 'TBD','Ruby is a wonderful cat that is looking for a forever home!'];

let imageIndex = 0;

//#region old code

//NOTE: the add image function is not funcitonal yet, but more elements are added to 
//imageSources, so after adding an image you may click to scroll through the gallery 
//have to click multiple times. This is a known bug that will be addressed in project 4.
const changeImage = function(indexChange) {
    let newIndex = imageIndex + indexChange; //get new index

    if(newIndex < 0) newIndex = imageSources.length - 1; //loop to end of images
    if(newIndex >= imageSources.length) newIndex = 0;    //loop to beginnning of images

    imageIndex = newIndex;  //set image index
    
    //update image
    document.getElementById('animal-image').src = imageSources[imageIndex];
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
//#endregion

//#region show hide arrows
const showArrows = function() {
    document.getElementById('prev-image').style.opacity = 1;
    document.getElementById('next-image').style.opacity = 1;
}

const hideArrows = function() {
    document.getElementById('prev-image').style.opacity = 0;
    document.getElementById('next-image').style.opacity = 0;
}
//#endregion 


//update page data
const updatePageData = () => {
    //query db for data

    //set 
    document.getElementById('cat-name').innerText = `Name: ${data[0]}`;
    document.getElementById('cat-age').innerText = `Age: ${data[1]}`;
    document.getElementById('cat-breed').innerText = `Breed: ${data[2]}`;
    document.getElementById('cat-adopter').innerText = `Adopter: ${data[3]}`;
    document.getElementById('cat-adoption-date').innerText = `Adoption Date: ${data[4]}`;
    document.getElementById('description').innerText = `${data[5]}`
}

// DATABASE QUERIES
//get images
const getImageSrcs = () => {

};

//upload image
const uploadImage = () => {
    //hide modal
    document.getElementById('modal3').style.display='none';


    //query db to add image


    console.log(document.getElementById('image submitted').value);

}

const updateDescription = () => {
    //hide modal
    document.getElementById('modal1').style.display='none';

    console.log('disc-update');
    //placeholder result
    console.log(document.getElementById('desc-text').value);
    data[5] =     document.getElementById('desc-text').value;
    updatePageData();
}

//assign to foster
const assignToFoster = () => {
    //hide modal
    document.getElementById('modal2').style.display='none';

    console.log('foster asigned');
    //placeholder result
    console.log(document.getElementById('foster-select').value);
    data[3] =     document.getElementById('foster-select').value;
    updatePageData();
}

//show hide modal
const showModal = (modalId) => {
    document.getElementById(modalId).style.display='block';

    //show data for modal
    if(modalId == 'modal1') { //description
        //create input for 
    } else if(modalId == 'modal4') { //assign foster
        //clear options
        document.querySelectorAll('option').forEach(e => e.remove());

        //query available fosters


        const availableFosters = ['Foster A', 'Foster B', 'Foster C'];


        availableFosters.forEach((Foster) => {
            const option = document.createElement('option');
            //option.innerHTML = `value=${id}`;
            option.innerText = `${Foster}`;
            document.getElementById('foster-select').appendChild(option);
        });
    } else if(modalId == 'modal3') { //add image
        
    }
}
const hideModal = (modalId) => {
    document.getElementById(modalId).style.display='none';
}

updatePageData();
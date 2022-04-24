//query images

let imageSources = [
    "animals-main-img-placeholder.png",
    "jack.jpg"
];

let data = ['Ruby','1 year 9 months', 'Domestic Long Hair','Ruby is a wonderful cat that is looking for a forever home!'];

let imageIndex = 0;

// CHANGE IMAGE
const changeImage = function(indexChange) {
    let newIndex = imageIndex + indexChange; //get new index

    if(newIndex < 0) newIndex = imageSources.length - 1; //loop to end of images
    if(newIndex >= imageSources.length) newIndex = 0;    //loop to beginnning of images

    imageIndex = newIndex;  //set image index
    
    //update image
    document.getElementById('animal-image').src = imageSources[imageIndex];
    console.log(imageSources[imageIndex]);
}

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
const updatePageData = (admin) => {
    //query db for data


    //set 
    document.getElementById('cat-name').innerText = `Name: ${data[0]}`;
    document.getElementById('cat-age').innerText = `Age: ${data[1]}`;
    document.getElementById('cat-breed').innerText = `Breed: ${data[2]}`;
    document.getElementById('description').innerText = `${data[3]}`
}

// UPDATE DESCRIPTION
const updateDescription = () => {
    //hide modal
    document.getElementById('modal1').style.display='none';

    console.log('disc-update');
    //placeholder result
    console.log(document.getElementById('desc-text').value);
    data[3] =     document.getElementById('desc-text').value;
    updatePageData();
}

// ADD PHOTOS
const uploadImage = () => {
    //hide modal
    document.getElementById('modal3').style.display='none';


    //query db to add photo


    console.log(document.getElementById('image submitted').value);

}

// SHOW MODAL
const showModal = (modalId) => {
    document.getElementById(modalId).style.display='block';
}


// HIDE MODAL
const hideModal = (modalId) => {
    document.getElementById(modalId).style.display='none';
}

updatePageData();
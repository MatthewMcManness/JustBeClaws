//query images

let imageSources = [
    "animals-main-img-placeholder.png",
    "jack.jpg"
];


let data = ['Ruby','1 year 9 months', 'Domestic Long Hair','Ruby is a wonderful cat that is looking for a forever home!'];

let imageIndex = 0;

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
const updatePageData = (admin) => {
    //query db for data


    //set 
    document.getElementById('cat-name').innerText = `Name: ${data[0]}`;
    document.getElementById('cat-age').innerText = `Age: ${data[1]}`;
    document.getElementById('cat-breed').innerText = `Breed: ${data[2]}`;
    document.getElementById('description').innerText = `${data[3]}`
}

//modal funcitons
const onModal = (modalId) => {
    if(modalId == 'modal2') {
        //query available cats
        const availableFosters = ['Foster A', 'Foster B', 'Foster C'];
        availableFosters.forEach((foster,id) => {
            const option = document.createElement('option');
            option.innerHTML = `value=${id}`;
            option.innerText = `${foster}, id: ${id}`;
            document.getElementById('foster-select').appendChild(option);
        });
    } else {
        
    }
}

// DATABASE QUERIES
//get images
const getImageSrcs = () => {

};

updatePageData();
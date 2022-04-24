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



//initialize page
const updatePageData = () => {
    //query db for foster data
    
    document.getElementById('foster-name').innerText = `Name: ${data[0]}`;
    document.getElementById('foster-level').innerText = `Foster Level: ${data[1]}`;
    document.getElementById('num-fosters').innerText  = `Current Fosters: ${data[2]}`;
}



// HIDE MODAL
const hideModal = (modalId) => {
    document.getElementById(modalId).style.display='none';
}

// SHOW MODAL
const showModal = (modalId) => {
    document.getElementById(modalId).style.display='block';

    //show data for modal
    if(modalId == 'modal1') { //assign cat
        //clear options
        document.querySelectorAll('option').forEach(e => e.remove());

        //query available cats
        const availableCats = ['Cat A', 'Cat B', 'Cat C'];


        availableCats.forEach((cat) => {
            const option = document.createElement('option');
            //option.innerHTML = `value=${id}`;
            option.innerText = `${cat}`;
            document.getElementById('assign-cat-select').appendChild(option);
        });
        
    } else if(modalId == 'modal2') { //change foster level
        //clear options
        document.querySelectorAll('option').forEach(e => e.remove());

        for(let i=0; i < 3; i++) {
            const level = document.createElement('option');
            level.innerText = `Level ${i+1}`;
            document.getElementById('foster-level-select').appendChild(level);
        }
    }
}

const assignCat = () => {
    //query db

    //placeholder result
    console.log(document.getElementById('assign-cat-select').value);
    data[2]++;
    hideModal('modal1');
    updatePageData();
}

const changeFosterLevel = () => {
    //query db

    //placeholder result
    console.log(document.getElementById('foster-level-select').value);
    data[1] =     document.getElementById('foster-level-select').value;
    hideModal('modal2');
    updatePageData();

}

updatePageData();
//event listeners
//document.getElementById('modal2-btn').addEventListener('click', changeFosterLevel());


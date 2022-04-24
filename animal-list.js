//CAT DATA
//query for this data

//placeholders
const cats = [  
    {name: 'cat a', imgSrc: 'kitten.jpg', id: '0'},
    {name: 'cat b', imgSrc: 'litter.jpg', id: '1'},
    {name: 'cat c', imgSrc: 'Cat.jpg', id: '2'},
    {name: 'cat d', imgSrc: 'ruby.jpg', id: '3'}
];

//SHOW HIDE MODAL
const showModal = (modalId) => {
    document.getElementById(modalId).style.display='block';
}
const hideModal = (modalId) => {
    document.getElementById(modalId).style.display='none';
}

//ADD CAT
const addCat = () => {
    //get data from form
    const name = document.getElementById('name-form').textContent;

    console.log(name);


    //make query to db, adding the cat

    
    //hide modal
    document.getElementById('modal1').style.display='none';
}

// GO TO CAT PAGE
const goTo = (id) => {
    console.log(id);

    const temp = "animal-admin.html";
    const url = `https://just-be-claws-448.herokuapp.com/animal-admin.html/${id}`; //use this in release

    location.href = url; //use this in release
    location.href=temp;
} 

//DRAW GRID
const drawGrid = () => {

    //use queried data for each cat, we need the cats name, main image, and id(used for linking to its animal page)


    //for each cat create a DOM element and append it to the "cardGrid"
    cats.forEach((cat) => {
        //create div
        const catCard = document.createElement('div');
        catCard.className = 'card';
        catCard.onclick = () => {goTo(cat.id)};
        
        //create image
        const image = document.createElement('img');
        image.src = cat.imgSrc;
        image.alt = 'No Image';
        image.className = 'cardPicture';

        //create header
        const nameText = document.createElement('h3');
        nameText.innerText = cat.name;

        //create data
        const catId = document.createElement('data');
        catId.id = 'cat-id' + cat.id;
        catId.value = cat.id;

        //append image, data, & header to div
        catCard.appendChild(image);
        catCard.appendChild(nameText);
        catCard.appendChild(catId);

        //append cat card to grid
        document.getElementById('grid').appendChild(catCard);
        
    });
}

drawGrid();
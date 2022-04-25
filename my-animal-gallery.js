//CAT DATA
//query for this data

//placeholders
const cats = [  
    {name: 'Jack', imgSrc: 'jack.jpg', id: '0'},
    {name: 'Ruby', imgSrc: 'ruby.jpg', id: '1'},
    {name: 'Havarti', imgSrc: 'Cat.jpg', id: '2'},
    {name: 'Cat', imgSrc: '', id: '3'}
];

// GO TO CAT PAGE
const goTo = (id) => {
    console.log(id);

    const temp = "myAnimalsDetails.html";
    const url = `https://just-be-claws-448.herokuapp.com/myAnimalDetailsDetail/${id}`; //use this in release

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
        const nameText = document.createElement('h3')
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
let userType = "default";

let admin = 0;
let adopter = 0;
let foster = 0;

//get session user and user type
const getSessionData = async() => {
    await fetch('http://localhost:3000/session-data')
        .then(response => response.json())
        .then(data => {
            adopter=data.adopter;
            foster=data.foster;
            admin=data.administrator;
        })
}



// FORMAT header
const formatHeader = async() => {
    let header = document.getElementById('site-header');
    
    //create navbar div
    let navbarDiv = document.createElement('div');
    navbarDiv.className='topnav';
    navbarDiv.id = 'myTopnav';

    //create banner
    let bannerDiv = document.createElement('div');
    bannerDiv.className = 'bannerContainer';
    let bannerImg = document.createElement('img');
    bannerImg.src = 'JustBeClawsHeaderImage.png';
    bannerImg.alt = 'JustBeClaws';
    bannerImg.className = 'bannerImage';
    bannerDiv.appendChild(bannerImg); //append imasage to div

    //create nav links
    let home = document.createElement('a');
    home.href = 'homePage.html';
    home.text = 'Home';

    let animalGallery = document.createElement('a');
    animalGallery.href = 'animalsGallery.html';
    animalGallery.text = 'Animals';

    let myAnimalGallery = document.createElement('a');
    myAnimalGallery.href = 'animal-list.html';
    myAnimalGallery.text = 'My Animals';

    let fosters = document.createElement('a');
    fosters.href = 'foster-list.html';
    fosters.text = 'Fosters';

    let donate = document.createElement('a');
    donate.href = 'donate.html';
    donate.text = 'Donate';  

    let signIn = document.createElement('a');
    signIn.href = 'sign-in.html';
    signIn.text = 'Sign In';

    let signOut = document.createElement('a');
    signOut.href='sign-out';
    signOut.text = 'Sign Out';

    let signUp = document.createElement('a');
    signUp.href = '#modal2';
    signUp.text = 'Sign Up';

    let js = document.createElement('a');
    js.href = 'javascript:void(0).html';
    js.className='icon';
    js.onclick=()=>{
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    let bars = document.createElement('i');
    bars.style.src='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    bars.className='fa fa-bars';
    bars.style.float='right';


    //get user type and append children
    await getSessionData();
    
    if(admin==1) {
        adopter=0;
        foster=0;

        //append children
        navbarDiv.appendChild(home);
        navbarDiv.appendChild(animalGallery);
        navbarDiv.appendChild(myAnimalGallery);
        navbarDiv.appendChild(fosters);
        navbarDiv.appendChild(donate);
        navbarDiv.appendChild(signOut);
        navbarDiv.appendChild(signUp);
        navbarDiv.appendChild(js);
        js.appendChild(bars);
        navbarDiv.appendChild(bannerDiv);
        header.appendChild(navbarDiv);
    } else if(foster==1){
        //append children
        navbarDiv.appendChild(home);
        navbarDiv.appendChild(animalGallery);
        navbarDiv.appendChild(myAnimalGallery);
        navbarDiv.appendChild(donate);
        navbarDiv.appendChild(signOut);
        navbarDiv.appendChild(signUp);
        navbarDiv.appendChild(js);
        js.appendChild(bars);
        navbarDiv.appendChild(bannerDiv);
        header.appendChild(navbarDiv);
    } else if(adopter==1) {
        //append children
        navbarDiv.appendChild(home);
        navbarDiv.appendChild(animalGallery);
        navbarDiv.appendChild(donate);
        navbarDiv.appendChild(signOut);
        navbarDiv.appendChild(signUp);
        navbarDiv.appendChild(js);
        js.appendChild(bars);
        navbarDiv.appendChild(bannerDiv);
        header.appendChild(navbarDiv);
    } else {
        console.log('other');
        //append children
        navbarDiv.appendChild(home);
        navbarDiv.appendChild(animalGallery);
        navbarDiv.appendChild(donate);
        navbarDiv.appendChild(signIn);
        navbarDiv.appendChild(signUp);
        navbarDiv.appendChild(js);
        js.appendChild(bars);
        navbarDiv.appendChild(bannerDiv);
        header.appendChild(navbarDiv);
    }
}

formatHeader();
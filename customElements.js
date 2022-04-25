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
            console.log(adopter,foster,admin);
        })
}

// FORMAT header
const formatHeader = () => {
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
    signOut.href = 'sign-out.html';
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
    getSessionData();
    console.log(adopter,foster,admin);
    
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


// class siteHeader extends HTMLElement {
//     connectedCallback() {   //called when this is appened to document       
//         setHeader();
//         switch(userType) {
//             case "default":
//                         this.innerHTML = `
//                             <div class="topnav" id="myTopnav">
//                                 <a  href="homePage.html">Home</a>
//                                 <a  href="animalsGallery.html">Animals</a>
//                                 <a  href="donate.html">Donate</a>
//                                 <a  href="sign-in.html">Login</a>
//                                 <a href="#modal2">Sign Up</a>
//                                 <a href="javascript:void(0);" class="icon" onclick="myFunction()">
//                                 <i class="fa fa-bars"></i>
//                               </a>
//                                 <div class="bannerContainer">
//                                      <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
//                                 </div>  
//                             </div>
                                
            
//                                 <div class="popup" id="modal2">
//                                     <div class="popup__overlay" href="#">
//                                         <div class="popup__wrapper">
//                                             <a class="popup__close" href="#">X</a>
//                                             <div>
//                                                 <h2 class="Modal">Sign Up</h2>
//                                             </div>
//                                             <div class="modal-body">
//                                                 <p>Username:</p> <input type="text" maxlength="20">
//                                             </div>
//                                             <div class="modal-body">
//                                                 <p>Password:</p> <input type="text" maxlength="20">
//                                             </div>
//                                             <div class="modal-body">
//                                                 <p>Confirm your Password:</p> <input type="text" maxlength="20">
//                                             </div>
//                                             <div class="modal-footer">
//                                                 <input type="button" value="Submit">
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                         `;
                    
//             break;
//             case "adopter":
//                 //adopter
        
//                         this.innerHTML = `
             
//                             <div class="topnav" id="myTopnav">
//                                 <a  href="homePage.html">Home</a>
//                                 <a  href="animalsGallery.html">Animals</a>
//                                 <a  href="donate.html">Donate</a>
//                                 <b>Signed in as Adopter</b>
//                                 <a  href="homePage.html">Logout</a>
//                                 <a href="javascript:void(0);" class="icon" onclick="myFunction()">
//                                 <i class="fa fa-bars"></i>
//                               </a>
//                                 <div class="bannerContainer">
//                                      <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
//                                 </div>  
//                             </div>
//                          `;
                           
//                 break;
//                 case "foster":
//                     //foster
                  
//                             this.innerHTML = `                  
                            
//                                 <div class="topnav" id="myTopnav">
//                                     <a  href="homePage.html">Home</a>
//                                     <a  href="animalsGallery.html">All Animals</a>
//                                     <a href="myAnimalsGallery.html">My Animals</a>
//                                     <a  href="donate.html">Donate</a>
//                                     <b>Signed in as Foster</b>
//                                     <a  href="homePage.html">Logout</a>
//                                     <a href="javascript:void(0);" class="icon" onclick="myFunction()">
//                                 <i class="fa fa-bars"></i>
//                               </a>
//                                 <div class="bannerContainer">
//                                      <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
//                                 </div>  
//                                 </div>
//                             `;
           
//                 break;
//             case "admin":
//                 //administrator
               
//                         this.innerHTML = `
//                             <div>
//                                 <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                             
//                            </div>                        
                               
//                            <div class="topnav" id="myTopnav">
//                                 <a  href="homePage.html">Home</a>
//                                 <a  href="animal-list.html">Animals</a>
//                                 <a href="myAnimalsGallery.html">My Animals</a>
//                                 <a href="foster-list.html">Fosters</a>
                                
//                                 <a  href="donate.html">Donate</a>
//                                 <b>Signed in as Administrator</b>
//                                 <a  href="homePage.html">Logout</a>
//                                 <a href="javascript:void(0);" class="icon" onclick="myFunction()">
//                                 <i class="fa fa-bars"></i>
//                               </a>
//                                 <div class="bannerContainer">
//                                      <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
//                                 </div>   
//                             </div>
//                         `;
                   
//         }
    
    
    
    
//     }
// }

// const setHeader = async() => {
//     console.log(console.log('settingHeader'));
//     await getSessionData();

//     userType="default";
//     if(adopter == 1){
//         userType = "adopter";
//     }
//     if(foster == 1){
//         userType = "foster";
//     }
//     if(admin == 1){
//         userType = "admin";
//     }
//     console.log('setpageheader',setHeaderHelper());
//     console.log(document.getElementsByClassName('site-header').innerHTML);
//     document.getElementsByTagName('site-header').innerHTML = setHeaderHelper();
// }

const setHeaderHelper = () => {

    switch(userType) {
            case "default":
                 //default
                switch(document.activePage){
                    case "default":
                        return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animalsGallery.html">Animals</a> <a href="donate.html">Donate</a> <a href="sign-in.html">Login</a> <a href="#modal2">Sign Up</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div><div class="popup" id="modal1"> <div class="popup__overlay" href="#"> <div class="popup__wrapper"> <a class="popup__close" href="#">X</a> <div> <h2 class="Modal">Login</h2> </div> <div class="modal-body"> <p>First Name:</p> <input type="text" maxlength="20" placeholder="First Name goes here"> </div> <div class="modal-body"> <p>Last Name:</p> <input type="text" maxlength="20" placeholder="Last Name goes here"> </div> <div class="modal-footer"> <input type="button" value="Submit"> </div> </div> </div> </div>';
                    break;
                    case "home":
                        return '<div class="topnav" id="myTopnav"> <a class="active" href="homePage.html">Home</a> <a href="animalsGallery.html">Animals</a> <a href="donate.html">Donate</a> <a href="sign-in.html">Login</a> <a href="#modal2">Sign Up</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div> <div class="popup" id="modal1"> <div class="popup__overlay" href="#"> <div class="popup__wrapper"> <a class="popup__close" href="#">X</a> <div> <h2 class="Modal">Login</h2> </div> <div class="modal-body"> <p>First Name:</p> <input type="text" maxlength="20" placeholder="First Name goes here"> </div> <div class="modal-body"> <p>Last Name:</p> <input type="text" maxlength="20" placeholder="Last Name goes here"> </div> <div class="modal-footer"> <input type="button" value="Submit"> </div> </div> </div> </div> <div class="popup" id="modal2"> <div class="popup__overlay" href="#"> <div class="popup__wrapper"> <a class="popup__close" href="#">X</a> <div> <h2 class="Modal">Sign Up</h2> </div> <div class="modal-body"> <p>Username:</p> <input type="text" maxlength="20"> </div> <div class="modal-body"> <p>Password:</p> <input type="text" maxlength="20"> </div> <div class="modal-body"> <p>Confirm your Password:</p> <input type="text" maxlength="20"> </div> <div class="modal-footer"> <input type="button" value="Submit"> </div> </div> </div> </div>';
                    break;
                    case "animals":
                        return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a class="active" href="animalsGallery.html">Animals</a> <a href="donate.html">Donate</a> <a href="sign-in.html">Login</a> <a href="#modal2">Sign Up</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div> <div class="popup" id="modal1"> <div class="popup__overlay" href="#"> <div class="popup__wrapper"> <a class="popup__close" href="#">X</a> <div> <h2 class="Modal">Login</h2> </div> <div class="modal-body"> <p>First Name:</p> <input type="text" maxlength="20" placeholder="First Name goes here"> </div> <div class="modal-body"> <p>Last Name:</p> <input type="text" maxlength="20" placeholder="Last Name goes here"> </div> <div class="modal-footer"> <input type="button" value="Submit"> </div> </div> </div> </div> <div class="popup" id="modal2"> <div class="popup__overlay" href="#"> <div class="popup__wrapper"> <a class="popup__close" href="#">X</a> <div> <h2 class="Modal">Sign Up</h2> </div> <div class="modal-body"> <p>Username:</p> <input type="text" maxlength="20"> </div> <div class="modal-body"> <p>Password:</p> <input type="text" maxlength="20"> </div> <div class="modal-body"> <p>Confirm your Password:</p> <input type="text" maxlength="20"> </div> <div class="modal-footer"> <input type="button" value="Submit"> </div> </div> </div> </div>';
                    break;
                    case "donate":
                        return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animalsGallery.html">Animals</a> <a class="active" href="donate.html">Donate</a> <a href="sign-in.html">Login</a> <a href="#modal2">Sign Up</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div> <div class="popup" id="modal1"> <div class="popup__overlay" href="#"> <div class="popup__wrapper"> <a class="popup__close" href="#">X</a> <div> <h2 class="Modal">Login</h2> </div> <div class="modal-body"> <p>First Name:</p> <input type="text" maxlength="20" placeholder="First Name goes here"> </div> <div class="modal-body"> <p>Last Name:</p> <input type="text" maxlength="20" placeholder="Last Name goes here"> </div> <div class="modal-footer"> <input type="button" value="Submit"> </div> </div> </div> </div> <div class="popup" id="modal2"> <div class="popup__overlay" href="#"> <div class="popup__wrapper"> <a class="popup__close" href="#">X</a> <div> <h2 class="Modal">Sign Up</h2> </div> <div class="modal-body"> <p>Username:</p> <input type="text" maxlength="20"> </div> <div class="modal-body"> <p>Password:</p> <input type="text" maxlength="20"> </div> <div class="modal-body"> <p>Confirm your Password:</p> <input type="text" maxlength="20"> </div> <div class="modal-footer"> <input type="button" value="Submit"> </div> </div> </div> </div>';
                    break;
                    case "login":
                        return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animalsGallery.html">Animals</a> <a href="donate.html">Donate</a> <a href="sign-in.html" class="active">Login</a> <a href="#modal2">Sign Up</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div> <div class="popup" id="modal1"> <div class="popup__overlay" href="#"> <div class="popup__wrapper"> <a class="popup__close" href="#">X</a> <div> <h2 class="Modal">Login</h2> </div> <div class="modal-body"> <p>First Name:</p> <input type="text" maxlength="20" placeholder="First Name goes here"> </div> <div class="modal-body"> <p>Last Name:</p> <input type="text" maxlength="20" placeholder="Last Name goes here"> </div> <div class="modal-footer"> <input type="button" value="Submit"> </div> </div> </div> </div> <div class="popup" id="modal2"> <div class="popup__overlay" href="#"> <div class="popup__wrapper"> <a class="popup__close" href="#">X</a> <div> <h2 class="Modal">Sign Up</h2> </div> <div class="modal-body"> <p>Username:</p> <input type="text" maxlength="20"> </div> <div class="modal-body"> <p>Password:</p> <input type="text" maxlength="20"> </div> <div class="modal-body"> <p>Confirm your Password:</p> <input type="text" maxlength="20"> </div> <div class="modal-footer"> <input type="button" value="Submit"> </div> </div> </div> </div>';
                    break;
                    }               
            break;
            case "adopter":
                //adopter
                switch(document.activePage){
                    case "default":
                        return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animalsGallery.html">Animals</a> <a href="donate.html">Donate</a> <b>Signed in as Adopter</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                    break;
                    case "home":
                        return '<div class="topnav" id="myTopnav"> <a class="active" href="homePage.html">Home</a> <a href="animalsGallery.html">Animals</a> <a href="donate.html">Donate</a> <b>Signed in as Adopter</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                    break;
                    case "animals":
                        return'<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a class="active" href="animalsGallery.html">Animals</a> <a href="donate.html">Donate</a> <b>Signed in as Adopter</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                    break;
                    case "donate":
                        return'<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animalsGallery.html">Animals</a> <a class="active" href="donate.html">Donate</a> <b>Signed in as Adopter</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                    break;
                }               
                break;
                case "foster":
                    //foster
                    switch(document.activePage){
                        case "default":
                            return'<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animalsGallery.html">All Animals</a> <a href="myAnimalsGallery.html">My Animals</a> <a href="donate.html">Donate</a> <b>Signed in as Foster</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                        break;
                        case "home":
                           return'<div class="topnav" id="myTopnav"> <a class="active" href="homePage.html">Home</a> <a href="animalsGallery.html">All Animals</a> <a href="myAnimalsGallery.html">My Animals</a> <a href="donate.html">Donate</a> <b>Signed in as Foster</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                        break;
                        case "animals":
                            return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a class="active" href="animalsGallery.html">All Animals</a> <a href="myAnimalsGallery.html">My Animals</a> <a href="donate.html">Donate</a> <b>Signed in as Foster</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                        break;
                        case "myAnimals":
                            return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animalsGallery.html">All Animals</a> <a class="active" href="myAnimalsGallery.html">My Animals</a> <a href="donate.html">Donate</a> <b>Signed in as Foster</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                        break;
                        case "donate":
                            return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animalsGallery.html">All Animals</a> <a href="myAnimalsGallery.html">My Animals</a> <a class="active" href="donate.html">Donate</a> <b>Signed in as Foster</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                        break;
                    }               
                break;
            case "admin":
                //administrator
                switch(document.activePage){
                    case "default":
                        return '<div> <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/> </div> <div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animal-list.html">Animals</a> <a href="myAnimalsGallery.html">My Animals</a> <a href="foster-list.html">Fosters</a> <a href="donate.html">Donate</a> <b>Signed in as Administrator</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                    break;
                    case "home":
                        return '<div class="topnav" id="myTopnav"> <a class="active" href="homePage.html">Home</a> <a href="animal-list.html">Animals</a> <a href="myAnimalsGallery.html">My Animals</a> <a href="foster-list.html">Fosters</a> <a href="donate.html">Donate</a> <b>Signed in as Administrator</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                    break;
                    case "animals":
                        return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a class="active" href="animal-list.html">Animals</a> <a href="myAnimalsGallery.html">My Animals</a> <a href="foster-list.html">Fosters</a> <a href="donate.html">Donate</a> <b>Signed in as Administrator</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                    break;
                    case "myAnimals":
                        return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animal-list.html">Animals</a> <a class="active" href="myAnimalsGallery.html">My Animals</a> <a href="foster-list.html">Fosters</a> <a href="donate.html">Donate</a> <b>Signed in as Administrator</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                    break;
                    case "fosters":
                        return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animal-list.html">Animals</a> <a href="myAnimalsGallery.html">My Animals</a> <a class="active" href="foster-list.html">Fosters</a> <a href="donate.html">Donate</a> <b>Signed in as Administrator</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                    break;
                    case "applications":
                        return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animal-list.html">Animals</a> <a href="myAnimalsGallery.html">My Animals</a> <a href="foster-list.html">Fosters</a> <a href="donate.html">Donate</a> <b>Signed in as Administrator</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                    break;
                    case "donate":
                        return '<div class="topnav" id="myTopnav"> <a href="homePage.html">Home</a> <a href="animal-list.html">Animals</a> <a href="myAnimalsGallery.html">My Animals</a> <a href="foster-list.html">Fosters</a> <a class="active" href="donate.html">Donate</a> <b>Signed in as Administrator</b> <a href="homePage.html">Logout</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> <div class="bannerContainer"> <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/> </div> </div>';
                    break;
                }               
            break;
        }
}

const test = function() {
    console.log("success");
}

//customElements.define('site-header',siteHeader);



//setHeader();

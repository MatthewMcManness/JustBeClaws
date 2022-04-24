let userType = "default";

//*********getUserType function goes here********// 
let admin = 1;
let adopter = 1;
let foster = 1;
let user = 1;


if(user = 1){
    userType="default";
    if(adopter == 1){
        userType = "adopter";
    }
    if(foster == 1){
        userType = "foster";
    }
    if(admin == 1){
        userType = "admin";
    }
}


class siteHeader extends HTMLElement {
    connectedCallback() {   //called when this is appened to document       
        switch(userType) {
            case "default":
                 //default
                switch(activePage){
                    case "default":
                        this.innerHTML = `
                            <div class="topnav" id="myTopnav">
                                <a  href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <a  href="login.html">Login</a>
                                <a href="#modal2">Sign Up</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                            </div>

                                <div class="popup" id="modal1">
                                    <div class="popup__overlay" href="#">
                                        <div class="popup__wrapper">
                                            <a class="popup__close" href="#">X</a>
                                            <div>
                                                <h2 class="Modal">Login</h2>
                                            </div>
                                            <div class="modal-body">
                                                <p>First Name:</p> <input type="text" maxlength="20" placeholder="First Name goes here">
                                            </div>
                                            <div class="modal-body">
                                                <p>Last Name:</p> <input type="text" maxlength="20" placeholder="Last Name goes here">
                                            </div>
                                            <div class="modal-footer">
                                                <input type="button" value="Submit">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
            
                                <div class="popup" id="modal2">
                                    <div class="popup__overlay" href="#">
                                        <div class="popup__wrapper">
                                            <a class="popup__close" href="#">X</a>
                                            <div>
                                                <h2 class="Modal">Sign Up</h2>
                                            </div>
                                            <div class="modal-body">
                                                <p>Username:</p> <input type="text" maxlength="20">
                                            </div>
                                            <div class="modal-body">
                                                <p>Password:</p> <input type="text" maxlength="20">
                                            </div>
                                            <div class="modal-body">
                                                <p>Confirm your Password:</p> <input type="text" maxlength="20">
                                            </div>
                                            <div class="modal-footer">
                                                <input type="button" value="Submit">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        `;
                    break;
                    case "home":
                        this.innerHTML = `
                        <div class="topnav" id="myTopnav">
                            <a class="active" href="homePage.html">Home</a>
                            <a href="animalsGallery.html">Animals</a>
                            <a  href="donate.html">Donate</a>
                            <a  href="login.html">Login</a>
                            <a href="#modal2">Sign Up</a>
                            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                            <i class="fa fa-bars"></i>
                          </a>
                            <div class="bannerContainer">
                                 <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                            </div>  
                        </div>

                            <div class="popup" id="modal1">
                                <div class="popup__overlay" href="#">
                                    <div class="popup__wrapper">
                                        <a class="popup__close" href="#">X</a>
                                        <div>
                                            <h2 class="Modal">Login</h2>
                                        </div>
                                        <div class="modal-body">
                                            <p>First Name:</p> <input type="text" maxlength="20" placeholder="First Name goes here">
                                        </div>
                                        <div class="modal-body">
                                            <p>Last Name:</p> <input type="text" maxlength="20" placeholder="Last Name goes here">
                                        </div>
                                        <div class="modal-footer">
                                            <input type="button" value="Submit">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
        
                            <div class="popup" id="modal2">
                                <div class="popup__overlay" href="#">
                                    <div class="popup__wrapper">
                                        <a class="popup__close" href="#">X</a>
                                        <div>
                                            <h2 class="Modal">Sign Up</h2>
                                        </div>
                                        <div class="modal-body">
                                            <p>Username:</p> <input type="text" maxlength="20">
                                        </div>
                                        <div class="modal-body">
                                            <p>Password:</p> <input type="text" maxlength="20">
                                        </div>
                                        <div class="modal-body">
                                            <p>Confirm your Password:</p> <input type="text" maxlength="20">
                                        </div>
                                        <div class="modal-footer">
                                            <input type="button" value="Submit">
                                        </div>
                                    </div>
                                </div>
                            </div>
                    `;
                    break;
                    case "animals":
                        this.innerHTML = `
                            <div class="topnav" id="myTopnav">
                                <a href="homePage.html">Home</a>
                                <a class="active" href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <a  href="login.html">Login</a>
                                <a href="#modal2">Sign Up</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                            </div>
    
                                <div class="popup" id="modal1">
                                    <div class="popup__overlay" href="#">
                                        <div class="popup__wrapper">
                                            <a class="popup__close" href="#">X</a>
                                            <div>
                                                <h2 class="Modal">Login</h2>
                                            </div>
                                            <div class="modal-body">
                                                <p>First Name:</p> <input type="text" maxlength="20" placeholder="First Name goes here">
                                            </div>
                                            <div class="modal-body">
                                                <p>Last Name:</p> <input type="text" maxlength="20" placeholder="Last Name goes here">
                                            </div>
                                            <div class="modal-footer">
                                                <input type="button" value="Submit">
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                
            
                                <div class="popup" id="modal2">
                                    <div class="popup__overlay" href="#">
                                        <div class="popup__wrapper">
                                            <a class="popup__close" href="#">X</a>
                                            <div>
                                                <h2 class="Modal">Sign Up</h2>
                                            </div>
                                            <div class="modal-body">
                                                <p>Username:</p> <input type="text" maxlength="20">
                                            </div>
                                            <div class="modal-body">
                                                <p>Password:</p> <input type="text" maxlength="20">
                                            </div>
                                            <div class="modal-body">
                                                <p>Confirm your Password:</p> <input type="text" maxlength="20">
                                            </div>
                                            <div class="modal-footer">
                                                <input type="button" value="Submit">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        `;
                    break;
                    case "donate":
                        this.innerHTML = `

                            <div class="topnav" id="myTopnav">
                                <a href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a class="active" href="donate.html">Donate</a>
                                <a  href="login.html">Login</a>
                                <a href="#modal2">Sign Up</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                            </div>
    
                                <div class="popup" id="modal1">
                                    <div class="popup__overlay" href="#">
                                        <div class="popup__wrapper">
                                            <a class="popup__close" href="#">X</a>
                                            <div>
                                                <h2 class="Modal">Login</h2>
                                            </div>
                                            <div class="modal-body">
                                                <p>First Name:</p> <input type="text" maxlength="20" placeholder="First Name goes here">
                                            </div>
                                            <div class="modal-body">
                                                <p>Last Name:</p> <input type="text" maxlength="20" placeholder="Last Name goes here">
                                            </div>
                                            <div class="modal-footer">
                                                <input type="button" value="Submit">
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                
            
                                <div class="popup" id="modal2">
                                    <div class="popup__overlay" href="#">
                                        <div class="popup__wrapper">
                                            <a class="popup__close" href="#">X</a>
                                            <div>
                                                <h2 class="Modal">Sign Up</h2>
                                            </div>
                                            <div class="modal-body">
                                                <p>Username:</p> <input type="text" maxlength="20">
                                            </div>
                                            <div class="modal-body">
                                                <p>Password:</p> <input type="text" maxlength="20">
                                            </div>
                                            <div class="modal-body">
                                                <p>Confirm your Password:</p> <input type="text" maxlength="20">
                                            </div>
                                            <div class="modal-footer">
                                                <input type="button" value="Submit">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        `;
                    break;
                    }               
            break;
            case "adopter":
                //adopter
                switch(activePage){
                    case "default":
                        this.innerHTML = `
             
                            <div class="topnav" id="myTopnav">
                                <a  href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <b>Signed in as Adopter</b>
                                <a  href="homePage.html">Logout</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                            </div>
                         `;
                    break;
                    case "home":
                        this.innerHTML = `
         
                            <div class="topnav" id="myTopnav">
                                <a class="active" href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <b>Signed in as Adopter</b>
                                <a  href="homePage.html">Logout</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                            </div>
                        `;
                    break;
                    case "animals":
                        this.innerHTML = `
     
                            <div class="topnav" id="myTopnav">
                                <a href="homePage.html">Home</a>
                                <a class="active" href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <b>Signed in as Adopter</b>
                                <a  href="homePage.html">Logout</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                            </div>
                        `;
                    break;
                    case "donate":
                        this.innerHTML = `
 
                            <div class="topnav" id="myTopnav">
                                <a href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a class="active" href="donate.html">Donate</a>
                                <b>Signed in as Adopter</b>
                                <a  href="homePage.html">Logout</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                            </div>
                        `;
                    break;
                }               
                break;
                case "foster":
                    //foster
                    switch(activePage){
                        case "default":
                            this.innerHTML = `                  
                            
                                <div class="topnav" id="myTopnav">
                                    <a  href="homePage.html">Home</a>
                                    <a  href="animalsGallery.html">All Animals</a>
                                    <a href="myAnimalsGallery.html">My Animals</a>
                                    <a  href="donate.html">Donate</a>
                                    <b>Signed in as Foster</b>
                                    <a  href="homePage.html">Logout</a>
                                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                                </div>
                            `;
                        break;
                        case "home":
                            this.innerHTML = `                  
                                
                                <div class="topnav" id="myTopnav">
                                    <a class="active" href="homePage.html">Home</a>
                                    <a  href="animalsGallery.html">All Animals</a>
                                    <a href="myAnimalsGallery.html">My Animals</a>
                                    <a  href="donate.html">Donate</a>
                                    <b>Signed in as Foster</b>
                                    <a  href="homePage.html">Logout</a>
                                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                                </div>
                            `;
                        break;
                        case "animals":
                            this.innerHTML = `                  
                                
                                <div class="topnav" id="myTopnav">
                                    <a href="homePage.html">Home</a>
                                    <a class="active" href="animalsGallery.html">All Animals</a>
                                    <a href="myAnimalsGallery.html">My Animals</a>
                                    <a  href="donate.html">Donate</a>
                                    <b>Signed in as Foster</b>
                                    <a  href="homePage.html">Logout</a>
                                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                                </div>
                            `;
                        break;
                        case "myAnimals":
                            this.innerHTML = `                  
                                
                                <div class="topnav" id="myTopnav">
                                    <a href="homePage.html">Home</a>
                                    <a href="animalsGallery.html">All Animals</a>
                                    <a class="active" href="myAnimalsGallery.html">My Animals</a>
                                    <a  href="donate.html">Donate</a>
                                    <b>Signed in as Foster</b>
                                    <a  href="homePage.html">Logout</a>
                                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                                </div>
                            `;
                        break;
                        case "donate":
                            this.innerHTML = `                  
                        
                                <div class="topnav" id="myTopnav">
                                    <a href="homePage.html">Home</a>
                                    <a  href="animalsGallery.html">All Animals</a>
                                    <a href="myAnimalsGallery.html">My Animals</a>
                                    <a class="active" href="donate.html">Donate</a>
                                    <b>Signed in as Foster</b>
                                    <a  href="homePage.html">Logout</a>
                                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                                </div>
                            `;
                        break;
                    }               
                break;
            case "admin":
                //administrator
                switch(activePage){
                    case "default":
                        this.innerHTML = `
                            <div>
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                             
                           </div>                        
                               
                           <div class="topnav" id="myTopnav">
                                <a  href="homePage.html">Home</a>
                                <a  href="animal-list.html">Animals</a>
                                <a href="myAnimalsGallery.html">My Animals</a>
                                <a href="foster-list.html">Fosters</a>
                                
                                <a  href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a  href="homePage.html">Logout</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>   
                            </div>
                        `;
                    break;
                    case "home":
                        this.innerHTML = `
                 
                            <div class="topnav" id="myTopnav">
                                <a class="active" href="homePage.html">Home</a>
                                <a  href="animal-list.html">Animals</a>
                                <a href="myAnimalsGallery.html">My Animals</a>
                                <a href="foster-list.html">Fosters</a>
                                
                                <a  href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a  href="homePage.html">Logout</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                    <i class="fa fa-bars"></i>
                                </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  

                            </div>
                        `;
                    break;
                    case "animals":
                        this.innerHTML = `
 
                            <div class="topnav" id="myTopnav">
                                <a href="homePage.html">Home</a>
                                <a class="active" href="animal-list.html">Animals</a>
                                <a href="myAnimalsGallery.html">My Animals</a>
                                <a href="foster-list.html">Fosters</a>
                                
                                <a href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a href="homePage.html">Logout</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                            </div>
                        `;
                    break;
                    case "myAnimals":
                        this.innerHTML = `
 
                            <div class="topnav" id="myTopnav">
                                <a href="homePage.html">Home</a>
                                <a href="animal-list.html">Animals</a>
                                <a  class="active" href="myAnimalsGallery.html">My Animals</a>
                                <a href="foster-list.html">Fosters</a>
                                
                                <a href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a href="homePage.html">Logout</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                            </div>
                        `;
                    break;
                    case "fosters":
                        this.innerHTML = `
 
                            <div class="topnav" id="myTopnav">
                                <a href="homePage.html">Home</a>
                                <a href="animal-list.html">Animals</a>
                                <a href="myAnimalsGallery.html">My Animals</a>
                                <a class="active" href="foster-list.html">Fosters</a>
                                
                                <a href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a href="homePage.html">Logout</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                            </div>
                        `;
                    break;
                    case "applications":
                        this.innerHTML = `
 
                            <div class="topnav" id="myTopnav">
                                <a href="homePage.html">Home</a>
                                <a href="animal-list.html">Animals</a>
                                <a href="myAnimalsGallery.html">My Animals</a>
                                <a href="foster-list.html">Fosters</a>
                               
                                <a href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a href="homePage.html">Logout</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                            </div>
                        `;
                    break;
                    case "donate":
                        this.innerHTML = `
             
                            <div class="topnav" id="myTopnav">
                                <a href="homePage.html">Home</a>
                                <a  href="animal-list.html">Animals</a>
                                <a href="myAnimalsGallery.html">My Animals</a>
                                <a href="foster-list.html">Fosters</a>
                                
                                <a class="active" href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a  href="homePage.html">Logout</a>
                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                              </a>
                                <div class="bannerContainer">
                                     <img src="JustBeClawsHeaderImage.png" alt="JustBeClaws" class="bannerImage"/>                        
                                </div>  
                            </div>
                        `;
                    break;
                }               
            break;
        }
    }
}


const test = function() {
    console.log("success");
}

/*
const getUsertype = function(type) {
    user = //get from database
    adopter = //get from database
    foster = //get from database
    admin = //get from database
    console.log(userType);
}
*/


customElements.define('site-header',siteHeader);





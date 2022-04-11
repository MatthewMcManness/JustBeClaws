userType = "admin";

class siteHeader extends HTMLElement {
    connectedCallback() {   //called when this is appened to document       
        switch(userType) {
            case "default":
                 //default
                switch(activePage){
                    case "default":
                        this.innerHTML = `
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>   

                            <div class="topnav">
                                <a  href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <a  href="signUp.html">Sign Up</a>
                                <a  href="login.html">Login</a>
                            </div>
                        `;
                    break;
                    case "home":
                        this.innerHTML = `
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                            
                            <div class="topnav">
                                <a class="active" href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <a  href="signUp.html">Sign Up</a>
                                <a  href="login.html">Login</a>
                            </div>
                        `;
                    break;
                    case "animals":
                        this.innerHTML = `
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
            
                            <div class="topnav">
                                <a href="homePage.html">Home</a>
                                <a class="active" href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <a  href="signUp.html">Sign Up</a>
                                <a  href="login.html">Login</a>
                            </div>
                        `;
                    break;
                    case "donate":
                        this.innerHTML = `
                           <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                
                            <div class="topnav">
                                <a href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a class="active" href="donate.html">Donate</a>
                                <a  href="signUp.html">Sign Up</a>
                                <a  href="login.html">Login</a>
                            </div>
                        `;
                    break;
                    case "signUp":
                        this.innerHTML = `
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                
                            <div class="topnav">
                                <a href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <a class="active" href="signUp.html">Sign Up</a>
                                <a  href="login.html">Login</a>
                            </div>
                        `;
                    break;
                    case "login":
                        this.innerHTML = `
                           <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                
                            <div class="topnav">
                                <a href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <a  href="signUp.html">Sign Up</a>
                                <a class="active" href="login.html">Login</a>
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
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                            
                            <div class="topnav">
                                <a  href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <b>Signed in as Adopter</b>
                                <a  href="homePage.html">Logout</a>
                            </div>
                         `;
                    break;
                    case "home":
                        this.innerHTML = `
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                        
                            <div class="topnav">
                                <a class="active" href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <b>Signed in as Adopter</b>
                                <a  href="homePage.html">Logout</a>
                            </div>
                        `;
                    break;
                    case "animals":
                        this.innerHTML = `
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                    
                            <div class="topnav">
                                <a href="homePage.html">Home</a>
                                <a class="active" href="animalsGallery.html">Animals</a>
                                <a  href="donate.html">Donate</a>
                                <b>Signed in as Adopter</b>
                                <a  href="homePage.html">Logout</a>
                            </div>
                        `;
                    break;
                    case "donate":
                        this.innerHTML = `
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                
                            <div class="topnav">
                                <a href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a class="active" href="donate.html">Donate</a>
                                <b>Signed in as Adopter</b>
                                <a  href="homePage.html">Logout</a>
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
                                <div class="HeaderImageBackground">
                                    <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                                </div>                        
                            
                                <div class="topnav">
                                    <a  href="homePage.html">Home</a>
                                    <a  href="animalsGallery.html">All Animals</a>
                                    <a href="myAnimalsGallery.html">My Animals</a>
                                    <a  href="donate.html">Donate</a>
                                    <b>Signed in as Foster</b>
                                    <a  href="homePage.html">Logout</a>
                                </div>
                            `;
                        break;
                        case "home":
                            this.innerHTML = `
                                <div class="HeaderImageBackground">
                                    <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                                </div>                        
                                
                                <div class="topnav">
                                    <a class="active" href="homePage.html">Home</a>
                                    <a  href="animalsGallery.html">All Animals</a>
                                    <a href="myAnimalsGallery.html">My Animals</a>
                                    <a  href="donate.html">Donate</a>
                                    <b>Signed in as Foster</b>
                                    <a  href="homePage.html">Logout</a>
                                </div>
                            `;
                        break;
                        case "animals":
                            this.innerHTML = `
                                <div class="HeaderImageBackground">
                                    <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                                </div>                        
                                
                                <div class="topnav">
                                    <a href="homePage.html">Home</a>
                                    <a class="active" href="animalsGallery.html">All Animals</a>
                                    <a href="myAnimalsGallery.html">My Animals</a>
                                    <a  href="donate.html">Donate</a>
                                    <b>Signed in as Foster</b>
                                    <a  href="homePage.html">Logout</a>
                                </div>
                            `;
                        break;
                        case "myAnimals":
                            this.innerHTML = `
                                <div class="HeaderImageBackground">
                                    <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                                </div>                        
                                
                                <div class="topnav">
                                    <a href="homePage.html">Home</a>
                                    <a href="animalsGallery.html">All Animals</a>
                                    <a class="active" href="myAnimalsGallery.html">My Animals</a>
                                    <a  href="donate.html">Donate</a>
                                    <b>Signed in as Foster</b>
                                    <a  href="homePage.html">Logout</a>
                                </div>
                            `;
                        break;
                        case "donate":
                            this.innerHTML = `
                                <div class="HeaderImageBackground">
                                    <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                                </div>                        
                        
                                <div class="topnav">
                                    <a href="homePage.html">Home</a>
                                    <a  href="animalsGallery.html">All Animals</a>
                                    <a href="myAnimalsGallery.html">My Animals</a>
                                    <a class="active" href="donate.html">Donate</a>
                                    <b>Signed in as Foster</b>
                                    <a  href="homePage.html">Logout</a>
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
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                             
                           </div>                        
                               
                           <div class="topnav">
                                <a  href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a href="foster-list.html">Fosters</a>
                                <a href="applications.html">Application</a>
                                <a  href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a  href="homePage.html">Logout</a>
                            </div>
                        `;
                    break;
                    case "home":
                        this.innerHTML = `
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                                
                            <div class="topnav">
                                <a class="active" href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a href="foster-list.html">Fosters</a>
                                <a href="applications.html">Application</a>
                                <a  href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a  href="homePage.html">Logout</a>
                            </div>
                        `;
                    break;
                    case "animals":
                        this.innerHTML = `
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                
                            <div class="topnav">
                                <a href="homePage.html">Home</a>
                                <a class="active" href="animalsGallery.html">Animals</a>
                                <a href="foster-list.html">Fosters</a>
                                <a href="applications.html">Application</a>
                                <a href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a href="homePage.html">Logout</a>
                            </div>
                        `;
                    break;
                    case "fosters":
                        this.innerHTML = `
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                
                            <div class="topnav">
                                <a href="homePage.html">Home</a>
                                <a href="animalsGallery.html">Animals</a>
                                <a class="active" href="foster-list.html">Fosters</a>
                                <a href="applications.html">Application</a>
                                <a href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a href="homePage.html">Logout</a>
                            </div>
                        `;
                    break;
                    case "applications":
                        this.innerHTML = `
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                
                            <div class="topnav">
                                <a href="homePage.html">Home</a>
                                <a href="animalsGallery.html">Animals</a>
                                <a href="foster-list.html">Fosters</a>
                                <a class="active" href="applications.html">Application</a>
                                <a href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a href="homePage.html">Logout</a>
                            </div>
                        `;
                    break;
                    case "donate":
                        this.innerHTML = `
                            <div class="HeaderImageBackground">
                                <img src="JustBeClawsHeaderImage.png" style="width:50%; height:auto; display:block; margin-left:auto; margin-right:auto"/>                        
                            </div>                        
                            
                            <div class="topnav">
                                <a href="homePage.html">Home</a>
                                <a  href="animalsGallery.html">Animals</a>
                                <a href="foster-list.html">Fosters</a>
                                <a href="applications.html">Application</a>
                                <a class="active" href="donate.html">Donate</a>
                                <b>Signed in as Administrator</b>
                                <a  href="homePage.html">Logout</a>
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

const switchUserType = function(type) {
    userType = type;
    console.log(userType);
}

const switchActivePage = function(type){
    activePage = type;
    console.log(activePage);
}

customElements.define('site-header',siteHeader);





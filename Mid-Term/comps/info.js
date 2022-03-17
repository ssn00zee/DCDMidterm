//MUST HAVE - CREATE A TEMPLATE TAG
var template_info = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_info.innerHTML = `
<style>

.info {
    display: none;
    background-color: #2F2885;
    border: 1px solid #888;
    height: 30em;
    width: 20em; /* Could be more or less, depending on screen size */
    border-radius: 15px;
    z-index; 5;
    position: absolute;
    animation: fade 0.5s ease-in-out forwards;
}

.green_btn {
    width: 50px;
    height: 50px;
    background: #00C637;
    border-radius: 50%;
    margin: 1rem;
    transition: transform 250ms;
}

.green_btn:hover {
    background-color: #037400;
    transform: translateY(-5px);
}

.info_cont {
    display:flex;
    justify-content: center;
}

.bpart {
    width: 50px;
    height: 50px;
    background: black;
    border-radius: 50%;
    margin: 1rem;
    flex-shrink: 0;
    z-index: -1;
}

.part_cont{
    display:flex; 
    justify-content: space-between;
    flex-wrap: wrap;
}

</style>

<div class='info_cont'>
    <div class='info' id='here'>
    </div> 
</div>



<div class='part_cont'>
    <div class='bpart'></div>
    <div class='bpart'></div>
    <div class='green_btn'></div>
    <div class='bpart'></div>
    <div class='bpart'></div>
    <div class='bpart'></div>
    <div class='bpart'></div>
    <div class='bpart'></div>
    <div class='bpart'></div>
    <div class='bpart'></div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)


class TheInfo extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_info.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector('.green_btn').onclick = () => {
            this.showInfo();
            this.smoothScroll();
        }
        this.shadowRoot.querySelector('.info').onclick = () => this.hideInfo();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!}   
    
    showInfo() {
        this.shadowRoot.querySelector(".info").style.cssText = `
        display: flex;
        `
    }

    hideInfo() {
        this.shadowRoot.querySelector(".info").style.cssText = `
        pointer-events: none;
        `
    }

    smoothScroll() {
        var elem = this.shadowRoot.getElementById("here");
        elem.scrollIntoView({behavior:"smooth", block: "center"});
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-info", TheInfo)
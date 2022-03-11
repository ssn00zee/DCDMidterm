//MUST HAVE - CREATE A TEMPLATE TAG
var template_bpart = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_bpart.innerHTML = `
<style>

.cont{
    display:flex; 
    justify-content: space-between;
    flex-wrap: wrap;
}

.bpart {
    width: 50px;
    height: 50px;
    background: black;
    border-radius: 50%;
    margin: 1rem;
    flex-shrink: 0;
}

</style>

<div class='cont'>
    <div class='bpart'></div>
    <div class='bpart'></div>
    <div class='bpart'></div>
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
class TheBPart extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_bpart.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-bpart", TheBPart)
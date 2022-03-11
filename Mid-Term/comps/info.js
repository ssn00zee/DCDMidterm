//MUST HAVE - CREATE A TEMPLATE TAG
var template_info = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_info.innerHTML = `
<style>
.info {
    width: 20em;
    height: 30em;
    background: #2F2885;
    box-shadow: 16px 13px 8px rgba(0, 0, 0, 0.25);
}
</style>


<div class='info'>
    <div class='good'></div>
    <div class='bad'></div>
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
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-info", TheInfo)
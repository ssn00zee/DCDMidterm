//MUST HAVE - CREATE A TEMPLATE TAG
var particles_comp = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
particles_comp.innerHTML = `
<style>
.particle_container {
    display: flex;
    flex-direction: column;
    
}

.part1{
    width: 50px;
    height: 50px;
    background: #00C637;
    border-radius: 50%;
    margin: 3rem;
    transition: transform 250ms;
}

.part1:hover{
    background-color: #037400;
    transform: translateY(-5px);
}

.part2{
    width: 50px;
    height: 50px;
    background: #FF0000;
    border-radius: 50%;
    margin: 3rem;
    transition: transform 250ms;
}

.part2:hover{
    background-color: #BD0000;
    transform: translateY(-5px);
}



</style>

<div class='particle_container'>
    <div class='part1'></div>
    <div class='part2'></div>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheComp extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(particles_comp.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-particles", TheComp)
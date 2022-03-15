//MUST HAVE - CREATE A TEMPLATE TAG
var template_info = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_info.innerHTML = `
<style>
.info {
    display: flex;
    justify-content: center;
    width: 20em;
    height: 30em;
    background: #2F2885;
    box-shadow: 16px 13px 8px rgba(0, 0, 0, 0.25);
}

.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

</style>


<div class='info' id=>
    <div class='good'></div>
    <div class='bad'></div>
    </div>

<div id='myModal' class='modal'>
    <div class='info'></div>
</div>
    `;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
var modal = this.shadowRoot.querySelector('.modal');

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
        // this.shadowRoot.querySelector('.good').onclick = () => this.slideRight();
        // this.shadowRoot.querySelector('.good').onclick = () => this.slideLeft();
        document.querySelector('.part1').onclick = () => this.modalOpen();
        window.onclick = () => this.modalClickAway();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!}   

    // slideRight(){
    // this.shadowRoot.querySelector('.info').style.cssText = `
    //     left:50vw;
    // `
    // }

    // slideLeft(){
    //     this.shadowRoot.querySelector('.info').style.cssText = `
    //         left:200vw;
    //     `
    //     }
    


    modalOpen() {
        modal.style.display = "block";
    }

    modalClickAway(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }

}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-info", TheInfo)
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
      
/* Modal Content/Box */
.modal-content {
background-color: #2F2885;
margin: 15% auto; /* 15% from the top and centered */
padding: 10px;
border: 1px solid #888;
height: 30em;
width: 20em; /* Could be more or less, depending on screen size */
}
      
/* The Close Button */
.close {
color: #fafafa;
float: right;
font-size: 28px;
font-weight: bold;
}
      
.close:hover,
.close:focus {
color: black;
text-decoration: none;
cursor: pointer;
} 

</style>

<div class='particle_container'>
    <div class='part1'></div>
    <div class='part2'></div>
</div>

<div id="myModal" class="modal">

    <div class="modal-content">

    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>

</div>
    
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)

// var modal = this.shadowRoot.getElementById("myModal");
// var btn = this.shadowRoot.getElementById("part");
// var span = this.shadowRoot.getElementsByClassName("close")[0];
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
        // this.shadowRoot.querySelector('.part1').onclick = () => this.slideRight();
        // window.addEventListener("click", function(event)) = () => this.modalClickAway;
        this.shadowRoot.querySelector('.part1').onclick = function() {
            this.shadowRoot.getElementById('myModal').style.display = "block";
        };

        this.shadowRoot.getElementsByClassName('close')[0].onclick = function() {
            this.shadowRoot.getElementById('myModal').style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target == this.shadowRoot.getElementById('myModal')) {
              this.shadowRoot.getElementById('myModal').style.display = "none";
            }
          } ;

        this.shadowRoot.querySelector('.part1').onclick = () => this.test();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!

    test(){
        alert('hello');
    }

    slideRight(){
        document.querySelector('.info').style.cssText = `
            display: flex;
        `
    }

    modalClickAway(event) {
        if (event.target == modal) {
            modal.style.cssText = `
                display: none;
            `;
        }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-particles", TheComp)
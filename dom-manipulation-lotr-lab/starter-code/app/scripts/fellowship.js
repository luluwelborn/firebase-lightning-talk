console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
    var earth = document.createElement('section');
    earth.setAttribute("id","middle-earth");
    console.log('Yo first');
    for (i = 0; i < lands.length; i++) {
         var landsItem = document.createElement('article');
         landsItem.setAttribute("id", lands[i]);
         var landsTitle = document.createElement('h1');
         console.log("i is " + i + " and lands[i] is " + lands[i]);
         console.log("the loop is restarting!");
         landsTitle.append(lands[i]);
         //lands[i] in the for loop makes the loop run through each item in the lands arrray
         landsItem.appendChild(landsTitle);
         earth.appendChild(landsItem);
         //append tells ___ to be adopted/.appened by ();
    }
      body.appendChild(earth);
}
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body


makeMiddleEarth();


// Part 2

function makeHobbits() {
    //create the variable name for the ul
    var hobbitList = document.createElement('ul');
    //
    hobbitList.setAttribute("id","hobbits");
    //
    //console.log("hobbits show up!")
    for (i = 0; i < hobbits.length; i++) {
        var hobbit = document.createElement('li');
        hobbit.append(hobbits[i]);
        hobbitList.append(hobbit);
    }

    var TheShire = document.getElementById('The Shire');
    TheShire.setAttribute("id",'The-Shire');
    TheShire.append(hobbitList);

  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
  theRing.setAttribute("id","the-ring");
  console.log("you have a div!"); 
  // give the div a class of 'magic-imbued-jewelry'
  // var magicImbuedJewelry = document.createElement("id");
  theRing.setAttribute("class","magic-imbued-jewelry");
  console.log("and a class!");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // 
  theRing.addEventListener("click", nazgulScreech);
  console.log("event listener added!");
  document.querySelector("#hobbits li").append(theRing);
}
  // add the ring as a child of Frodo

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  console.log(Rivendell);
  var holdBuddies = document.createElement("aside");
  holdBuddies.setAttribute("id","hold-buddies");
  console.log("aside is created");
  // attach an unordered list of the 'buddies' in the aside
  for (i = 0; i < buddies.length; i++) {
    var buddiesItem = document.createElement('li');
    buddiesItem.append(buddies[i]);
    console.log("We have ul of buddies!");
    Rivendell.append(buddiesItem);                             
    console.log("buddies are children of rivendell");
  }
}
  // insert your aside as a child element of rivendell
makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  // need to use query selector to find li/strider
  document.querySelectorAll("#Rivendell li").innerHTML = "Aragorn";
  //Strider.setAttribute("Aragorn");
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  // call hobbits from article id theShire, append to rivendell
  Rivendell.appendChild(document.getElementById("hobbits"));                        
  
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}

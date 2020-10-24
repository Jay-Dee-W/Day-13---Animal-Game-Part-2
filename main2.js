let readlineSync = require('readline-sync');
let fs = require("fs");


function Node(data, y, n) {
    this.data = data;
    this.yes = y;
    this.no = n;
  }

let data = fs.readFileSync('binaryTree.json');

let tree = JSON.parse(data)
let node;

go()

function go() {
  console.log("Computer: Think of an animal")
 
     node = tree
 if (node.yes && node.no) {
    console.log("Computer: " + node.data)
    let yesOrNo = readlineSync.question("Human : ");
    if (yesOrNo.toLowerCase() == "no") {
      node = node.no;
    } else {
      node = node.yes;
    }
  }
  console.log("Computer: Is it a " + node.data + "?")
  let yesOrNo1 = readlineSync.question("Human : ");
  if (yesOrNo1.toLowerCase() == "no") {
    improve(node);
  } else {
    console.log("Computer: Yay!  I got it!");
  }
  console.log("Computer: Want to play again?")
  let playAgain = readlineSync.question("Human : ");
  while (playAgain.toLowerCase() == "yes") {
  go();
    }
}

function improve(node) {

  let guess = node.data;

console.log("Computer: Oops - looks like I need to improve")
console.log("Computer: What is the animal?")
  let answer = readlineSync.question("Human : ");
  console.log("Computer: What question would distinguish between " + guess+ " and " + answer)
  let question = readlineSync.question("Human : ");
  node.data = question;
  console.log("Computer: For " + answer + " is the answer yes or no?")
  let yesOrNo = readlineSync.question("Human : ");
  if (yesOrNo.toLowerCase == 'yes') {
    node.yes = new Node(answer);
    node.no = new Node(guess);
    

  } else {
    node.yes = new Node(guess);
    node.no = new Node(answer);

  }
  console.log("Computer: Thanks for helping me to improve!");
  data = JSON.stringify(tree, null,2)
  fs.writeFileSync('binaryTree.json', data);
}
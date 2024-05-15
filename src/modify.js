const getMainHeadingText = () => {
  //document.querySelector("#main-heading")
  console.log(document.querySelector("#main-heading").textContent)
};

const getAllMainText = () => {
  const main = document.querySelectorAll(".main-text")
  let newText = ""
  main.forEach((main) => newText += main.textContent + ",")
  console.log(newText.slice(0, -1))
};

const setSubtitleText = () => {
  document.querySelector("h2").textContent = "This is a subtitle!"
};

const modifyDivClassList = () => {
  const list = document.querySelector("#modify-classes").classList
  list.remove("bad-class")
  list.add("new-class")
};
//Question 5
const addH2 = () => {
  const newElement = document.createElement("h2")
  newElement.id = "h2-test"
  newElement.textContent = "Another one!"
  document.body.appendChild(newElement)
}

const removeOldInfo = () => {
  let element = document.querySelector("#old-info")
  element.remove()
};

const makeAlphabet = () => {
  const numOfLetters = document.querySelector("#alphabet").dataset.numLetters
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const letters = alphabet.split(" ")
  for (let i = 0; i < numOfLetters; i++) {
    const newlist = document.createElement("li")
    newlist.textContent = ` ${letters[i]} is letter #${i + 1} in the alphabet`
    hi
  }

};

const makeBio = () => {
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 

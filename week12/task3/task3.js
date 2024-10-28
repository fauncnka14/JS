const output = document.getElementById('poem');

const alphabet = "абвгдеёжзийклмнопрствуфхцчшщъыьэюя";

let index1 = Math.ceil(Math.random()*alphabet.length);

let index2 = Math.ceil(Math.random()*alphabet.length);

let index3 = Math.ceil(Math.random()*alphabet.length);

let index4 = Math.ceil(Math.random()*alphabet.length);

const word = alphabet[index1] + alphabet[index2] + alphabet[index3] + alphabet[index4];

output.innerText = word;
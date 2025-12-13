var i = 0;
var txt = 'A green and white boeing, the one with two floors, is my favorite one, the one with the most memories.I adore everything from the interior to the flight attendant outfits, I remember them well. My most emotional flight was when I left my friends at 5 years old. As a kid. I felt alone, but the sky took me in. I didn’t feel so alone anymore.';
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
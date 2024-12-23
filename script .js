document.getElementById('quote').textContent = 'The way to get started is to quit talking and begin doing.';


let infoBoxes = document.querySelectorAll('.info-box');
infoBoxes.forEach(box => {
    box.style.backgroundColor = "lightgreen"; // change background colour
  });


document.querySelectorAll('li')[2].textContent = 'Complete js project';

// Append the message "Have a great day" to the footer span using querySelector
let footerSpan = document.querySelector('footer span');
footerSpan.textContent += ' - Have a great day!';




document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement('button');
    button.textContent = "Show My Hobbies";
    button.classList.add('btn', 'btn-info', 'm-3');
    document.getElementById('home').appendChild(button);
  
    button.addEventListener('click', function() {
        alert('My hobbies include: coding, playing chess, and playing soccer.');
    });
  });
  
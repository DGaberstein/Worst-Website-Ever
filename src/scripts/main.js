document.addEventListener('DOMContentLoaded', function() {
    // Random pop-up every 5 seconds
    setInterval(function() {
        alert("You can't escape this website!");
    }, 5000);

    // Redirect to a random annoying site every 10 seconds
    setInterval(function() {
        window.location.href = "https://www.example.com"; // Replace with an annoying URL
    }, 10000);

    // Add a click event to all links to show an alert
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Why are you clicking that? Stay here!");
        });
    });

    // Randomly change the background color every 3 seconds
    const colors = ['neon', 'pink', 'lime', 'cyan', 'magenta'];
    setInterval(function() {
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, 3000);
});
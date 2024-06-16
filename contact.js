        // Example JavaScript to toggle between login and logout forms
        document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('userName').textContent = document.getElementById('name').value;
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('logoutForm').style.display = 'block';
        });

        document.getElementById('logoutButton').addEventListener('click', function() {
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('logoutForm').style.display = 'none';
        });
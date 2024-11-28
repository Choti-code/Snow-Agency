function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Name and email are required');
        return false;
    }
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    return true;
    }

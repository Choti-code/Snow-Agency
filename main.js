function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('tel').value;
    let message = document.getElementById('textarea').value;

    if (name === '' || email === '' || number == '' || message == '')
        {
        alert('All areas are required');
        return false;
    }
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    return true;
    }

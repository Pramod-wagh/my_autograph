document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('autograph-btn');
    
    btn.addEventListener('click', function() {
        // REPLACE THIS WITH YOUR ACTUAL GOOGLE FORM LINK
        const formURL = 'https://forms.gle/c9K5JbvWTkbmJiqQ6';
        
        window.open(formURL, '_blank'); // Opens in new tab
        // OR use: window.location.href = formURL; // Same tab
    });
});
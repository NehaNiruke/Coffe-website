// Offer Section(Signup Page)
function signUp(){
    var input = document.getElementById('offer-email');
    var inputValue = input.value.trim(); // Get the value and remove leading/trailing whitespace
    if (inputValue === '') {
        alert('Please enter your email.');
        return; 
    }
    // If all validations pass, show the alert
    alert("Signing Up Successfully!! 🎉✨");
}

//Reservation Section(bookNow)
function bookNow(){
    var input = document.getElementById('book-now');
    var inputValue = input.value.trim(); // Get the value and remove leading/trailing whitespace
    if (inputValue === '') {
        alert('Please fill out all the fields.');
        return; 
    }
    // If all validations pass, show the alert
    alert("Table booked successfully! 🎉 We're excited to welcome you! 🍽️✨");
}

// ContactUs Section(contactForm)
function contactForm() {
    var input = document.getElementById('contact-submit');
    var inputValue = input.value.trim(); 
    if (inputValue === '') {
        alert('Please fill out all the fields');
        return; 
    } else {
        alert("Thank You for Contacting Us! 🙏😊 ");
    }
}

// Footer Section(newsLetter)
function newsLetter() {
    var input = document.getElementById('news-email');
    var inputValue = input.value.trim(); 
    if (inputValue === '') {
        alert('Please enter your email');
        return; 
    } else {
        alert("Thank You for Subscribing Our Channel!!");
    }
}

// OrderNow Section(orderNow)
function orderNow() {
    var nameInput = document.querySelector('.order input[type="text"][placeholder="Name"]');
    var emailInput = document.querySelector('.order input[type="email"][placeholder="Email"]');
    var phoneInput = document.querySelector('.order input[type="text"][placeholder="Phone Number"]');
    var quantityInput = document.querySelector('.order input[type="number"][placeholder="Quantity"]');
    var addressInput = document.querySelector('.order textarea[placeholder="Address"]');

    // Check if any of the input fields are empty
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '' || quantityInput.value.trim() === '' || addressInput.value.trim() === '') {
        alert('Please fill out all the fields');
        return;
    } else {
        alert("Thank you for choosing us! 🎉 Your order has been successfully placed!Expect a delicious treat soon! 😊🍔");
    }
}


//jQuery(animation-fadein) about section(while loading page)
$(document).ready(function() {
    // Hide the content initially
    $("#about").mouseenter(function(){
        $('.about-content h2,p').hide();
    
        // Fade in the content with animation
        $('.about-content h2,p').fadeIn(2000);
    })
});

//jQuery(animation-fadein) about section(while clicking about)
$(document).ready(function() {
    // Hide the content initially
    $("#about-ani").click(function(){
        $('.offer--content').hide();
    
        // Fade in the content with animation
        $('.offer--content').fadeIn(2000);
    })
});

//jQuery(animation-fadein) Offer section(while loading page)
$(document).ready(function() {
    $("#offer").mouseenter(function(){
        // Hide the content initially
        $('.offer--content').hide();
    
        // Fade in the content with animation
        $('.offer--content').fadeIn(2000);
    }); 
});

//jQuery(animation-fadein) Offer section(while clicking offers)
$(document).ready(function() {
    // Hide the content initially
    $("#offers-ani").click(function(){
        $('.offer--content').hide();
    
        // Fade in the content with animation
        $('.offer--content').fadeIn(2000);
    })
});


//jQuery(animation-slideDown) Offer section(while loading page)
$(document).ready(function() {
    $("#service").mouseenter(function(){
        // Hide the content initially
        $('.service-for-animation').hide();
    
        // Fade in the content with animation
        $('.service-for-animation').slideDown(2000);
    }); 
});

//jQuery(animation-slideDown) Service section(while clicking Services)
$(document).ready(function() {
    $("#service-ani").click(function() {
        // Hide the content initially
        $('.service-for-animation').hide();
        
        // Slide down the content with animation
        $('.service-for-animation').slideDown(2500);
    });
});

//jQuery(animation-fadein) Reservation section(while loading page)
$(document).ready(function() {
    $("#reserve").mouseenter(function(){
        // Hide the content initially
        $('.reserve--info').hide();
    
        // Fade in the content with animation
        $('.reserve--info').fadeIn(3000);
    }); 
});

//jQuery(animation-fadein)Reservation section(while clicking Reservation)
$(document).ready(function() {
    $("#reserve-animatn").click(function() {
        // Hide the content initially
        $('.reserve--info').hide();
        
        // Slide down the content with animation
        $('.reserve--info').fadeIn(3000);
    });
});






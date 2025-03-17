document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('rental-modal');
    const rentButton = document.getElementById('rent-now-button');
    const closeButton = document.getElementById('close-modal');
    const rentalForm = document.getElementById('rental-form');
    const successMessage = document.getElementById('success-message');

    // Open Modal
    if (rentButton) {
        rentButton.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    }

    // Close Modal
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form Validation
    rentalForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            // Show success message
            successMessage.style.display = 'block';
            rentalForm.style.display = 'none';

            // Reset form after 5 seconds
            setTimeout(function () {
                rentalForm.reset();
                successMessage.style.display = 'none';
                rentalForm.style.display = 'block';
                modal.style.display = 'none';
            }, 5000);

            // Uncomment for actual submission
            rentalForm.submit();
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate Name
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (!nameInput.value.trim()) {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Validate Email
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Validate Phone
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phone-error');
        const phonePattern = /^\+?[\d\s\-()]{8,20}$/;
        if (!phonePattern.test(phoneInput.value)) {
            phoneError.style.display = 'block';
            isValid = false;
        } else {
            phoneError.style.display = 'none';
        }

        // Validate Pickup Date
        const pickupDateInput = document.getElementById('pickup-date');
        const pickupError = document.getElementById('pickup-error');
        if (!pickupDateInput.value) {
            pickupError.style.display = 'block';
            isValid = false;
        } else {
            pickupError.style.display = 'none';
        }

        // Validate Duration Selection
        const durationNumber = document.getElementById('duration-number');
        const durationUnit = document.getElementById('duration-unit');
        const durationError = document.getElementById('duration-error');

        if (!durationNumber.value || !durationUnit.value) {
            durationError.style.display = 'block';
            isValid = false;
        } else {
            durationError.style.display = 'none';
        }

        // Validate Rental Type
        const rentalType = document.getElementById('rental-type');
        const rentalTypeError = document.getElementById('rental-type-error');
        if (!rentalType.value) {
            rentalTypeError.style.display = 'block';
            isValid = false;
        } else {
            rentalTypeError.style.display = 'none';
        }

        // Show alert if delivery is selected
        if (rentalType.value === 'delivery') {
            alert("Home delivery is only available within 5 km in Namakkal.");
        }

        return isValid;
    }

    // Set min datetime to current time
    const pickupDateInput = document.getElementById('pickup-date');
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const minDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    pickupDateInput.setAttribute('min', minDateTime);
});



// Image Gallery Functionality
function changeImage(thumbnail) {
    // Get the main image element
    const mainImage = document.getElementById('main-product-image');
    
    // Update the main image source with the clicked thumbnail source
    mainImage.src = thumbnail.src;
    
    // Remove active class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // Add active class to the clicked thumbnail
    thumbnail.classList.add('active');
}

// Tab Switching Functionality
function switchTab(tabIndex) {
    // Get all tab items and tab content elements
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Remove active class from all tabs and contents
    tabItems.forEach(item => {
        item.classList.remove('active');
    });
    
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to the selected tab and content
    tabItems[tabIndex].classList.add('active');
    tabContents[tabIndex].classList.add('active');
}

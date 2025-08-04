// Gallery Data
const galleryData = [
    {
        id: 1,
        serviceType: "Pressure Washing",
        beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        afterImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Driveway cleaning in West Bridgford",
        review: {
            rating: 5,
            text: "Amazing transformation! Our driveway looks brand new again.",
            author: "John Smith"
        }
    },
    {
        id: 2,
        serviceType: "Gutter Cleaning",
        beforeImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        afterImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Gutter cleaning in Beeston",
        review: {
            rating: 5,
            text: "Professional service, arrived on time and did a thorough job.",
            author: "Sarah Johnson"
        }
    },
    {
        id: 3,
        serviceType: "Window Cleaning",
        beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        afterImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Commercial window cleaning in Nottingham City Centre",
        review: {
            rating: 4,
            text: "Great service, our office windows have never looked better!",
            author: "Robert Brown"
        }
    },
    {
        id: 4,
        serviceType: "Pressure Washing",
        beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        afterImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Patio cleaning in Mapperley",
        review: {
            rating: 5,
            text: "Highly recommend! Our patio looks fantastic after the cleaning.",
            author: "Emma Wilson"
        }
    },
    {
        id: 5,
        serviceType: "Gutter Cleaning",
        beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        afterImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Gutter repair and cleaning in Arnold",
        review: {
            rating: 5,
            text: "Fixed our leaking gutters and cleaned them perfectly. Very satisfied!",
            author: "David Taylor"
        }
    },
    {
        id: 6,
        serviceType: "Window Cleaning",
        beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        afterImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Residential window cleaning in Ruddington",
        review: {
            rating: 5,
            text: "Excellent service, very professional and left our windows sparkling.",
            author: "Lisa Anderson"
        }
    }
];

// Generate Gallery
function generateGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <div class="before-after-container">
                <img src="${item.beforeImage}" alt="Before ${item.serviceType}" class="before-image">
                <img src="${item.afterImage}" alt="After ${item.serviceType}" class="after-image">
                <input type="range" min="0" max="100" value="50" class="slider" id="slider-${item.id}">
                <div class="slider-line" id="line-${item.id}"></div>
                <div class="slider-button" id="button-${item.id}">⟷</div>
            </div>
            <div class="gallery-content">
                <h3>${item.serviceType}</h3>
                <p>${item.description}</p>
                <div class="review">
                    <div class="review-header">
                        ${generateStars(item.review.rating)}
                        <span>${item.review.author}</span>
                    </div>
                    <p>${item.review.text}</p>
                </div>
            </div>
        `;
        
        galleryContainer.appendChild(galleryItem);
        
        // Add event listener to the slider
        const slider = document.getElementById(`slider-${item.id}`);
        const afterImage = galleryItem.querySelector('.after-image');
        const line = document.getElementById(`line-${item.id}`);
        const button = document.getElementById(`button-${item.id}`);
        
        slider.addEventListener('input', function() {
            const value = this.value;
            afterImage.style.clipPath = `polygon(${value}% 0, 100% 0, 100% 100%, ${value}% 100%)`;
            line.style.left = `${value}%`;
            button.style.left = `${value}%`;
        });
    });
}

// Generate Star Rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Show Notification
function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    notificationText.textContent = message;
    notification.className = 'notification show';
    
    if (isError) {
        notification.classList.add('error');
        notification.querySelector('i').className = 'fas fa-exclamation-circle';
    } else {
        notification.querySelector('i').className = 'fas fa-check-circle';
    }
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Handle Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    // In a real application, you would send this data to a server
    console.log('Contact Form Submission:', { name, email, message });
    
    // Show success message
    showNotification('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Handle Booking Form
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('booking-name').value;
    const email = document.getElementById('booking-email').value;
    const phone = document.getElementById('booking-phone').value;
    const service = document.getElementById('booking-service').value;
    const date = document.getElementById('booking-date').value;
    const message = document.getElementById('booking-message').value;
    
    // In a real application, you would send this data to a server
    console.log('Booking Form Submission:', { 
        name, email, phone, service, date, message 
    });
    
    // Show success message
    showNotification('Your booking request has been submitted! We will contact you to confirm.');
    
    // Reset form
    this.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize Gallery
document.addEventListener('DOMContentLoaded', function() {
    generateGallery();
    
    // Hide loader when page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            document.getElementById('loader').classList.add('hidden');
        }, 500);
    });
});
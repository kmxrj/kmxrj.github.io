// Tab Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all pill navigation buttons and content sections
    const pillButtons = document.querySelectorAll('.pill-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event listeners to each pill button
    pillButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Switch active state on buttons
            pillButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show the corresponding content section
            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // Add subtle entrance animation to content cards
    const contentCards = document.querySelectorAll('.content-card');
    
    function animateIn(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }

    // Apply entrance animation to all cards on page load
    contentCards.forEach(card => {
        if (card.classList.contains('active')) {
            animateIn(card);
        }
    });
});

// Add hover effects for extra flair
function addHoverEffects() {
    const featureBoxes = document.querySelectorAll('.feature-box');
    
    featureBoxes.forEach(box => {
        box.addEventListener('mouseenter', function(e) {
            this.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
        });

        box.addEventListener('mouseleave', function(e) {
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
        });
    });
}

// Initialize hover effects when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addHoverEffects);
} else {
    addHoverEffects();
}

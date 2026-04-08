// Tab Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Switch active state on buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show the corresponding content section
            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });

            // Update page title based on active tab
            updatePageTitle(targetTab);
        });
    });

    // Function to update page title based on active tab
    function updatePageTitle(tabName) {
        const titles = {
            'about': 'About Me | PsyAi & HealthPal',
            'psyai': 'PsyAi - Psychology & AI | MyPortfolio',
            'healthpal': 'HealthPal - Wellness Companion | MyPortfolio'
        };
        
        document.title = titles[tabName] || 'MyPortfolio';
    }

    // Add smooth scroll behavior for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
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

// Optional: Add some interactive hover effects using JavaScript for extra flair
function addHoverEffects() {
    const featureBoxes = document.querySelectorAll('.feature-box');
    
    featureBoxes.forEach(box => {
        box.addEventListener('mouseenter', function(e) {
            // Subtle glow effect on hover
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

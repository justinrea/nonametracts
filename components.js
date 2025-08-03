// Load reusable components
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById('header-container');
            if (container) {
                container.innerHTML = html;
                // Re-initialize Alpine.js for the new content if Alpine is loaded
                if (window.Alpine) {
                    window.Alpine.initTree(container);
                }
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
}

function loadUsageGuidelines() {
    fetch('usage-guidelines.html')
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById('usage-guidelines-container');
            if (container) {
                container.innerHTML = html;
            }
        })
        .catch(error => {
            console.error('Error loading usage guidelines:', error);
        });
}

// Load components when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadUsageGuidelines();
    
    // If Alpine.js is already loaded, wait for it to be ready
    if (window.Alpine) {
        document.addEventListener('alpine:init', () => {
            // Alpine is ready
        });
    }
});

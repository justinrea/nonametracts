// Analytics Configuration
// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 Measurement ID

// Google Analytics 4 Events for tract downloads
function trackDownload(tractName, downloadType) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'file_download', {
            'file_name': tractName,
            'file_extension': downloadType,
            'link_url': window.location.href
        });
    }
}

// Track tract page views
function trackTractView(tractName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'page_title': tractName,
            'page_location': window.location.href
        });
    }
}

// Track contact interactions
function trackContact(method) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'contact', {
            'method': method,
            'page_location': window.location.href
        });
    }
}

// Track navigation to sections
function trackNavigation(section) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'navigate', {
            'section': section,
            'page_location': window.location.href
        });
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const tabs = document.querySelectorAll('.nav-link');
    const allItems = document.querySelectorAll('.tab-pane');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Remove active class from all tabs
            tabs.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            const tabId = this.getAttribute('href').substring(1);

            if (tabId === 'all') {
                allItems.forEach(item => item.style.display = 'block');
            } else {
                allItems.forEach(item => {
                    if (item.id === tabId) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });

    // Initially, show all items for the 'All' tab
    allItems.forEach(item => item.style.display = 'block');
});

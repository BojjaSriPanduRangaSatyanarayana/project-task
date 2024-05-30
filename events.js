document.addEventListener('DOMContentLoaded', function () {
    const events = [
        { id: 1, name: 'Tech Conference 2024', date: '30-05-2024' },
        { id: 2, name: 'Art Expo', date: '31-05-2024' },
        { id: 3, name: 'Science Fair', date: '01-06-2024' },
    ];

    const eventList = document.getElementById('event-list');
    const eventSelect = document.getElementById('event-select');
    const eventSearch = document.getElementById('event-search');
    const registrationForm = document.getElementById('registration-form');

    function displayEvents(eventItems) {
        eventList.innerHTML = '';
        eventSelect.innerHTML = '';

        eventItems.forEach(event => {
            const listItem = document.createElement('li');
            listItem.textContent = `${event.name} - ${event.date}`;
            eventList.appendChild(listItem);

            const optionItem = document.createElement('option');
            optionItem.value = event.id;
            optionItem.textContent = event.name;
            eventSelect.appendChild(optionItem);
        });
    }

    eventSearch.addEventListener('input', function () {
        const searchTerm = eventSearch.value.toLowerCase();
        const filteredEvents = events.filter(event =>
            event.name.toLowerCase().includes(searchTerm) || event.date.includes(searchTerm)
        );
        displayEvents(filteredEvents);
    });

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for registering!');
        registrationForm.reset();
    });

    displayEvents(events);
});

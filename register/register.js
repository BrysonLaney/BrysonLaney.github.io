// register.js

let participantCount = 1;

function participantTemplate(count) {
    return `
    <section class="participant${count}">
        <label for="name${count}">Name:</label>
        <input type="text" id="name${count}" name="name${count}">
        <label for="fee${count}">Fee:</label>
        <input type="number" id="fee${count}" name="fee${count}">
    </section>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const addParticipantButton = document.getElementById('addParticipant');
    const participantsFieldset = document.getElementById('participants');
    const form = document.getElementById('registrationForm');
    const summary = document.getElementById('summary');

    addParticipantButton.addEventListener('click', () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addParticipantButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const total = totalFees();
        const name = document.getElementById('name1').value;
        const message = successTemplate({ name, count: participantCount, total });
        form.style.display = 'none';
        summary.innerHTML = message;
        summary.classList.remove('hide');
    });
});

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, feeElement) => {
        // Convert the value to a number using parseFloat
        const feeValue = parseFloat(feeElement.value) || 0; // Default to 0 if the value is not a number
        return total + feeValue;
    }, 0);
}

function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.count} participants and owe $${info.total} in Fees.`;
}
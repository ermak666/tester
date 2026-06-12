async function loadEmail() {
    const data = JSON.parse(localStorage.getItem('siteContent'));
    return data.settings?.contactEmail || 'default@example.com';
}

document.getElementById('contacts-form').innerHTML = `
    <form id="feedbackForm">
        <input type="text" placeholder="Имя" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Сообщение"></textarea>
        <button type="submit">Отправить</button>
    </form>
`;

const form = document.getElementById('feedbackForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailTo = await loadEmail();
    alert(`Письмо будет отправлено на ${emailTo} (имитация отправки)`);
    // Здесь можно добачить Formspree / EmailJS при желании
});

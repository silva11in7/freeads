// Possible names for randomization
const possibleNames = [
    'Joana D\'arc', 'Elaine Xavier', 'Maria Silva', 'Ana Santos',
    'Clara Oliveira', 'Julia Costa', 'Sofia Pereira', 'Laura Martins'
];

// Generate random number (4 digits)
function generateRandomNumber() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// Generate random valid date
function generateRandomDate() {
    const month = Math.floor(1 + Math.random() * 12).toString().padStart(2, '0');
    const year = Math.floor(24 + Math.random() * 5).toString();
    return `${month}/${year}`;
}

// Generate new card data
function generateNewCardData(id) {
    return {
        id,
        name: possibleNames[Math.floor(Math.random() * possibleNames.length)],
        number: generateRandomNumber(),
        valid: generateRandomDate(),
        cvv: '***'
    };
}

// Initial cards data
let cards = [
    {
        id: '1',
        name: 'Joana D\'arc',
        number: '4005',
        valid: '01/25',
        cvv: '***'
    },
    {
        id: '2',
        name: 'Elaine Xavier',
        number: '2135',
        valid: '03/25',
        cvv: '***'
    }
];

// Render cards
function renderCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = cards.map(card => `
        <div class="card">
            <div class="card-header">
                <span class="card-name">${card.name}</span>
                <i data-lucide="terminal" class="icon"></i>
            </div>
            <div class="card-details">
                <div class="detail-row">
                    <span class="detail-label">Número:</span>
                    <span>${card.number}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Valid:</span>
                    <span>${card.valid}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">CVV:</span>
                    <span>${card.cvv}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-initialize Lucide icons
    lucide.createIcons();
}

// Toggle menu
document.getElementById('toggleMenu').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
});

// Handle F5 key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'F5' || (event.key.toLowerCase() === 'f' && event.key === '5')) {
        event.preventDefault();
        cards = cards.map(card => generateNewCardData(card.id));
        renderCards();
    }
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    lucide.createIcons();
});
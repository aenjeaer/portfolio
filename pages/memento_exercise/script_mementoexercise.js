// script.js
let currentScreen = 0;
let connections = [];
let colors = {};
let currentLang = 'id';

const quotes = [
    "The wound is the place where the Light enters you. - Rumi",
    "You are braver than you believe, stronger than you seem, and smarter than you think. - Winnie the Pooh",
    "Every moment is a fresh beginning. - T.S. Eliot"
];

const i18n = {
    'id': {
        'welcome': 'Selamat datang di Memento Exercise!',
        'description': `Latihan ini membantu Anda merefleksikan momen sulit (low moment) dan momen bahagia (high moment) dalam hidup. Dengan menghubungkan keduanya, Anda dapat melihat bagaimana pengalaman sulit membawa Anda menuju kesuksesan.`,
        'next': 'Lanjut',
        'lowTitle': 'LOW MOMENT',
        'lowDesc': 'Apa yang membuat Anda sedih atau kecewa?',
        'highTitle': 'HIGH MOMENT',
        'highDesc': 'Momen apa yang membuat Anda bangga dan bahagia?',
        'done': 'Selesai',
        'congrats': 'Selamat! 🎉',
        'home': 'Home',
        'save': 'Simpan',
        'edit': 'Edit'
    },
    'en': {
        // Terjemahan Inggris di sini
    }
};

function nextScreen(step) {
    document.querySelectorAll('.screen')[currentScreen].classList.remove('active');
    currentScreen = step;
    document.querySelectorAll('.screen')[currentScreen].classList.add('active');
}

function addMoment(type) {
    const textarea = document.getElementById(`${type}-textarea`);
    const text = textarea.value.trim();
    if (!text) return;

    const list = document.getElementById(`${type}-list`);
    const card = document.createElement('div');
    card.className = 'moment-card';
    card.textContent = text;
    card.dataset.type = type;
    
    if(type === 'high') {
        card.addEventListener('click', () => highlightConnections(card));
    }

    list.appendChild(card);
    textarea.value = '';
}

function highlightConnections(selectedHigh) {
    document.querySelectorAll('.moment-card').forEach(card => {
        if(card.dataset.type === 'high' && card !== selectedHigh) {
            card.style.opacity = '0.3';
            card.style.transform = 'scale(0.95)';
        } else {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }
    });
    
    // Highlight connections
}

function drawConnections() {
    const svg = document.getElementById('connector');
    svg.innerHTML = `
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#4CAF50"/>
            </marker>
        </defs>
    `;

    connections.forEach(conn => {
        const start = conn.low.getBoundingClientRect();
        const end = conn.high.getBoundingClientRect();
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.classList.add('connection-line');
        line.setAttribute('x1', start.left + start.width/2);
        line.setAttribute('y1', start.top + start.height/2);
        line.setAttribute('x2', end.left + end.width/2);
        line.setAttribute('y2', end.top + end.height/2);
        
        // Tambahkan bullet
        const bullet1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        bullet1.setAttribute('cx', start.left + start.width/2);
        bullet1.setAttribute('cy', start.top + start.height/2);
        bullet1.setAttribute('r', '5');
        bullet1.setAttribute('fill', '#4CAF50');
        
        const bullet2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        bullet2.setAttribute('cx', end.left + end.width/2);
        bullet2.setAttribute('cy', end.top + end.height/2);
        bullet2.setAttribute('r', '5');
        bullet2.setAttribute('fill', '#4CAF50');

        svg.appendChild(line);
        svg.appendChild(bullet1);
        svg.appendChild(bullet2);
    });
}

function showFinal() {
    document.getElementById('quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];
    nextScreen(4);
}

function goHome() {
    currentScreen = 0;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.querySelector('.welcome').classList.add('active');
}

function editConnections() {
    currentScreen = 3;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.querySelector('.connection').classList.add('active');
}

function showSave() {
    alert('Untuk menyimpan hasil, silahkan buat akun terlebih dahulu.');
}

// Event Listeners
window.addEventListener('resize', drawConnections);
document.getElementById('id-flag').addEventListener('click', () => setLanguage('id'));
document.getElementById('en-flag').addEventListener('click', () => setLanguage('en'));

// Inisialisasi
function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = i18n[lang][key];
    });
}
setLanguage('id');

let selectedHigh = null;
let selectedLow = null;

function setupConnectionScreen() {
    const highContainer = document.getElementById('high-container');
    const lowContainer = document.getElementById('low-container');

    // Pindahkan semua High Moment ke high-container
    const highMoments = document.querySelectorAll('#high-list .moment-card');
    highMoments.forEach(moment => {
        highContainer.appendChild(moment.cloneNode(true));
        moment.remove(); // Hapus dari list asli
    });

    // Pindahkan semua Low Moment ke low-container
    const lowMoments = document.querySelectorAll('#low-list .moment-card');
    lowMoments.forEach(moment => {
        lowContainer.appendChild(moment.cloneNode(true));
        moment.remove(); // Hapus dari list asli
    });

    // Tambahkan event listener untuk memilih High Moment
    highContainer.querySelectorAll('.moment-card').forEach(card => {
        card.addEventListener('click', () => {
            selectedHigh = card;
            highlightSelectedHigh();
        });
    });

    // Tambahkan event listener untuk memilih Low Moment
    lowContainer.querySelectorAll('.moment-card').forEach(card => {
        card.addEventListener('click', () => {
            if (selectedHigh) {
                selectedLow = card;
                connectMoments(selectedHigh, selectedLow);
                resetSelection();
            }
        });
    });
}

function highlightSelectedHigh() {
    const highContainer = document.getElementById('high-container');
    const lowContainer = document.getElementById('low-container');

    // Highlight High Moment yang dipilih
    highContainer.querySelectorAll('.moment-card').forEach(card => {
        if (card === selectedHigh) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
            card.classList.add('disabled');
        }
    });

    // Enable semua Low Moment
    lowContainer.querySelectorAll('.moment-card').forEach(card => {
        card.classList.remove('disabled');
    });
}

function connectMoments(high, low) {
    // Tambahkan koneksi ke array connections
    connections.push({ high, low });

    // Gambar ulang koneksi
    drawConnections();
}

function resetSelection() {
    selectedHigh = null;
    selectedLow = null;

    const highContainer = document.getElementById('high-container');
    const lowContainer = document.getElementById('low-container');

    // Reset semua card
    highContainer.querySelectorAll('.moment-card').forEach(card => {
        card.classList.remove('selected', 'disabled');
    });

    lowContainer.querySelectorAll('.moment-card').forEach(card => {
        card.classList.remove('disabled');
    });
}

function drawConnections() {
    const svg = document.getElementById('connector');
    svg.innerHTML = `
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#4CAF50"/>
            </marker>
        </defs>
    `;

    connections.forEach(conn => {
        const start = conn.low.getBoundingClientRect();
        const end = conn.high.getBoundingClientRect();

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.classList.add('connection-line');
        line.setAttribute('x1', start.left + start.width / 2);
        line.setAttribute('y1', start.top + start.height / 2);
        line.setAttribute('x2', end.left + end.width / 2);
        line.setAttribute('y2', end.top + end.height / 2);

        svg.appendChild(line);
    });
}

// Panggil setupConnectionScreen saat pindah ke halaman koneksi
function nextScreen(step) {
    document.querySelectorAll('.screen')[currentScreen].classList.remove('active');
    currentScreen = step;
    document.querySelectorAll('.screen')[currentScreen].classList.add('active');

    if (step === 3) {
        setupConnectionScreen();
    }
}
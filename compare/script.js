const stateData = {
    state1: {
        pieData: [3000, 113590, 3000, 0, 554323],
        lineData: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
        cardColor: 'yellow',
        cardData: {
            total: '20 Lakhs',
            today: '+20,000 Today',
        }
    },
    state2: {
        pieData: [2000, 80000, 1000, 500, 250000],
        lineData: Array.from({ length: 30 }, () => Math.floor(Math.random() * 50)),
        cardColor: 'blue',
        cardData: {
            total: '15 Lakhs',
            today: '+15,000 Today',
        }
    },
    state3: {
        pieData: [5000, 120000, 4000, 200, 600000],
        lineData: Array.from({ length: 30 }, () => Math.floor(Math.random() * 150)),
        cardColor: 'green',
        cardData: {
            total: '25 Lakhs',
            today: '+25,000 Today',
        }
    }
};

const cards = document.querySelectorAll('.card');

const ctxPie1 = document.getElementById('pieChart1').getContext('2d');
const ctxPie2 = document.getElementById('pieChart2').getContext('2d');
const ctxLine1 = document.getElementById('lineChart1').getContext('2d');
const ctxLine2 = document.getElementById('lineChart2').getContext('2d');

// Initialize Donut Chart 1 (formerly Pie Chart 1)
const donutChart1 = new Chart(ctxPie1, {
    type: 'doughnut', // Changed from 'pie' to 'doughnut'
    data: {
        labels: ['Leadership', 'Community Engagement', 'Inclusive Practices', 'Infrastructure', 'Curriculum & Pedagogy'],
        datasets: [{
            data: stateData.state1.pieData,
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff']
        }]
    },
    options: {
        responsive: true
    }
});

// Initialize Donut Chart 2 (formerly Pie Chart 2)
const donutChart2 = new Chart(ctxPie2, {
    type: 'doughnut', // Changed from 'pie' to 'doughnut'
    data: {
        labels: ['Leadership', 'Community Engagement', 'Inclusive Practices', 'Infrastructure', 'Curriculum & Pedagogy'],
        datasets: [{
            data: stateData.state2.pieData,
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff']
        }]
    },
    options: {
        responsive: true
    }
});

// Initialize Line Chart 1
const lineChart1 = new Chart(ctxLine1, {
    type: 'line',
    data: {
        labels: Array.from({ length: 30 }, (_, i) => i + 1),
        datasets: [{
            label: 'State 1 Data',
            data: stateData.state1.lineData,
            borderColor: '#ff6384',
            fill: false
        }]
    },
    options: {
        responsive: true
    }
});

// Initialize Line Chart 2
const lineChart2 = new Chart(ctxLine2, {
    type: 'line',
    data: {
        labels: Array.from({ length: 30 }, (_, i) => i + 1),
        datasets: [{
            label: 'State 2 Data',
            data: stateData.state2.lineData,
            borderColor: '#36a2eb',
            fill: false
        }]
    },
    options: {
        responsive: true
    }
});

function updateCharts(state1, state2) {
    // Update donut charts
    donutChart1.data.datasets[0].data = stateData[state1].pieData;
    donutChart1.update();

    donutChart2.data.datasets[0].data = stateData[state2].pieData;
    donutChart2.update();

    // Update line charts
    lineChart1.data.datasets[0].data = stateData[state1].lineData;
    lineChart1.update();

    lineChart2.data.datasets[0].data = stateData[state2].lineData;
    lineChart2.update();

    // Update card colors based on state selection
    cards[0].className = `card ${stateData[state1].cardColor}`;
    cards[1].className = `card ${stateData[state1].cardColor}`;
    cards[2].className = `card ${stateData[state2].cardColor}`;
    cards[3].className = `card ${stateData[state2].cardColor}`;

    // Update card data based on state selection
    cards[0].querySelector('h2').textContent = stateData[state1].cardData.total;
    cards[0].querySelector('.today').textContent = stateData[state1].cardData.today;
    cards[1].querySelector('h2').textContent = stateData[state1].cardData.total;
    cards[1].querySelector('.today').textContent = stateData[state1].cardData.today;

    cards[2].querySelector('h2').textContent = stateData[state2].cardData.total;
    cards[2].querySelector('.today').textContent = stateData[state2].cardData.today;
    cards[3].querySelector('h2').textContent = stateData[state2].cardData.total;
    cards[3].querySelector('.today').textContent = stateData[state2].cardData.today;
}

// Event listeners for state selectors
document.getElementById('state1-select').addEventListener('change', function() {
    const state1 = this.value;
    const state2 = document.getElementById('state2-select').value;
    updateCharts(state1, state2);
});

document.getElementById('state2-select').addEventListener('change', function() {
    const state2 = this.value;
    const state1 = document.getElementById('state1-select').value;
    updateCharts(state1, state2);
});

// Initial chart setup
updateCharts('state1', 'state2');

// Chart.js sample data and initialization for pie charts
const pieData = {
    labels: ['Leadership', 'Community Engagement', 'Inclusive Practices', 'Infrastructure', 'Curriculum & Pedagogy'],
    datasets: [{
        label: 'Number of Improvements',
        data: [3000, 113590, 3000, 0, 554323],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#E7E9ED', '#4BC0C0'],
    }]
};

const pieConfig = {
    type: 'pie',
    data: pieData,
};

const pieChart1 = new Chart(
    document.getElementById('pieChart1'),
    pieConfig
);

const pieChart2 = new Chart(
    document.getElementById('pieChart2'),
    pieConfig
);

// Chart.js sample data and initialization for line charts
const lineData = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
        {
            label: 'Lorem Ipsum',
            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
            fill: false,
            borderColor: 'blue',
        },
        {
            label: 'Lorem Ipsum',
            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
            fill: false,
            borderColor: 'green',
        }
    ]
};

const lineConfig = {
    type: 'line',
    data: lineData,
};

const lineChart1 = new Chart(
    document.getElementById('lineChart1'),
    lineConfig
);

const lineChart2 = new Chart(
    document.getElementById('lineChart2'),
    lineConfig
);

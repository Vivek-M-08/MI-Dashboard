// Initialize the map
var map = L.map('map').setView([20.5937, 78.9629], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Add markers (replace with your actual data)
var markersData = [
    { lat: 28.7041, lng: 77.1025, url: 'https://example.com/delhi' },
    { lat: 19.0760, lng: 72.8777, url: 'https://example.com/mumbai' },
    // Add more markers here
];

markersData.forEach(function (marker) {
    L.marker([marker.lat, marker.lng]).addTo(map)
        .bindPopup(`<a href="${marker.url}" target="_blank">Go to School</a>`);
});


// Initializing data for the trend chart and leading states by year
var trendData = {
    '2022': [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    '2023': [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125],
    '2024': [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]
};

var leadingStatesData = {
    '2022': [
        { state: 'Andhra Pradesh', percentage: 70 },
        { state: 'Haryana', percentage: 60 },
        { state: 'Karnataka', percentage: 55 },
        { state: 'Bihar', percentage: 45 },
        { state: 'Telangana', percentage: 40 },
        { state: 'Nagaland', percentage: 30 }
    ],
    '2023': [
        { state: 'Andhra Pradesh', percentage: 75 },
        { state: 'Haryana', percentage: 65 },
        { state: 'Karnataka', percentage: 60 },
        { state: 'Bihar', percentage: 50 },
        { state: 'Telangana', percentage: 45 },
        { state: 'Nagaland', percentage: 35 }
    ],
    '2024': [
        { state: 'Andhra Pradesh', percentage: 77 },
        { state: 'Haryana', percentage: 60 },
        { state: 'Karnataka', percentage: 64 },
        { state: 'Bihar', percentage: 43 },
        { state: 'Telangana', percentage: 40 },
        { state: 'Nagaland', percentage: 30 }
    ]
};

// Initialize the chart
var ctx = document.getElementById('trendChart').getContext('2d');
var trendChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Improvement Trend',
            data: trendData['2024'], // Default to 2024
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    }
});

// Update the leading states list
function updateLeadingStates(year) {
    var leadingStatesList = document.querySelector('.leading-states ul');
    leadingStatesList.innerHTML = ''; // Clear existing list

    leadingStatesData[year].forEach(function (state) {
        var listItem = document.createElement('li');
        listItem.textContent = state.state + ': ' + state.percentage + '%';
        leadingStatesList.appendChild(listItem);
    });
}

// Initialize with default 2024 data
updateLeadingStates('2024');

// Year switcher event listeners
document.querySelectorAll('.year-switcher button').forEach(function (button) {
    button.addEventListener('click', function () {
        // Remove 'active' class from all buttons
        document.querySelectorAll('.year-switcher button').forEach(function (btn) {
            btn.classList.remove('active');
        });
        
        // Add 'active' class to the clicked button
        button.classList.add('active');

        var selectedYear = button.textContent;
        
        // Update chart data
        trendChart.data.datasets[0].data = trendData[selectedYear];
        trendChart.update();
        
        // Update leading states list
        updateLeadingStates(selectedYear);
    });
});

// var ctx = document.getElementById('trendChart').getContext('2d');
// var trendChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         datasets: [{
//             label: 'Improvement Trend',
//             data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], // Replace with actual data
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 2,
//             fill: false
//         }]
//     }
// });

// Initialize the NAS vs MIP submissions comparison chart
var comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
var comparisonChart = new Chart(comparisonCtx, {
    type: 'line',
    data: {
        labels: [
            'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 
            'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022',
            'Nov 2022', 'Dec 2022', 'Jan 2023', 'Feb 2023', 'Mar 2023',
            'Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023',
            'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024',
            'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024',
            'Jul 2024', 'Aug 2024'
        ],
        datasets: [
            {
                label: 'NAS',
                data: [4, 5, 6, 7, 8, 7, 6, 7, 8, 9, 8, 7, 8, 9, 7, 6, 5, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9, 7, 6, 8, 9, 8],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true
            },
            {
                label: 'MIP',
                data: [2, 3, 4, 5, 6, 5, 4, 5, 6, 7, 6, 5, 6, 7, 5, 4, 3, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 5, 4, 6, 7, 6],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Number of Submissions'
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
});

// Data for Themes Pie Chart
var themesPieCtx = document.getElementById('themesPieChart').getContext('2d');
var themesPieChart = new Chart(themesPieCtx, {
    type: 'pie',
    data: {
        labels: ['Technology', 'Pedagogy', 'Curriculum', 'Human Resources', 'Energy', 'Infrastructure'],
        datasets: [{
            label: 'Themes',
            data: [238, 178, 126, 70, 215, 150],
            backgroundColor: [
                '#42a5f5',
                '#ba68c8',
                '#ef5350',
                '#26c6da',
                '#ffa726',
                '#66bb6a'
            ],
            borderColor: '#fff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                align: 'center'
            }
        }
    }
});

// Data for Drilldown Donut Chart
var donutCtx = document.getElementById('drilldownDonutChart').getContext('2d');
var drilldownDonutChart = new Chart(donutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Started', 'Completed', 'In Progress'],
        datasets: [{
            label: 'MIP',
            data: [32, 50, 18],
            backgroundColor: [
                '#ffcccb',
                '#ffb6c1',
                '#ff8a80'
            ],
            borderColor: '#fff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
                // position: 'top',
                // align: 'center'
            }
        }
    }
});


document.getElementById('themesPieChart').onclick = function(evt) {
    var activePoints = themesPieChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
    var firstPoint = activePoints[0];
    
    if (firstPoint) {
        var label = themesPieChart.data.labels[firstPoint.index];
        
        // Example data for drill-down, you can replace with dynamic data based on label
        var drillDownData = {
            'Technology': [32, 50, 18],
            'Pedagogy': [40, 30, 30],
            'Curriculum': [20, 60, 20],
            'Human Resources': [10, 70, 20],
            'Energy': [25, 50, 25],
            'Infrastructure': [15, 65, 20]
        };
        
        drilldownDonutChart.data.datasets[0].data = drillDownData[label];
        drilldownDonutChart.update();
    }
};

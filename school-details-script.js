// script.js


// Get the URL query parameters
const urlParams = new URLSearchParams(window.location.search);

// Example JSON data
const schoolData = {
    "school_id_55": {
        "name": "Government Middle School. Begusarai",
        "image_url": "https://lh3.googleusercontent.com/p/AF1QipPJ1q1skHKSed3k9FjV3L9PdJBc7VEBNjCWpVAd=s1360-w1360-h1020",
        "projects_in_progress": 3,
        "projects_completed": 5,
        "categories": [
            {"category": "Curriculum & Pedagogy", "count": 5},
            {"category": "Infrastructure", "count": 3}
        ],
        "projects": [
            {
                "id": "project_1",
                "title": "Improvement of Infrastructure",
                "objective": "To enable the community to improve the infrastructural development of the surrounding area.",
                "description": "To engage with teachers and SMC members to create a plan to bring back students who have dropped out of school.",
                "duration": "4 Weeks",
                "recommendedFor": "HM & Teachers, Panchayat",
                "domain": "Curriculum, Pedagogy",
                "name": "Project A",
                "category": "Curriculum & Pedagogy",
                "thumbnail": "https://lh3.googleusercontent.com/p/AF1QipOyNMBNVSdDn5xiLMQRx91GZdrR8mauiLMt8LIf=s1360-w1360-h1020",
                "goal": "To improve curriculum",
                "recommended_for": ["Teachers", "Panchayat"],
                "steps": [
                    "Assess current resources",
                    "Identify key areas for improvement",
                    "Implement changes"
                ]
            },
            {
                "id": "project_2",
                "name": "Project B",
                "category": "Curriculum & Pedagogy",
                "thumbnail": "https://lh3.googleusercontent.com/p/AF1QipOyNMBNVSdDn5xiLMQRx91GZdrR8mauiLMt8LIf=s1360-w1360-h1020",
                "goal": "To improve curriculum",
                "objective": "To enhance the learning experience.",
                "duration": "4 weeks",
                "recommended_for": ["Teachers", "Panchayat"],
                "steps": [
                    "Assess current resources",
                    "Identify key areas for improvement",
                    "Implement changes"
                ]
            },
            {
                "id": "project_3",
                "name": "Project W",
                "category": "Curriculum & Pedagogy",
                "thumbnail": "https://lh3.googleusercontent.com/p/AF1QipOyNMBNVSdDn5xiLMQRx91GZdrR8mauiLMt8LIf=s1360-w1360-h1020",
                "goal": "To improve curriculum",
                "objective": "To enhance the learning experience.",
                "duration": "4 weeks",
                "recommended_for": ["Teachers", "Panchayat"],
                "steps": [
                    "Assess current resources",
                    "Identify key areas for improvement",
                    "Implement changes"
                ]
            },
            {
                "id": "project_4",
                "name": "Project X",
                "category": "Curriculum & Pedagogy",
                "thumbnail": "https://lh3.googleusercontent.com/p/AF1QipOyNMBNVSdDn5xiLMQRx91GZdrR8mauiLMt8LIf=s1360-w1360-h1020",
                "goal": "To improve curriculum",
                "objective": "To enhance the learning experience.",
                "duration": "4 weeks",
                "recommended_for": ["Teachers", "Panchayat"],
                "steps": [
                    "Assess current resources",
                    "Identify key areas for improvement",
                    "Implement changes"
                ]
            },
            {
                "id": "project_5",
                "name": "Project Y",
                "category": "Curriculum & Pedagogy",
                "thumbnail": "https://lh3.googleusercontent.com/p/AF1QipOyNMBNVSdDn5xiLMQRx91GZdrR8mauiLMt8LIf=s1360-w1360-h1020",
                "goal": "To improve curriculum",
                "objective": "To enhance the learning experience.",
                "duration": "4 weeks",
                "recommended_for": ["Teachers", "Panchayat"],
                "steps": [
                    "Assess current resources",
                    "Identify key areas for improvement",
                    "Implement changes"
                ]
            },
            {
                "id": "project_6",
                "name": "Project Z",
                "category": "Curriculum & Pedagogy",
                "thumbnail": "https://lh3.googleusercontent.com/p/AF1QipOyNMBNVSdDn5xiLMQRx91GZdrR8mauiLMt8LIf=s1360-w1360-h1020",
                "goal": "To improve curriculum",
                "objective": "To enhance the learning experience.",
                "duration": "4 weeks",
                "recommended_for": ["Teachers", "Panchayat"],
                "steps": [
                    "Assess current resources",
                    "Identify key areas for improvement",
                    "Implement changes"
                ]
            }
        ]
    },
    "school_id_45": {
            "name": "Government Middle School. Devanahalli",
            "image_url": "https://lh3.googleusercontent.com/p/AF1QipPJ1q1skHKSed3k9FjV3L9PdJBc7VEBNjCWpVAd=s1360-w1360-h1020",
            "projects_in_progress": 3,
            "projects_completed": 5,
            "categories": [
                {"category": "Curriculum & Pedagogy", "count": 5},
                {"category": "Infrastructure", "count": 3}
            ],
            "projects": [
                {
                    "id": "project_1",
                    "title": "Improvement of Infrastructure",
                    "objective": "To enable the community to improve the infrastructural development of the surrounding area.",
                    "description": "To engage with teachers and SMC members to create a plan to bring back students who have dropped out of school.",
                    "duration": "4 Weeks",
                    "recommendedFor": "HM & Teachers, Panchayat",
                    "domain": "Curriculum, Pedagogy",
                    "name": "Project A",
                    "category": "Curriculum & Pedagogy",
                    "thumbnail": "https://lh3.googleusercontent.com/p/AF1QipOyNMBNVSdDn5xiLMQRx91GZdrR8mauiLMt8LIf=s1360-w1360-h1020",
                    "goal": "To improve curriculum",
                    "recommended_for": ["Teachers", "Panchayat"],
                    "steps": [
                        "Assess current resources",
                        "Identify key areas for improvement",
                        "Implement changes"
                    ]
                },
                {
                    "id": "project_2",
                    "name": "Project B",
                    "category": "Curriculum & Pedagogy",
                    "thumbnail": "https://lh3.googleusercontent.com/p/AF1QipOyNMBNVSdDn5xiLMQRx91GZdrR8mauiLMt8LIf=s1360-w1360-h1020",
                    "goal": "To improve curriculum",
                    "objective": "To enhance the learning experience.",
                    "duration": "4 weeks",
                    "recommended_for": ["Teachers", "Panchayat"],
                    "steps": [
                        "Assess current resources",
                        "Identify key areas for improvement",
                        "Implement changes"
                    ]
                },
                {
                    "id": "project_3",
                    "name": "Project W",
                    "category": "Curriculum & Pedagogy",
                    "thumbnail": "https://lh3.googleusercontent.com/p/AF1QipOyNMBNVSdDn5xiLMQRx91GZdrR8mauiLMt8LIf=s1360-w1360-h1020",
                    "goal": "To improve curriculum",
                    "objective": "To enhance the learning experience.",
                    "duration": "4 weeks",
                    "recommended_for": ["Teachers", "Panchayat"],
                    "steps": [
                        "Assess current resources",
                        "Identify key areas for improvement",
                        "Implement changes"
                    ]
                },
                {
                    "id": "project_4",
                    "name": "Project X",
                    "category": "Curriculum & Pedagogy",
                    "thumbnail": "https://lh3.googleusercontent.com/p/AF1QipOyNMBNVSdDn5xiLMQRx91GZdrR8mauiLMt8LIf=s1360-w1360-h1020",
                    "goal": "To improve curriculum",
                    "objective": "To enhance the learning experience.",
                    "duration": "4 weeks",
                    "recommended_for": ["Teachers", "Panchayat"],
                    "steps": [
                        "Assess current resources",
                        "Identify key areas for improvement",
                        "Implement changes"
                    ]
                },
                {
                    "id": "project_5",
                    "name": "Project Y",
                    "category": "Curriculum & Pedagogy",
                    "thumbnail": "https://lh3.googleusercontent.com/p/AF1QipOyNMBNVSdDn5xiLMQRx91GZdrR8mauiLMt8LIf=s1360-w1360-h1020",
                    "goal": "To improve curriculum",
                    "objective": "To enhance the learning experience.",
                    "duration": "4 weeks",
                    "recommended_for": ["Teachers", "Panchayat"],
                    "steps": [
                        "Assess current resources",
                        "Identify key areas for improvement",
                        "Implement changes"
                    ]
                },
                {
                    "id": "project_6",
                    "name": "Project Z",
                    "category": "Curriculum & Pedagogy",
                    "thumbnail": "https://lh3.googleusercontent.com/p/AF1QipOyNMBNVSdDn5xiLMQRx91GZdrR8mauiLMt8LIf=s1360-w1360-h1020",
                    "goal": "To improve curriculum",
                    "objective": "To enhance the learning experience.",
                    "duration": "4 weeks",
                    "recommended_for": ["Teachers", "Panchayat"],
                    "steps": [
                        "Assess current resources",
                        "Identify key areas for improvement",
                        "Implement changes"
                    ]
                }
            ]
        }
    // Additional schools...
};

const schoolId = urlParams.get('school'); // Replace with dynamic ID retrieval
const school = schoolData[schoolId];

// Update page content
document.getElementById('school-name').textContent = school.name;
document.getElementById('school-image').src = school.image_url;
document.getElementById('projects-in-progress').textContent = school.projects_in_progress;
document.getElementById('projects-completed').textContent = school.projects_completed;

// Render category breakdown chart using Chart.js
// Render category breakdown chart using Chart.js
const ctx = document.getElementById('category-chart').getContext('2d');
new Chart(ctx, {
    type: 'pie', // or 'doughnut' for donut chart
    data: {
        labels: school.categories.map(c => c.category),
        datasets: [{
            data: school.categories.map(c => c.count),
            backgroundColor: ['#3498db', '#e74c3c']
        }]
    },
    options: {
        responsive: false, // Disable responsive to keep fixed size
        maintainAspectRatio: false // You can also disable this if the aspect ratio should not be preserved
    }
});


// Render project cards
const projectCardsContainer = document.getElementById('project-cards');
school.projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.thumbnail}" alt="Project Thumbnail">
        <div>
            <h3>${project.name}</h3>
            <p>Category: ${project.category}</p>
            <p>${project.goal}</p>
        </div>
    `;
    projectCard.onclick = () => loadProjectDetails(project);
    projectCardsContainer.appendChild(projectCard);
});

function loadProjectDetails(project) {
    document.getElementById('project-title').textContent = project.name;
    document.getElementById('project-objective').textContent = project.objective;
    document.getElementById('project-duration').textContent = project.duration;
    document.getElementById('project-recommended').textContent = project.recommended_for.join(', ');

    const stepsList = document.getElementById('project-steps');
    stepsList.innerHTML = '';
    project.steps.forEach(step => {
        const stepItem = document.createElement('li');
        stepItem.textContent = step;
        stepsList.appendChild(stepItem);
    });
}

// Load initial project details (first project)
if (school.projects.length > 0) {
    loadProjectDetails(school.projects[0]);
}
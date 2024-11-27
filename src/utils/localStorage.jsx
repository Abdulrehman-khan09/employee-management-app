const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Complete project documentation",
                "taskDescription": "Prepare the documentation for the new project.",
                "taskDate": "2024-11-30",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team meeting",
                "taskDescription": "Attend the weekly team meeting.",
                "taskDate": "2024-11-28",
                "category": "Meetings",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve the critical issues reported in the last sprint.",
                "taskDate": "2024-11-29",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare financial report",
                "taskDescription": "Compile the quarterly financial report for management.",
                "taskDate": "2024-12-01",
                "category": "Finance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Update software dependencies",
                "taskDescription": "Upgrade libraries and frameworks for the current project.",
                "taskDate": "2024-11-30",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Review PRs",
                "taskDescription": "Review pull requests submitted by team members.",
                "taskDate": "2024-11-28",
                "category": "Code Review",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Organize workshop",
                "taskDescription": "Plan and coordinate the upcoming training workshop.",
                "taskDate": "2024-12-05",
                "category": "Events",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Backup data",
                "taskDescription": "Ensure all critical data is backed up.",
                "taskDate": "2024-11-29",
                "category": "IT Operations",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Client call",
                "taskDescription": "Discuss project updates with the client.",
                "taskDate": "2024-11-28",
                "category": "Communication",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Design review",
                "taskDescription": "Provide feedback on the latest UI/UX designs.",
                "taskDate": "2024-12-02",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Inventory check",
                "taskDescription": "Audit the current stock inventory.",
                "taskDate": "2024-12-01",
                "category": "Operations",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Create marketing plan",
                "taskDescription": "Draft a plan for the next product launch.",
                "taskDate": "2024-12-10",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Debug server",
                "taskDescription": "Identify and resolve server performance issues.",
                "taskDate": "2024-11-30",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Onboard new employee",
                "taskDescription": "Guide the new hire through the onboarding process.",
                "taskDate": "2024-11-27",
                "category": "HR",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Test new features",
                "taskDescription": "Perform quality assurance testing on new app features.",
                "taskDate": "2024-12-03",
                "category": "QA",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Create tutorial",
                "taskDescription": "Record a video tutorial for the team on the new process.",
                "taskDate": "2024-12-01",
                "category": "Training",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    //whenever passing any value pass using stringify
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }


    //converts the string of json , back to json
    // console.log(JSON.parse(data));
}
const { v4: uuidv4 } = require("uuid");

module.exports = [
    {
        id: uuidv4(),
        question: 'Which tool is commonly used for container orchestration?',
        answers: [
            'Docker',
            'Kubernetes',
            'Jenkins',
            'Terraform'
        ],
        correct: 1
    },
    {
        id: uuidv4(),
        question: 'What does CI/CD stand for?',
        answers: [
            'Continuous Integration/Continuous Deployment',
            'Code Integration/Code Delivery',
            'Continuous Improvement/Continuous Development',
            'Code Implementation/Code Debugging'
        ],
        correct: 0
    },
    {
        id: uuidv4(),
        question: 'Which of the following is an Infrastructure as Code (IaC) tool?',
        answers: [
            'Ansible',
            'Nagios',
            'Prometheus',
            'Grafana'
        ],
        correct: 0
    },
    {
        id: uuidv4(),
        question: 'Which command is used to check the status of a systemd service?',
        answers: [
            'systemctl status',
            'service check',
            'systemd status',
            'statusctl service'
        ],
        correct: 0
    },
    {
        id: uuidv4(),
        question: 'What is the main purpose of Docker?',
        answers: [
            'Monitoring applications',
            'Automating deployments',
            'Containerizing applications',
            'Managing source code'
        ],
        correct: 2
    },
    {
        id: uuidv4(),
        question: 'Which tool is primarily used for continuous integration?',
        answers: [
            'Jenkins',
            'Kubernetes',
            'Docker',
            'Vagrant'
        ],
        correct: 0
    },
    {
        id: uuidv4(),
        question: 'Which file is used to define a Docker image?',
        answers: [
            'Dockerfile',
            'docker-compose.yml',
            'Makefile',
            'build.yaml'
        ],
        correct: 0
    },
    {
        id: uuidv4(),
        question: 'What is the default port for SSH?',
        answers: [
            '21',
            '22',
            '80',
            '443'
        ],
        correct: 1
    },
    {
        id: uuidv4(),
        question: 'Which tool is used for monitoring and alerting in DevOps?',
        answers: [
            'Prometheus',
            'Terraform',
            'Ansible',
            'Docker'
        ],
        correct: 0
    }
]
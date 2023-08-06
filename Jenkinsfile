pipeline {

    agent {
        label "jenkins-agent"
    }

    tools {
        nodejs "nodejs"
    }

    stages {
        stage("Cleanup Workspace") {
            steps {
                cleanWs(deleteDirs: true) // Explicitly name the arguments
            }
        }

        stage("Checkout from SCM") {
            steps {
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/havishkah/hospital_management_system'
            }
        }

        stage("Build Client") {
            steps {
                dir("client") {
                    sh "npm install"
                }
            }
        }

        stage("Test Client") {
            steps {
                dir("client") {
                    sh "npm test"
                }
            }
        }

        stage("Build Server") {
            steps {
                dir("server") {
                    sh "npm install"
                }
            }
        }

        stage("Test Server") {
            steps {
                dir("server") {
                    sh "npm test"
                }
            }
        }

    }

}
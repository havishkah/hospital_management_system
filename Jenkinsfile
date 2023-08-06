pipeline {

    agent {
        label "Jenkins-agent"
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
    }

}
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

        // stage("Test Client") {
        //     steps {
        //         dir("client") {
        //             sh "npm test"
        //         }
        //     }
        // }

        stage("Build Server") {
            steps {
                dir("server") {
                    sh "npm install"
                }
            }
        }

        stage('Run SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool name: 'SonarQube', type: 'hudson.plugins.sonar.SonarRunnerInstallation'

                    withSonarQubeEnv(credentialsId: 'jenkins-sonarqube-token') {
                        sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=Hospital"
                    }
                }
            }
        }


        // stage("Test Server") {
        //     steps {
        //         dir("server") {
        //             sh "npm test"
        //         }
        //     }
        // }

        // stage("Run ESLint and SonarQube Analysis for Client") {
        //     steps {
        //         dir("client") {
        //             // Run ESLint
        //             sh "npx eslint ."

        //             // Run SonarQube Scanner for ESLint report
        //             script {
        //                 withSonarQubeEnv(credentialsId: 'jenkins-sonarqube-token') {
        //                     sh "sonar-scanner"
        //                 }
        //             }
        //         }
        //     }
        // }
        // stage('Install Dependencies and Run ESLint') {
        //     steps {
        //         script {
        //             // Install ESLint as a development dependency
        //             sh 'npm install eslint --save-dev'

        //             // Run ESLint using the locally installed version
        //             sh './node_modules/.bin/eslint .'
        //         }
        //     }
        // }

        // stage("Run ESLint and SonarQube Analysis for Server") {
        //     steps {
        //         dir("client") {
        //             // Run ESLint
        //             sh "npx eslint ."

        //             // Run SonarQube Scanner for ESLint report
        //             script {
        //                 def scannerHome = tool name: 'SonarQubeScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
        //                 withSonarQubeEnv(credentialsId: 'jenkins-sonarqube-token') {
        //                     sh "${scannerHome}/bin/sonar-scanner"
        //                 }
        //             }
        //         }
        //     }

        // }

    }
}
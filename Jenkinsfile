pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
        ARTIFACT_NAME = "front-${BUILD_ID}.jar"
        AWS_S3_BUCKET = 'xchange-angular'

        AWS_EB_APP_VERSION = "${BUILD_ID}"
    }
    tools {
        maven 'MVN'
    }
   
    stages {
        stage('Checkout Project') {
            steps {
                echo "-=- Checout project -=-"
                git branch: 'main', url: 'https://github.com/Raphael-lvt/repoApiWallet'
            }
        }
        
       stage('Install') {
            steps {
                echo "-=- Install project -=-"
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo "-=- Build project -=-"
                sh 'npm run build --prod'
            }
            
           
        } 
       
        
        stage('Copy JAR to S3') {
            steps{
            
                sh 'aws configure set region eu-west-3'
                sh 'aws s3 cp ./dist/exchange-app/* s3://xchange-angular/'
                
                
                
            }
        }
       
       
        
        
        
        
    }
}

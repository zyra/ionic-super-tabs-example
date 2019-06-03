node {
  stage ('Checkout repo') {
    checkout(scm)
  }

  docker.image('node:11').inside('-u root -e npm_config_cache=npm-cache -e HOME=. -v /usr/bin/docker:/usr/bin/docker') {
    sh 'npm i'

    stage('Build') {
      sh 'npx ng build --prod'
    }
  }
}

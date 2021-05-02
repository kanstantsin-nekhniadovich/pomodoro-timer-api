## Building
### To build application

1. Go to project directory
2. To build application using DOCKER:
  - DEV: `docker build . it pomodoro-timer-api`
  - PROD: `docker build . -f Dockerfile.prod`

## Running
### To run applicaton please

1. Go to project directory
2. Run command:
  - DEV: `docker compose up dev`
  - PROD: `docker compose up prod`

# Building
- ## DEV:
  1. Go to project directory
  2. Run these commands:
    - `docker build . -t pomodoro-timer-api`
    - `docker compose up dev`

- ## PROD:
  1. Go to project directory
  2. Run these commands:
    - `docker build . -f Dockerfile.prod -t pomodoro-timer-api`
    - `docker compose up prod`

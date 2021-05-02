# Building
- ## DEV:
  1. Go to project directory
  2. Run these commands:
    - `docker build .`
    - `docker compose up dev`

- ## PROD:
  1. Go to project directory
  2. Run these commands:
    - `docker build . -f Dockerfile.prod`
    - `docker compose up prod`

help:
	@echo ""
	@echo "Available commands:"
	@echo " - docker-build..........Builds the current code into the Docker image"
	@echo " - docker-run............Runs a container with latest built image"
	@echo " - docker-stop...........Stops project's running container"
	@echo " - docker-rerun..........Stops running container, builds a new image and runs a new container"
	@echo ""

docker-build:
	docker build -t portfolio:build . 

docker-run:
	make docker-build
	docker rm -f portfolio &> /dev/null || true
	docker run --name portfolio -d -p 8080:80 --mount src=`pwd`,target=/usr/share/nginx/html,type=bind portfolio:build
	echo "Server is running on http://localhost:8080"

docker-stop:
	docker stop portfolio
	docker rm portfolio

docker-rerun:
	make docker-stop
	make docker-run

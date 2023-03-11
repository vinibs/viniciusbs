docker-build:
	docker build -t portfolio:build . 

docker-run:
	docker run --name portfolio -d -p 8080:80 --mount src=`pwd`,target=/usr/share/nginx/html,type=bind portfolio:build
	echo "Server is running on http://localhost:8080"

docker-stop:
	docker stop portfolio
	docker rm portfolio

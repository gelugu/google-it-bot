imageName=$(shell cat package.json | jq -r .name | tr -d "@")
version=$(shell cat package.json | jq -r .version)

prepare: copy-env-file install-dependencies

install-dependencies:
	npm install

copy-env-file:
	cp .env.example .env

start:
	npm start

docker-build:
	docker build -t ${imageName}:${version} .
docker-push:
	docker push ${imageName}:${version}
docker-run:
	docker run --env-file .env ${imageName}:${version}
docker-test: docker-build docker-run

docker-deploy: docker-build docker-push
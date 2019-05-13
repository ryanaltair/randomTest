IMAGE=$(cat docker/imagename)
VERSION=$(cat docker/version)

docker build -t ${IMAGE}:${VERSION} . -f ./docker/Dockerfile

docker tag ${IMAGE}:${VERSION} ${IMAGE}:latest

docker push ${IMAGE}:${VERSION}
docker push ${IMAGE}:latest
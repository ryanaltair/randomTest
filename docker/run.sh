IMAGE=$(cat docker/imagename)
VERSION=$(cat docker/version)
docker run -it --rm ${IMAGE}:${VERSION} node index.js
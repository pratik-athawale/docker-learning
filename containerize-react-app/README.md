npx create-react-app --template typescript containerize-react-app
npm run build
npx http-server@14.1.1 build


docker build -t react-app:alpine
docker run --rm -it react-app:alpine sh
    ls -la
    tree build
    exit

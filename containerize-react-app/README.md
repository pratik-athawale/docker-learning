npx create-react-app --template typescript containerize-react-app
npm run build
npx http-server@14.1.1 build


docker build -t react-app:alpine .
docker run --rm -it react-app:alpine sh
    ls -la
    tree build
    exit


docker build -t react:nginx .


docker build -t react-app:dev -f Dockerfile.dev .
docker run --rm -d -p 3000:3000 -v ./public:/app/public -v ./src:/app/src react-app:dev
docker exec -it 40d81ef456f6 cat /app/src/App.tsx

# Stage 1: Build the app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app
FROM node:18-alpine AS runner
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist

# Optional: Pass environment variables to the container
ENV VITE_API_URL=https://api.example.com
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]

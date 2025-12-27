FROM node:20-alpine AS deps
WORKDIR /app

# Install production & build deps
COPY package.json package-lock.json ./
RUN npm ci

# Build Next.js app
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/public ./public
COPY package.json package-lock.json ./

EXPOSE 3000

CMD ["npm", "run", "start"]

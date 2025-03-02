# ==========================
# Konfigurasi Environment
# ==========================
ENV_DEV=.env.dev
ENV_PROD=.env.prod
DOCKER_COMPOSE_DEV=docker-compose -f docker-compose.dev.yml --env-file $(ENV_DEV)
DOCKER_COMPOSE_PROD=docker-compose --env-file $(ENV_PROD)

# ==========================
# Development Commands
# ==========================
.PHONY: dev-up dev-down dev-restart dev-logs dev-db-reset dev-prisma-studio

dev-up: ## Menjalankan environment development
	$(DOCKER_COMPOSE_DEV) up --build -d

dev-down: ## Menghentikan environment development
	$(DOCKER_COMPOSE_DEV) down

dev-restart: dev-down dev-up ## Restart development environment

dev-logs: ## Melihat logs container development
	$(DOCKER_COMPOSE_DEV) logs -f

dev-db-reset: ## Reset database development (HATI-HATI, semua data akan hilang)
	$(DOCKER_COMPOSE_DEV) down -v
	$(DOCKER_COMPOSE_DEV) up -d
	npx prisma migrate dev --name init

dev-prisma-studio: ## Membuka Prisma Studio untuk melihat database development
	npx prisma studio

# ==========================
# Production Commands
# ==========================
.PHONY: prod-up prod-down prod-restart prod-logs prod-db-migrate

prod-up: ## Menjalankan environment production
	$(DOCKER_COMPOSE_PROD) up --build -d

prod-down: ## Menghentikan environment production
	$(DOCKER_COMPOSE_PROD) down

prod-restart: prod-down prod-up ## Restart production environment

prod-logs: ## Melihat logs container production
	$(DOCKER_COMPOSE_PROD) logs -f

prod-db-migrate: ## Menjalankan Prisma migrate di production
	npx prisma migrate deploy

CONTAINER := docker-compose -f docker-compose.yml
SERVER=server

up:
	$(CONTAINER) up -d

ps:
	$(CONTAINER) ps

log:
	$(CONTAINER) logs --tail=$(or $(tail), "50") -f $(or $(container), $(SERVER))

down:
	$(CONTAINER) stop
	$(CONTAINER) down

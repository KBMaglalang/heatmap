# Makefile

# Extract version from package.json
VERSION := $(shell node -p "require('./package.json').version")

# Default target executed when no arguments are given to make.
default_target: all
.PHONY: default_target all version build run
all: version build

# Target for help
.PHONY: help
help:
	@echo "Available commands:"
	@echo "version  - Bump project version using standard-version"
	@echo "build    - Build Docker image"
	@echo "dev      - Run in development mode"
	@echo "run      - Run Docker container"

# Target for versioning
version:
	npx standard-version

# Target for building the Docker image
build:
	docker build -t consistchart:$(VERSION) .

# Target for running the Docker container in development mode
dev:
	docker run -p 3000:3000 -v $(shell pwd):/usr/src/app consistchart:$(VERSION)

# Target for running the Docker container
run:
	docker run -p 3000:3000 consistchart:$(VERSION)


package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/devfullcycle/imersao22/go-gateway/internal/repository"
	"github.com/devfullcycle/imersao22/go-gateway/internal/service"
	"github.com/devfullcycle/imersao22/go-gateway/internal/web/server"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq" // PostgreSQL driver
)

func getEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
}

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file")
	}

	// String de conexão com o banco de dados
	connStr := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		getEnv("DB_HOST", "db"),
		getEnv("DB_PORT", "5432"),
		getEnv("DB_USER", "postgres"),
		getEnv("DB_PASSWORD", "postgres"),
		getEnv("DB_NAME", "gateway"),
		getEnv("DB_SSL_MODE", "disable"),
	)

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatalf("Error opening database: %v", err)
	}
	defer db.Close()

	accountRepository := repository.NewAccountRepository(db)
	accountService := service.NewAccountService(accountRepository)

	port := getEnv("HTTP_PORT", "8080")
	server := server.NewServer(accountService, port)
	server.ConfigureRoutes()

	if err := server.Start(); err != nil {
		log.Fatalf("Error starting server: %v", err)
	}
	log.Printf("Server started on port %s", port)
}

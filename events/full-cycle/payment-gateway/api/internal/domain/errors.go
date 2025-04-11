package domain

import "errors"

var (
	// ErrAccountNotFound is returned when an account is not found
	ErrAccountNotFound = errors.New("account not found")
	// ErrDuplicateAPIKey is returned when an API key already exists
	ErrDuplicateAPIKey = errors.New("api key already exists")
	// ErrInvoiceNotFound is returned when an invoice is not found
	ErrInvoiceNotFound = errors.New("invoice not found")
	// ErrUnauthorizedAccess is returned when an account is not authorized
	ErrUnauthorizedAccess = errors.New("unauthorized access")

	ErrInvalidAmount = errors.New("invalid amount")
	ErrInvalidStatus = errors.New("invalid status")
)

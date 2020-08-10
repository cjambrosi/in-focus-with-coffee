export const swaggerDocument = 
{
    "swagger": "2.0",
    "info": {
      "description": "My Bank API description",
      "version": "1.0.0",
      "title": "My Bank API"
    },
    "host": "localhost:3080",
    "tags": [
      {
        "name": "Account",
        "description": "Account management"
      }
    ],
    "paths": {
      "/account": {
        "get": {
          "tags": [
            "Account"
          ],
          "summary": "Get existin accounts",
          "description": "Get existin account description",
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "Sucssesfull operation",
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/Account"
                }
              }
            },
            "400": {
              "description": "Error occurred"
            }
          }
        },
        "post": {
          "tags": [
            "Account"
          ],
          "summary": "Create a new account",
          "description": "Create a new account with the received parameters",
          "consumes": [
            "application/json"
          ],
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Account object",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Account"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Account created"
            },
            "400": {
              "description": "Error occurred"
            }
          }
        }
      }
    },
    "definitions": {
      "Account": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "João da Silva"
          },
          "balance": {
            "type": "integer",
            "example": "742.34"
          }
        }
      }
    },
    "externalDocs": {
      "description": "Find out more about Swagger",
      "url": "http://swagger.io"
    }
  };
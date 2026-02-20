#!/bin/bash
# Test script for NestJS Transactions API

# Set your API base URL
API_URL="http://localhost:3001/transactions"

echo "Creating a new transaction..."
curl -X POST "$API_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100.50,
    "category": "Food",
    "description": "Test transaction",
    "paymentMethod": "Credit Card"
  }'
echo -e "\nTransaction creation request sent."

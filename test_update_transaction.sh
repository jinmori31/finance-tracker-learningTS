API_URL="http://localhost:3000/transactions/"

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 69989e5d561620c4190ba629 sample_update_transaction.json"
  exit 1
fi

TRANSACTION_ID=$1
JSON_FILE=$2

if [ ! -f "$JSON_FILE" ]; then
  echo "JSON data file not found: $JSON_FILE"
  exit 1
fi

echo "Testing update for transaction ID: $TRANSACTION_ID with data from $JSON_FILE"

curl -X PATCH "$API_URL/$TRANSACTION_ID" \
  -H "Content-Type: application/json" \
  -d @"$JSON_FILE" \
  -w "\nHTTP Status: %{http_code}\n" \
  -o response.json

echo "Response body:"
cat response.json

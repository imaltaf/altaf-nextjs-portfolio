# Import pymongo library
import pymongo

def check_mongodb_connection(connection_url):
    try:
        # Attempt to connect to MongoDB
        client = pymongo.MongoClient(connection_url)
        # Check if the connection is successful
        client.server_info()  # This will trigger an exception if not connected
        print("Successfully connected to MongoDB!")
        return True
    except Exception as e:
        print(f"Failed to connect to MongoDB: {e}")
        return False

# Main function to take user input and check MongoDB connection
def main():
    print("Enter MongoDB connection URL (e.g., mongodb://localhost:27017):")
    connection_url = input().strip()
    if connection_url:
        check_mongodb_connection(connection_url)
    else:
        print("Invalid MongoDB connection URL provided.")

if __name__ == "__main__":
    main()

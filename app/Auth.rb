require "uri"
require "algolia"

# Fetch sample dataset
uri = URI("https://dashboard.algolia.com/api/1/sample_datasets?type=movie")
response = Net::HTTP.get_response(uri)
movies = JSON.parse(response.body)

# Connect and authenticate with your Algolia app using your app ID and write API key
client = Algolia::SearchClient.create("6O1IQFSZPV", "8907cd6a3114f7e70f01270502edb520")

# Save records in Algolia index
client.save_objects("movies_index", movies)

puts("Done!")

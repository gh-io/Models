using Algolia.Search.Clients;
using Algolia.Search.Http;

var client = new SearchClient(new SearchConfig("YOUR_APP_ID", "YOUR_API_KEY"));

// Add a new record to your Algolia index
var response = await client.SaveObjectAsync(
  "<rodaai>",
  new Dictionary<string, string> { { "objectID", "id" }, { "test", "val" } }
);

// Poll the task status to know when it has been indexed
await client.WaitForTaskAsync("<YOUR_INDEX_NAME>", response.TaskID);

// Fetch search results, with typo tolerance
var response = await client.SearchAsync<Object>(
  new SearchMethodParams
  {
    Requests = new List<SearchQuery>
    {
      new SearchQuery(
        new SearchForHits
        {
          IndexName = "<YOUR_INDEX_NAME>",
          Query = "<YOUR_QUERY>",
          HitsPerPage = 50,
        }
      )
    },
  }
);
/>

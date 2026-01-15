using Algolia.Search.Clients;
using Algolia.Search.Models.Search;

var appID = "ALGOLIA_APPLICATION_ID";
// API key with `addObject` and `search` ACL
var apiKey = "ALGOLIA_API_KEY";
var indexName = "test-index";

var client = new SearchClient(appID, apiKey);

// Create a new record
var record = new Dictionary<string, string>
{
    { "objectID", "object-1" },
    { "name", "test record" },
};

// Add record to an index
var saveResp = await client.SaveObjectAsync(indexName, record);

// Wait until indexing is done
await client.WaitForTaskAsync(indexName, saveResp.TaskID);

// Search for 'test'
var searchResp = await client.SearchAsync<Object>(
    new SearchMethodParams
    {
        Requests = new List<SearchQuery>
        {
            new SearchQuery(new SearchForHits { IndexName = indexName, Query = "test" })
        }
    }
);

Console.WriteLine(searchResp.ToJson());

# Install the API clients

  
> Learn how to install the latest versions of Algolia's API

```csharp
 export const sdkVersions = {
  csharp: {
    v7: "7.36.0",
    v6: "6.17.0",
    v5: "5.3.1",
    v4: "4.0.0",
    v3: "3.7.3",
    v2: "2.5.1",
    v1: "1.16.0"
  },
  dart: {
    v1: "1.43.1"
  },
  go: {
    v4: "4.34.1",
    v3: "3.32.0",
    v2: "2.28.0",
    v1: "1.5.0"
  },
  java: {
    v4: "4.34.1",
    v3: "3.16.11",
    v2: "2.23.0"
  },
  javascript: {
    v5: "5.46.2",
    v4: "4.25.3",
    v3: "3.35.1",
    v2: "2.9.7"
  },
  kotlin: {
    v3: "3.37.2",
    v2: "2.1.14",
    v1: "1.13.0"
  },
  php: {
    v4: "4.37.1",
    v3: "3.4.2",
    v2: "2.8.0",
    v1: "1.28.1"
  },
  python: {
    v4: "4.35.2",
    v3: "3.0.0",
    v2: "2.6.3",
    v1: "1.20.0"
  },
  ruby: {
    v3: "3.34.2",
    v2: "2.3.4",
    v1: "1.27.5"
  },
  scala: {
    v2: "2.36.1",
    v1: "1.45.2"
  },
  swift: {
    v9: "9.37.2",
    v8: "8.21.0",
    v7: "7.0.5",
    v6: "6.3.0",
    v5: "5.4.0",
    v4: "4.8.2",
    v3: "3.2.1",
    v2: "2.2.1",
    v1: "1.4.2"
  }
};

<Tabs>
  <Tab title="C#">
    **Latest version:** {sdkVersions.csharp.v7}

    Install **version 7** of the C#/.NET API clients by adding the `Algolia.Search` package from [NuGet](https://www.nuget.org/packages/Algolia.Search/).
    For example:

    ```sh icon="square-terminal" theme={"system"}
    dotnet add package Algolia.Search --version "7.*"
    ```

    <Card icon="app-window" horizontal href="/doc/libraries/sdk/performance" title="Building ASP.NET apps?">
      Check the additional information about dependency injection.
    </Card>

    The C#/.NET API clients are open source and generated from OpenAPI specifications.

    * [View generated client code on GitHub](https://github.com/algolia/algoliasearch-client-csharp)
    * [View source and OpenAPI specs on GitHub](https://github.com/algolia/api-clients-automation)
  </Tab>

  <Tab title="Dart">
    **Latest version:** {sdkVersions.dart.v1}

    Install **version 1** the Dart API clients by adding the `algoliasearch` package as a dependency to your project.

    ```sh icon="square-terminal" theme={"system"}
    dart pub add algoliasearch:'^1.0'
    ```

    The Dart API clients are open source and generated from OpenAPI specifications.

    * [View generated client code on GitHub](https://github.com/algolia/algoliasearch-client-dart)
    * [View source and OpenAPI specs on GitHub](https://github.com/algolia/api-clients-automation)
  </Tab>

  <Tab title="Go">
    **Latest version:** {sdkVersions.go.v4}

    Install **version 4** of the Go API clients by adding the `algoliasearch-client-go` package as a dependency to your module.

    ```sh icon="square-terminal" theme={"system"}
    go get github.com/algolia/algoliasearch-client-go/v4
    ```

    The Go API clients are open source and generated from OpenAPI specifications.

    * [View generated client code on GitHub](https://github.com/algolia/algoliasearch-client-go)
    * [View source and OpenAPI specs on GitHub](https://github.com/algolia/api-clients-automation)
  </Tab>

  <Tab title="Java">
    **Latest version:** {sdkVersions.java.v4}

    Install **version 4** of the Java API clients by adding the following dependencies to your project.
    For **Maven**, add the following dependencies to your `pom.xml` file:

    ```xml pom.xml icon="code-xml" theme={"system"}
    <dependency>
      <groupId>com.algolia</groupId>
      <artifactId>algoliasearch</artifactId>
      <version>VERSION</version>
    </dependency>
    ```

    For **Gradle**, add the following dependencies to your `build.gradle` file:

    ```groovy build.gradle icon="braces" theme={"system"}
    dependencies {
      implementation 'com.algolia:algoliasearch:VERSION'
    }
    ```
 ```
   Replace `VERSION` with the version of the API clients you want to install.
    You can find the available releases on [Maven Central](https://central.sonatype.com/artifact/com.algolia/algoliasearch).
    If you don't use Maven or Gradle,
    you can [download the JAR files](https://oss.sonatype.org/#nexus-search;gav~com.algolia~algoliasearch~~~).

  The Java API clients are open source and generated from OpenAPI specifications.

   * [View generated client code on GitHub](https://github.com/algolia/algoliasearch-client-java)
    * [View source and OpenAPI specs on GitHub](https://github.com/algolia/api-clients-automation)
  </Tab>

  <Tab title="JavaScript">
    **Latest version:** {sdkVersions.javascript.v5}

  To install **version 5** of the JavaScript API clients, add the `algoliasearch` package as a dependency to your project.

  <CodeGroup>
      ```sh npm theme={"system"}
      npm install algoliasearch@5
      ```

  ```sh yarn theme={"system"}
yarn add algoliasearch@5
  ```
```sh pnpm theme={"system"} pnpm add algoliasearch@5 </CodeGroup>

```
--
    The `algoliasearch` package includes API clients for the Search API,
    the Personalization API, the Analytics API, and the A/B testing API.
    If you only need to access methods from a specific API, you can install API clients separately:
 <CodeGroup>
```sh 
      npm theme={"system"}
      # Search API
      npm install @algolia/client-search
      # Recommend API
      npm install @algolia/recommend
      # Analytics API
      npm install @algolia/client-analytics
      # A/B testing API
      npm install @algolia/client-abtesting
      # Ingestion API
      npm install @algolia/ingestion
      # Insights API
      npm install @algolia/client-insights
      # Monitoring
      npm install @algolia/monitoring
      # Personalization API
      npm install @algolia/client-personalization
      # Query Suggestions API
      npm install @algolia/client-query-suggestions
      # Usage API
      npm install @algolia/client-usage
      ```
  ```
```sh
yarn theme={"system"}
      # Search API
      yarn add @algolia/client-search
      # Recommend API
      yarn add @algolia/recommend
      # Analytics API
      yarn add @algolia/client-analytics
      # A/B testing API
      yarn add @algolia/client-abtesting
      # Ingestion API
      yarn add @algolia/ingestion
      # Insights API
      yarn add @algolia/client-insights
      # Monitoring
      yarn add @algolia/monitoring
      # Personalization API
      yarn add @algolia/client-personalization
      # Query Suggestions API
      yarn add @algolia/client-query-suggestions
      # Usage API
      yarn add @algolia/client-usage
      ```
  ```
  ```sh
pnpm theme={"system"}
      pnpm add @algolia/client-search
      # Recommend API
      pnpm add @algolia/recommend
      # Analytics API
      pnpm add @algolia/client-analytics
      # A/B testing API
      pnpm add @algolia/client-abtesting
      # Ingestion API
      pnpm add @algolia/ingestion
      # Insights API
      pnpm add @algolia/client-insights
      # Monitoring
      pnpm add @algolia/monitoring
      # Personalization API
      pnpm add @algolia/client-personalization
      # Query Suggestions API
      pnpm add @algolia/client-query-suggestions
      # Usage API
      pnpm add @algolia/client-usage
      ```
    </CodeGroup>
  ```
  
  The JavaScript API clients are open source and generated from OpenAPI specifications.

    * [View generated client code on GitHub](https://github.com/algolia/algoliasearch-client-javascript)
    * [View source and OpenAPI specs on GitHub](https://github.com/algolia/api-clients-automation)
  </Tab>

  <Tab title="Kotlin">
    **Latest version:** {sdkVersions.kotlin.v3}

  To install **version 3** of the Kotlin API clients, add the following
    dependencies to your `build.gradle` file:

  ```groovy
    build.gradle icon="braces" theme={"system"}
    repositories {
        mavenCentral()
    }

    dependencies {
        implementation 'com.algolia:algoliasearch-client-kotlin:ALGOLIA_VERSION'

        // You need to specify a Ktor engine suitable for your platform
        runtimeOnly 'io.ktor:ktor-client-java:KTOR_VERSION'
    }
    ```

    * Replace `ALGOLIA_VERSION` with the version of the Kotlin API client you want to install.
      You can find the released versions on [Maven Central](https://central.sonatype.com/artifact/com.algolia/algoliasearch-client-kotlin).

    * Replace `KTOR_VERSION` with the version of the Ktor client you want to use.
      To learn more about the available engines, see [Client engines](https://ktor.io/docs/client-engines.html).

    Alternatively, add the [BOM](https://docs.gradle.org/current/userguide/platforms.html#sub:bom_import) package as a dependency:

    ```groovy build.gradle icon="braces" theme={"system"}
    repositories {
        mavenCentral()
    }

    dependencies {
        implementation platform("com.algolia:algoliasearch-client-kotlin-bom:ALGOLIA_VERSION")

        // define dependencies without versions
        implementation 'com.algolia:algoliasearch-client-kotlin'
        runtimeOnly 'io.ktor:ktor-client-java'
    }
    ```

    The Kotlin API clients are open source and generated from OpenAPI specifications.

    * [View generated client code on GitHub](https://github.com/algolia/algoliasearch-client-kotlin)
    * [View source and OpenAPI specs on GitHub](https://github.com/algolia/api-clients-automation)
  </Tab>

  <Tab title="PHP">
    **Latest version:** {sdkVersions.php.v4}

    To install **version 4** of the PHP API clients,
    install the `algoliasearch-client-php` package with with [`composer`](https://getcomposer.org/).

    ```sh icon="square-terminal" theme={"system"}
    composer require algolia/algoliasearch-client-php "^4.0"
    ```

    <Columns>
      <Card icon="app-window" horizontal href="/doc/framework-integration/laravel" title="Building Laravel apps?">
        Check the Laravel integration built on top of the PHP API client.
      </Card>

      <Card icon="app-window" horizontal href="/doc/framework-integration/symfony" title="Building Symfony apps?">
        Check the Symfony integration built on top of the PHP API client.
      </Card>
    </Columns>
  ```
    
  The PHP API clients are open source and generated from OpenAPI specifications.

    * [View generated client code on GitHub](https://github.com/algolia/algoliasearch-client-php)
    * [View source and OpenAPI specs on GitHub](https://github.com/algolia/api-clients-automation)
  </Tab>

  <Tab title="Python">
    **Latest version:** {sdkVersions.python.v4}

   To install **version 4** of the Python API clients, install the `algoliasearch` package.
    The Python API clients support **Python 3.8 or later**.

  ```sh
    icon="square-terminal" theme={"system"}
    pip install "algoliasearch>=4,<5"
    ```

    <Card icon="app-window" horizontal href="/doc/framework-integration/django" title="Building Django apps?">
      Check the Django integration built on top of the Python API client.
    </Card>
  ```
   The Python API clients are open source and generated from OpenAPI specifications.

    * [View generated client code on GitHub](https://github.com/algolia/algoliasearch-client-python)
    * [View source and OpenAPI specs on GitHub](https://github.com/algolia/api-clients-automation)
  </Tab>

  <Tab title="Ruby">
    **Latest version:** {sdkVersions.ruby.v3}

   To install **version 3** of the Ruby API clients,
    add the `algolia` gem as a dependency to your project.
    The Ruby API clients support **Ruby 2.2 or later**.

   ```sh
icon="square-terminal" theme={"system"}
    bundle add algolia --version='~>3.0'
    # or: gem install algolia -v '~>3.0'
    ```

    <Card icon="app-window" horizontal href="/doc/framework-integration/rails" title="Building Ruby on Rails apps?">
      Check the Ruby on Rails integration built on top of the Ruby API client.
    </Card>
  ```
   The Ruby API clients are open source and generated from OpenAPI specifications.

    * [View generated client code on GitHub](https://github.com/algolia/algoliasearch-client-ruby)
    * [View source and OpenAPI specs on GitHub](https://github.com/algolia/api-clients-automation)
  </Tab>

  <Tab title="Scala">
    **Latest version:** {sdkVersions.scala.v2}
    To install **version 2** of the Scala API clients,
    add the following dependencies to your `build.sbt` file:
    ```txt build.sbt icon="braces" theme={"system"}
    libraryDependencies += "com.algolia" %% "algoliasearch-scala" %  "VERSION"
    ```
    Replace `VERSION` with the version of the API clients you want to install.
    You can find the available releases on Maven Central:
    * [`algoliasearch-scala_3`](https://central.sonatype.com/artifact/com.algolia/algoliasearch-scala_3)
    * [`algoliasearch_scala_2.13`](https://central.sonatype.com/artifact/com.algolia/algoliasearch-scala_2.13)
    * [`algoliasearch_scala_2.12`](https://central.sonatype.com/artifact/com.algolia/algoliasearch-scala_2.12)
    * [`algoliasearch_scala_2.11`](https://central.sonatype.com/artifact/com.algolia/algoliasearch-scala_2.11)
    The Scala API clients are open source and generated from OpenAPI specifications.

    * [View generated client code on GitHub](https://github.com/algolia/algoliasearch-client-scala)
    * [View source and OpenAPI specs on GitHub](https://github.com/algolia/api-clients-automation)
  </Tab>

  <Tab title="Swift">
    **Latest version:** {sdkVersions.swift.v9}
    To install **version 9** of the Swift API clients,
    add the `algoliasearch-client-swift` package as a dependency to your project.
    With the **Swift Package Manager**,
    add the following dependencies to your `Package.swift` file:
   
   ```swift
Swift icon="code" theme={"system"}
    let package = Package(
        // ...
        dependencies: [
            .package(url: "https://github.com/algolia/algoliasearch-client-swift.git", from: "9.0.0")
        ],
        targets: [
            .target(
                // ...
                dependencies: [
                    .product(name: "Search", package: "algoliasearch-client-swift")
                ]
            )
        ]
    )
    ```
   ```
  With **CocoaPods**, add the following to your `Podfile`:

  ```rb
Podfile icon="code" theme={"system"}
    pod("AlgoliaSearchClient", "~> 9.0.0")
    ```
  ```
  With **Carthage**, add the following to your `Cartfile`:
    
    ```txt 
   Cartfile icon="code" theme={"system"}
    github "algolia/algoliasearch-client-swift" ~> 9.0.0
    ```

  The Swift API clients are open source and generated from OpenAPI specifications.

    * [View generated client code on GitHub](https://github.com/algolia/algoliasearch-client-swift)
    * [View source and OpenAPI specs on GitHub](https://github.com/algolia/api-clients-automation)
  </Tab>
</Tabs>

## Test your installation

To test your installation,
try running a short program that adds a record to a test index,
searches your index, and prints the results.

<Steps>
  <Step title="Create account">
    If you haven't already, [create an Algolia account](https://dashboard.algolia.com/users/sign_up).
  </Step>

  <Step title="Copy code">
    Copy the following code into a new project or file.
    Replace `ALGOLIA_APPLICATION_ID` and `ALGOLIA_API_KEY` with values from your account.
    Make sure to use an API key with addObject and search permissions.

    <CodeGroup>
  ```cs
 C# theme={"system"}
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
      ```
  ```
   ```dart 
      Dart theme={"system"}
      // File: helloAlgolia.dart
      import 'package:algoliasearch/algoliasearch.dart';

      Future<void> main() async {
        final appID = "ALGOLIA_APPLICATION_ID";
        final apiKey = "ALGOLIA_API_KEY";
        final indexName = "test-index";

        final client = SearchClient(appId: appID, apiKey: apiKey);

        // Create a new record
        final record = {'objectID': 'object-1', 'name': 'test record'};

        // Add the record to an index
        final saveResp = await client.saveObject(indexName: indexName, body: record);

        // Wait until the indexing is done
        await client.waitTask(indexName: indexName, taskID: saveResp.taskID);

        // Search for 'test'
        final searchResp = await client.search(
          searchMethodParams: SearchMethodParams(
            requests: [SearchForHits(indexName: indexName, query: 'test')],
          ),
        );

        print(searchResp.toJson());
      }
      ```
  ```
  ```go
Go theme={"system"}
      // File: helloAlgolia.go
      package main

      import (
      	"fmt"

      	"github.com/algolia/algoliasearch-client-go/v4/algolia/search"
      )

      func main() {
      	appID := "ALGOLIA_APPLICATION_ID"
      	// API key with `addObject` and `search` ACL
      	apiKey := "ALGOLIA_API_KEY"
      	indexName := "test-index"

      	record := map[string]any{
      		"objectID": "object-1",
      		"name":     "test record",
      	}

      	client, err := search.NewClient(appID, apiKey)
      	if err != nil {
      		panic(err)
      	}

      	// Add record to an index
      	saveResp, err := client.SaveObject(
      		client.NewApiSaveObjectRequest(indexName, record),
      	)
      	if err != nil {
      		panic(err)
      	}

      	// Wait until indexing is done
      	_, err = client.WaitForTask(indexName, saveResp.TaskID)
      	if err != nil {
      		panic(err)
      	}

      	// Search for 'test'
      	searchResp, err := client.Search(
      		client.NewApiSearchRequest(
      			search.NewEmptySearchMethodParams().SetRequests(
      				[]search.SearchQuery{
      					*search.SearchForHitsAsSearchQuery(
      						search.NewEmptySearchForHits().SetIndexName(indexName).SetQuery("test"),
      					),
      				},
      			),
      		),
      	)
      	if err != nil {
      		panic(err)
      	}

      	fmt.Println(searchResp.Results)
      }
      ```
  ```
  ```java
 Java theme={"system"}
      package com.algolia.example;

      import com.algolia.api.SearchClient;
      import com.algolia.model.search.SearchForHits;
      import com.algolia.model.search.SearchMethodParams;

      import java.util.HashMap;

      public class Main {
          public static void main(String[] args) {
              final var appID = "ALGOLIA_APPLICATION_ID";
              // API key with `addObject` and `search` ACL
              final var apiKey = "ALGOLIA_API_KEY";
              final var indexName = "test-index";

              try (var client = new SearchClient(appID, apiKey)) {
                  // Create a new record
                  var body = new HashMap<>();
                  body.put("objectID", "object-1");
                  body.put("name", "test record");

                  // Add the record to an index
                  var addResponse = client.saveObject(indexName, body);

                  // Wait until indexing is done
                  client.waitForTask(indexName, addResponse.getTaskID());

                  // Search for 'test'
                  var responses = client.search(
                      new SearchMethodParams().addRequests(
                          new SearchForHits()
                            .setIndexName(indexName)
                            .setQuery("test")
                      ), body.getClass());
                  System.out.println(responses);
              } catch (Exception e) {
                  e.printStackTrace();
              }
          }
      }
      ```
  ```
   ```js
JavaScript theme={"system"}
      // helloAlgolia.mjs
      import { algoliasearch } from "algoliasearch";

      const appID = "ALGOLIA_APPLICATION_ID";
      // API key with `addObject` and `editSettings` ACL
      const apiKey = "ALGOLIA_API_KEY";
      const indexName = "test-index";

      const client = algoliasearch(appID, apiKey);

      const record = { objectID: "object-1", name: "test record" };

      // Add record to an index
      const { taskID } = await client.saveObject({
        indexName,
        body: record,
      });

      // Wait until indexing is done
      await client.waitForTask({
        indexName,
        taskID,
      });

      // Search for "test"
      const { results } = await client.search({
        requests: [
          {
            indexName,
            query: "test",
          },
        ],
      });

      console.log(JSON.stringify(results));
      ```
  ```
  ```kotlin
Kotlin theme={"system"}
      package org.example

      import com.algolia.client.api.SearchClient
      import com.algolia.client.extensions.waitForTask
      import com.algolia.client.model.search.*

      suspend fun main() {
          val appID = "ALGOLIA_APPLICATION_ID"
          // API key with `addObject` and `search` ACL
          val apiKey = "ALGOLIA_API_KEY"
          val indexName = "ALGOLIA_INDEX_NAME"

          val client = SearchClient(appID, apiKey)

          // Create record (with autogenerated `objectID`)
          val record = buildJsonObject {
              put("objectID", "object-1")
              put("name", "test record")
          }

          // Add record to an index
          val addResponse = client.saveObject(indexName, record)

          // Wait until indexing is done
          client.waitForTask(indexName, addResponse.taskID)

          // Search for 'test'
          val response = client.search(
              SearchMethodParams(requests =
                  listOf(
                      SearchForHits(
                          indexName,
                          query = "test"
                      )
                  )
              )
          )

          println(response)
      }
      ```
  ```
  ```php
PHP theme={"system"}
      <?php
      // helloAlgolia.php
      require_once realpath(__DIR__ . "/vendor/autoload.php");

      use Algolia\AlgoliaSearch\Api\SearchClient;
      $appID = "ALGOLIA_APPLICATION_ID";
      // API key with `addObject` and `search` ACL
      $apiKey = "ALGOLIA_API_KEY";
      $indexName = "test-index";

      $client = SearchClient::create($appID, $apiKey);

      // Create a new record
      $record = [
        "objectID" => "object-1",
        "name" => "test record",
      ];

      // Add the record to an index
      $saveResp = $client->saveObject($indexName, $record);

      // Wait until indexing is done
      $client->waitForTask($indexName, $saveResp['taskID']);

      // Search for 'test'
      $searchResponse = $client->search(
        ['requests' => [
          ['indexName' => $indexName, 'query' => 'test']
        ]],
      );

      echo json_encode($searchResponse);
      ```
  ```
  ```python
Python theme={"system"}
      # hello_algolia.py
      from algoliasearch.search.client import SearchClientSync

      app_id = "ALGOLIA_APPLICATION_ID"
      # API key with `addObject` and `search` ACL
      api_key = "ALGOLIA_API_KEY"
      index_name = "test-index"

      if __name__ == "__main__":
          client = SearchClientSync(app_id, api_key)
          record = {"objectID": "object-1", "name": "test record"}

          # Add record to an index
          save_resp = client.save_object(
              index_name=index_name,
              body=record,
          )

          # Wait until indexing is done
          client.wait_for_task(
              index_name=index_name,
              task_id=save_resp.task_id,
          )

          # Search for 'test'
          results = client.search({"requests": [{"indexName": index_name, "query": "test"}]})

          print(results.to_json())
      ```
  ```
  ```rb
Ruby theme={"system"}
      # hello_algolia.rb
      require "algolia"

      app_id = "ALGOLIA_APPLICATION_ID"
      # API key with `addObject` and `search` ACL
      api_key = "ALGOLIA_API_KEY"
      index_name = "test-index"

      client = Algolia::SearchClient.create(app_id, api_key)

      record = {objectID: "object-1", name: "test record"}

      # Add record to an index
      save_resp = client.save_object(
        index_name = index_name,
        body = record
      )

      # Wait until indexing is done
      client.wait_for_task(
        index_name = index_name,
        task_id = save_resp.task_id
      )

      # Search for 'test'
      results = client.search(
        search_method_params = {
          requests: [{indexName: index_name, query: "test"}]
        }
      )

      puts(results.to_json)
      ```
  ```
   ```scala
Scala theme={"system"}
      package com.algolia.example

      import scala.concurrent.Await
      import scala.concurrent.duration._
      import scala.concurrent.ExecutionContext.Implicits.global

      import algoliasearch.api.SearchClient
      import algoliasearch.extension.SearchClientExtensions
      import algoliasearch.search.{SearchForHits, SearchMethodParams}
      import org.json4s.{JField, JObject, JString}

      @main
      def main(): Unit = {
        val appId = "ALGOLIA_APPLICATION_ID"
        // API key with `addObject` and `search` ACL
        val apiKey = "ALGOLIA_API_KEY"
        val indexName = "test-index"

        val client = SearchClient(appId, apiKey)

        // Create a new record
        val record = JObject(
          List(
            JField("objectID", JString("object-1")),
            JField("name", JString("test record"))
          )
        )

        // Add the record to an index
        val saveFuture = client.saveObject(
          indexName,
          body = record
        )
        // Block the execution until future is resolved
        val saveResponse = Await.result(saveFuture, 100.seconds)

        // Wait until indexing is done
        client.waitTask(indexName, resolvedResponse.taskID)

        // Search for 'test'
        val searchFuture = client.search(
          searchMethodParams = SearchMethodParams(
            requests = Seq(
              SearchForHits(
                indexName,
                query = Some("test"),
              )
            )
          )
        )

        val searchResponse = Await.result(searchFuture, 100.seconds)
        println(searchResponse)
      }
      ```
  ```
   ```swift
Swift theme={"system"}
      // main.swift
      @preconcurrency import Search

      let appID = "ALGOLIA_APPLICATION_ID"
      // API key with `addObject` and `search` ACL
      let apiKey = "ALGOLIA_API_KEY"
      let indexName = "test-index"

      let client = try SearchClient(appID: appID, apiKey: apiKey)

      // Create a new record
      let record = ["objectID": "object-1", "name": "test-record"]

      // Add the record to an index
      let saveResp = try await client.saveObject(
          indexName: indexName,
          body: record
      )

      // Wait until indexing is done
      try await client.waitForTask(
          with: saveResp.taskID,
          in: indexName
      )

      // Search for 'test'
      let searchResp: SearchResponses<Hit> = try await client.search(
          searchMethodParams: SearchMethodParams(
              requests: [
                  SearchQuery.searchForHits(
                      SearchForHits(
                          query: "test",
                          indexName: indexName
                      )
                  )
              ]
          )
      )

      print(searchResp)
      ```
    </CodeGroup>

    <Tip>
      In production, use environment variables for your credentials.
    </Tip>
  </Step>
 <Step title="Run code">
    Run the code, depending on your development environment.

    <CodeGroup>
      ```sh C# theme={"system"}
      # For example:
      dotnet run
      ```

      ```sh Dart theme={"system"}
      dart run
      ```

      ```sh Go theme={"system"}
      go run helloAlgolia.go
      ```

      ```txt Java theme={"system"}
      Depending on your development environment,
      build and run the project.
      ```

      ```sh JavaScript theme={"system"}
      node helloAlgolia.js
      ```

      ```txt Kotlin theme={"system"}
      Depending on your development environment,
      build and run the project.
      ```

      ```sh PHP theme={"system"}
      php helloAlgolia.php
      ```

      ```sh Python theme={"system"}
      python hello_algolia.py
      ```

      ```sh Ruby theme={"system"}
      ruby hello_algolia.rb
      ```

      ```sh Scala theme={"system"}
      sbt run
      ```

      ```sh Swift theme={"system"}
      swift run
      ```
    </CodeGroup>

    If the command is successful,
    you'll see the API response as a native object in your programming language.
  </Step>
</Steps>


---
```
> To find navigation and other pages in this documentation, fetch the llms.txt file at: https://algolia.com/llms.txt

# Agent Studio

> Build generative AI experiences with real-time Algolia data and LLMs like OpenAI and Gemini.

export const DemoButton = ({href, icon, children}) => {
  return <a className="not-prose demo-btn" href={href} rel="noreferrer noopener" target="_blank">
      {icon && <Icon icon={icon} color="var(--tw-prose-body)" />}
      {children || <span>View demo</span>}
    </a>;
};

<Callout icon="flask-conical" color="#14b8a6">
  This is a **beta feature** according to [Algolia's Terms of Service ("Beta Services")](https://www.algolia.com/policies/terms/).
</Callout>

Agent Studio connects your chosen LLM to Algolia search and tools.
It manages the end-to-end workflow and grounds responses in live data from your Algolia indices.
Agent Studio lets you create:

* **Shopping assistants** that answer product questions and recommend items.
* **Content summarizers** that extract key insights from large datasets.
* **Conversational search** for natural language queries.
* **Custom workflows** that link prompts to Algolia features and external integrations.

<div className="flex justify-center">
  <DemoButton href="/doc/guides/algolia-ai/agent-studio/how-to/quickstart" icon="bot">
    Create your first conversational assistant
  </DemoButton>
</div>

## How Agent Studio works

Agent Studio coordinates between user input, Algolia tools and indices,
and the selected LLM to create a generative AI workflow:

```mermaid theme={"system"}
%%{init:{
  "theme":"base",
  "securityLevel":"loose",
  "flowchart":{
    "htmlLabels": false,
    "wrappingWidth": 75,
    "useMaxWidth": false
  },
  "themeVariables":{
    "fontSize":"14px",
    "fontFamily":"Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
  }
}}%%
flowchart LR
  A["`Define your agent (role, style, constraints)`"]
  B["`Add tools and indices (Algolia and client-side tools)`"]
  C["`Choose a model (OpenAI, Gemini, Azure, OpenAI-compatible)`"]
  D["`Publish and integrate (dashboard and API)`"]

  A --> B --> C --> D
  click D "https://dashboard.algolia.com/generativeAi/agent-studio/agents" "Open Agent Studio dashboard" _blank
```

For example:

```mermaid theme={"system"}
%%{init:{
  "theme":"base",
  "securityLevel":"loose",
  "flowchart":{
    "htmlLabels": false,
    "wrappingWidth": 90,
    "useMaxWidth": true,
    "nodeSpacing": 16,
    "rankSpacing": 20
  },
  "themeVariables":{
    "fontSize":"14px"
  }
}}%%
flowchart TB
  classDef anchor fill:transparent,stroke:transparent,color:transparent;

  subgraph ALG["Algolia search"]
    direction TB
    S0((" ")):::anchor
    S1["`Query index`"]
    S2["`Top results`"]
    S0 -.-> S1
  end

  subgraph LLM["LLM"]
    direction TB
    L0((" ")):::anchor
    L1["`Generate conversational answer`"]
    L0 -.-> L1
  end

  subgraph AG["Agent"]
    direction TB
    A0((" ")):::anchor
    A1["`Manages tools and context`"]
    A3["`Send retrieved results to LLM`"]
    A5["`Return answer`"]
    A0 -.-> A1
  end

  subgraph U["User"]
    direction TB
    U0((" ")):::anchor
    U1["`What are the best wireless headphones?`"]
    U4["`Sees final response`"]
    U0 -.-> U1
  end

  %% Flow
  U1 --> A1 --> S1 --> S2 --> A3 --> L1 --> A5 --> U4
```

<Check>
  Search requests made by agents count towards your total search usage and may incur additional charges on your Algolia account.
</Check>

**Cost optimization**

Completions are [cached](/doc/guides/algolia-ai/agent-studio/how-to/caching) by default to minimize your LLM provider token costs.

## See also

* [Agent Studio dashboard](/doc/guides/algolia-ai/agent-studio/how-to/dashboard)
* [InstantSearch.js chat widget](/doc/api-reference/widgets/chat/js)
* [React InstantSearch chat widget](/doc/api-reference/widgets/chat/react)
* [Integrate Agent Studio](/doc/guides/algolia-ai/agent-studio/how-to/integration)
* [Prompting tips](/doc/guides/algolia-ai/agent-studio/how-to/prompting)


---

> To find navigation and other pages in this documentation, fetch the llms.txt file at: https://algolia.com/llms.txt

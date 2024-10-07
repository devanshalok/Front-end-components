Rendering: Server-Side Rendering (SSR) vs Client-Side Rendering (CSR):
Client-Side Rendering (CSR): Preferred for real-time, interactive features like typeahead.
CSR handles dynamic updates based on user input and offers a faster, more responsive experience for typeahead.

Server-Side Rendering (SSR): Could be used for SEO-sensitive pages or initial loading of search result pages
where performance and SEO are critical.

Decision: CSR will be the primary rendering strategy for its real-time, interactive advantages.
SSR will be used selectively for SEO or pre-rendering purposes where necessary.

Choosing Between REST and GraphQL:
REST API: Best for resource-based fetching where we need predefined, simple data structures (e.g., getting a list of movies).

GraphQL: Ideal for complex queries where relationships between entities (e.g., movies, actors, genres) need to be fetched in a single query, giving the front-end flexibility to request only the required fields.

Decision: We will primarily use GraphQL for fetching suggestions, as it allows fetching movies, persons, and related entities in a single query without over-fetching or under-fetching data. REST APIs will be used in simpler cases where less flexibility is needed.

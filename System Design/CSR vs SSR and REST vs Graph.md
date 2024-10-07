### Rendering: Server-Side Rendering (SSR) vs Client-Side Rendering (CSR):

**Client-Side Rendering (CSR):** Preferred for real-time, interactive features like typeahead.
CSR handles dynamic updates based on user input and offers a faster, more responsive experience for typeahead.

**Server-Side Rendering (SSR):** Could be used for SEO-sensitive pages or initial loading of search result pages
where performance and SEO are critical.

Decision: CSR will be the primary rendering strategy for its real-time, interactive advantages.
SSR will be used selectively for SEO or pre-rendering purposes where necessary.

### Choosing Between REST and GraphQL:

**REST API:** Best for resource-based fetching where we need predefined, simple data structures (e.g., getting a list of movies).

**GraphQL:** Ideal for complex queries where relationships between entities (e.g., movies, actors, genres) need to be fetched in a single query, giving the front-end flexibility to request only the required fields.

Decision: We will primarily use GraphQL for fetching suggestions, as it allows fetching movies, persons, and related entities in a single query without over-fetching or under-fetching data. REST APIs will be used in simpler cases where less flexibility is needed.

### How to fetch new posts for pagination

**Long Polling**: A technique where the client repeatedly requests updates from the server by holding a request open until new data is available, then re-sending the request after receiving data. It's simple but can be inefficient due to repeated connections.

**WebSockets**: A full-duplex communication channel that allows real-time data transfer between client and server over a single, persistent connection. It's efficient for real-time updates but adds complexity in managing the connection.

**Server-Sent Events (SSE)**: A unidirectional protocol where the server sends updates to the client over a single, long-lived HTTP connection. It’s lightweight and ideal for streaming data like live feeds.

**Best for Facebook Feed**: WebSockets would be optimal for fetching new posts in Facebook’s front-end system design due to its need for real-time, two-way communication to handle dynamic interactions like likes, comments, and new posts efficiently.

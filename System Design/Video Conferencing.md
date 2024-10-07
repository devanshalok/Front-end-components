### \*\*Designing a Video Conferencing Front-End System Using the RADIO Framework

This system design focuses on building a **front-end system** for a **video conferencing platform** similar to **Zoom**, **Microsoft Teams**, or **Google Meet**. The system will allow users to **create and join video meetings**, **share screens**, **chat**, **record meetings**, and **collaborate** in real-time.

We will follow the **RADIO framework** to structure the design, making it **scalable**, **real-time**, and **performant** while handling video streams, screen sharing, and collaborative features.

---

### **1. Requirements Exploration**

#### **Functional Requirements:**

- **User Authentication:** Users can sign up, log in, and manage their profiles.
- **Meeting Scheduling and Joining:** Users can schedule, join, and host video conferences with a unique meeting link.
- **Real-Time Video and Audio:** Users can communicate in real-time using video and audio streams.
- **Screen Sharing:** Users can share their screen with other participants during a meeting.
- **Text Chat:** Users can send text messages to participants during the meeting.
- **Recording Meetings:** Users can record meetings and save them locally or to the cloud.
- **Mute/Unmute & Video On/Off:** Users can mute/unmute their audio and toggle their video during the meeting.
- **Gallery View:** Display multiple participants' video feeds in a grid view.
- **Waiting Room & Host Controls:** The host can admit participants, remove users, and control other aspects of the meeting.
- **Raise Hand & Reactions:** Participants can raise their hands or send quick reactions (thumbs up, applause, etc.).

#### **Non-Functional Requirements:**

- **Performance:** Low-latency audio and video streaming with seamless handling of network fluctuations.
- **Scalability:** Should scale to handle thousands of concurrent participants across different meetings.
- **Security:** Secure end-to-end encryption for video, audio, and chat data to prevent unauthorized access.
- **Accessibility:** Full keyboard navigation, screen reader compatibility, and support for closed captions.
- **Extensibility:** The system should support future enhancements, such as integrations with other collaboration tools.

---

### **2. Architecture / High-Level Design**

Below is the **ASCII representation** of the high-level architecture for the **video conferencing system**, followed by detailed explanations of each component.

```plaintext
+--------------------------------------------------------------------------------------+
|                             Video Conferencing Front-End System                      |
+--------------------------------------------------------------------------------------+
|                                                                                      |
|    +------------------------+          +------------------------+                   |
|    |                        |          |                        |                   |
|    |  View: Video Grid       |          |  View: Chat Window     |                   |
|    |  (Multiple video feeds) |          |  (Messages during      |                   |
|    |                        |          |   meeting)              |                   |
|    +------------------------+          +------------------------+                   |
|                                                                                      |
|                  Interactions                                  Stream Actions        |
|                        |                                           |                 |
|                        v                                           |                 |
|    +--------------------------------+     +------------------------v-------------+   |
|    |                                |     |                                      |   |
|    |     Video Conferencing Controller|<----+       Stream State Management        |   |
|    | (Manages video, audio,          |---->+    (Stores participant streams,      |   |
|    |  screen sharing, chat)          |     |     connection statuses, etc.)       |   |
|    +--------------------------------+     +------------------------+-------------+   |
|                                                                                      |
| +----------------------------------------------------------------------------------+  |
| |                           Video Conferencing Application (SPA)                  |  |
| +----------------------------------------------------------------------------------+  |
| |                                                                                  |  |
| |   +---------------------+    +-----------------------+    +---------------------+  |
| |   | Routing Module      |    | State Management      |    | API Integration     |  |
| |   | (Join meeting, chat,|    | (Redux, Context API)  |    | Layer (WebRTC,      |  |
| |   | settings)           |    |                       |    | Chat, Recording)    |  |
| |   +---------------------+    +-----------------------+    +---------------------+  |
| |                                                                                  |  |
| |   +---------------------+    +-----------------------+    +---------------------+  |
| |   | UI Components       |    | Security Layer        |    | Caching Layer       |  |
| |   | (Video Controls,    |    | (Encryption, JWT,     |    | (SWR, LocalStorage) |  |
| |   | Chat Box, Gallery   |    | SSL/TLS)              |    |                     |  |
| |   | View)               |    |                       |    |                     |  |
| |   +---------------------+    +-----------------------+    +---------------------+  |
| +----------------------------------------------------------------------------------+  |
|                                                                                      |
+--------------------------------------------------------------------------------------+
                                      |
                                      |
                                      v
+--------------------------------------------------------------------------------------+
|                                   Backend Services                                   |
+--------------------------------------------------------------------------------------+
|                                                                                      |
|  +-------------------+  +------------------+  +---------------------+                |
|  |                   |  |                  |  |                     |                |
|  | Authentication    |  | Video Stream     |  | Chat and Recording   |                |
|  | Service (OAuth)   |  | Service (WebRTC, |  | Service              |                |
|  |                   |  | SFU, media relay)|  |                     |                |
|  +-------------------+  +------------------+  +---------------------+                |
|                                                                                      |
+--------------------------------------------------------------------------------------+
```

---

### **Explanation of Components:**

1. **Frontend Application (SPA)**:

   - **View: Video Grid**: Displays video feeds of all participants in a grid format, with real-time audio and video controls for each participant.
   - **View: Chat Window**: Allows participants to send and receive text messages during the meeting. Chat history is visible in this view, and users can toggle between the video and chat views.
   - **Routing Module**: Manages navigation between different parts of the application, such as joining a meeting, viewing the chat, and changing settings using **React Router** or **Vue Router**.
   - **State Management**: Handles global state, such as participants' streams, chat history, and connection statuses, using **Redux** or **Context API**. This manages things like user muting/unmuting, video feed toggles, and active speakers.
   - **API Integration Layer**: Connects with backend services to handle video streaming via **WebRTC**, manage chat messages, handle screen sharing, and record meetings.
   - **UI Components**: Reusable UI components such as video player controls, participant lists, chat boxes, and gallery views. These components provide the interactive interface for the user.
   - **Security Layer**: Implements encryption protocols using **SSL/TLS** for data in transit and **end-to-end encryption** (E2EE) for video and audio streams, ensuring that data is protected.
   - **Caching Layer**: Uses **SWR** or **localStorage** to cache meeting settings, participant names, and chat history, improving performance and allowing users to reconnect quickly in case of network issues.

2. **Video Conferencing Controller**:

   - Handles user interactions with the video and audio streams, such as starting/stopping video, muting/unmuting audio, and screen sharing. It also manages the gallery view and controls access to features like chat and recording.

3. **Stream State Management**:

   - Manages the state of participants' video and audio streams, including their connection status, mute status, and video feed resolution. It also tracks network quality to adapt video quality accordingly.

4. **Backend Services**:
   - **Authentication Service**: Manages user authentication and session management using **OAuth** for secure logins.
   - **Video Stream Service**: Facilitates video and audio transmission using **WebRTC** and a **Selective Forwarding Unit (SFU)** to optimize the distribution of streams. SFU allows efficient one-to-many communication, where media is relayed without being processed.
   - **Chat and Recording Service**: Manages chat messages sent during the meeting and handles meeting recordings. It ensures that chat and recorded data are stored securely and are accessible only to authorized participants.

---

### **3. Data Model**

The data model defines key entities related to users, meetings, and chat messages. Each entity is linked to specific components and sources:

```typescript
// Entity to Represent a Participant in a Conference
type Participant = {
  id: number;
  name: string;
  photo_url?: string; // Profile picture of the participant
  email: string;
  role: "host" | "participant" | "guest"; // Role of the participant in the conference
  is_muted: boolean; // Whether the participant's audio is muted
  is_video_enabled: boolean; // Whether the participant's video is enabled
};

// Entity to Represent a Video Conference Room
type ConferenceRoom = {
  id: number;
  name: string;
  host_id: number; // Reference to the host participant
  start_time: Date;
  end_time?: Date; // The conference may be ongoing or ended
  participants: Participant[];
};

// Entity to Represent a Message in the Chat Feature
type Message = {
  id: number;
  sender_id: number; // Reference to the participant sending the message
  conference_room_id: number; // The room where the message is sent
  content: string; // Message content (text, links)
  timestamp: Date;
};

// Entity to Represent a Video Stream (for each participant's stream)
type VideoStream = {
  id: number;
  participant_id: number; // The participant associated with this stream
  conference_room_id: number; // The conference room where the stream is active
  stream_url: string; // URL or identifier for accessing the video stream
  is_active: boolean; // Whether the stream is currently active
};

// Typeahead Search Request Type (for searching participants, rooms, or messages)
type SearchRequest = {
  searchQuery: string;
  start_from: number;
  limit: number;
};

// Search Result Type with Pagination for Conference Rooms, Participants, or Messages
type SearchResult<T extends Entity> = {
  data: T[]; // Could be conference rooms, participants, or messages
  pagination: {
    start_from: number;
    limit: number;
    total: number;
  };
};

// Client State for Storing Current Conference State
type ClientState = {
  currentRoom?: ConferenceRoom; // The active conference room the user is participating in
  searchQuery: string; // Current search query for finding rooms, participants, or messages
  searchResults: SearchResult<Entity>; // Holds the search results
  recentRooms: ConferenceRoom[]; // Cached list of recent rooms the user has joined
  activeParticipants: Participant[]; // List of active participants in the current room
  messages: Message[]; // Chat messages for the current room
};
```

View

- **Source**: WebRTC API, SFU, Streaming Service

---

### **4. Interface Definition (API)**

Below are the **API definitions** for the video conferencing system, including pagination for handling large chat logs:

- **User APIs**:

  - `POST /login` - Authenticates the user using OAuth.
    - **Parameters**: `{ email, password }`
    - **Response**: `{ token, userDetails }`

- **Meeting APIs**:

  - `POST /meeting/create` - Creates a new meeting session.

    - **Parameters**: `{ host_id, start_time, duration, participants[] }`
    - **Response**: `{ meeting_id, meeting_link, status }`

  - `GET /meeting/{meeting_id}` - Fetches meeting details and the list of participants.

    - **Parameters**: `meeting_id`
    - **Response**: `{ meeting_id, host_id, participants[], start_time, end_time }`

  - `GET /meetings?user_id={user_id}&page={page}&limit={limit}` - Fetches a paginated list of past meetings for a user.
    - **Parameters**: `user_id`, `page`, `limit`
    - **Response**: `{ meetings: [ { meeting_id, start_time, end_time } ], total_pages }`

- **Chat APIs**:

  - `POST /chat/send` - Sends a chat message during the meeting.

    - **Parameters**: `{ meeting_id, sender_id, message_text }`
    - **Response**: `{ message_id, status }`

  - `GET /chat/{meeting_id}?page={page}&limit={limit}` - Fetches a paginated list of chat messages for a specific meeting.
    - **Parameters**: `meeting_id`, `page`, `limit`
    - **Response**: `{ messages: [ { message_id, sender_id, message_text, timestamp } ], total_pages }`

- **Recording APIs**:

  - `POST /recording/start` - Starts recording the meeting.

    - **Parameters**: `{ meeting_id, user_id }`
    - **Response**: `{ recording_id, status }`

  - `POST /recording/stop` - Stops recording the meeting.
    - **Parameters**: `{ recording_id, user_id }`
    - **Response**: `{ status }`

---

### **5. Optimizations and Deep Dive**

- **Performance**:

  - Use **adaptive video quality** based on network conditions, where the video stream resolution can change dynamically to reduce bandwidth usage on slow networks.
  - Implement **server-side recording** for meetings to offload processing from the client-side, allowing seamless performance on user devices.

- **Scalability**:

  - Use **Selective Forwarding Units (SFUs)** for video stream handling. SFUs efficiently forward streams from each participant without encoding them, allowing the platform to scale to large meetings with many participants.
  - Employ **horizontal scaling** for chat and meeting management services to support a large number of concurrent meetings and participants.

- **Security**:

  - Implement **end-to-end encryption (E2EE)** for video, audio, and chat streams to prevent unauthorized interception or tampering of media data.
  - Use **OAuth 2.0** for secure user authentication and session management, ensuring users can only join meetings they are authorized for.

- **Offline Mode**:
  - Use **local caching** of chat messages and settings using **localStorage** or **IndexedDB** so that users can maintain their settings and rejoin meetings seamlessly after a disconnection.

---

### **Summary**

This design provides a comprehensive front-end architecture for a **video conferencing system** using the **RADIO framework**. It includes key components such as the **Video Conferencing Controller**, **Stream State Management**, **Routing Module**, **UI Components**, **API Integration Layer**, and **Security Layer**. The **Data Model** defines ownership of key entities like users, meetings, chat messages, and streams, while the **API Definitions** include pagination for handling large chat logs. This system is designed for **performance**, **scalability**, and **real-time collaboration**, ensuring a seamless video conferencing experience for users.

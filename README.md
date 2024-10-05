# Chat Sessions Dashboard

This is a simple, responsive web application built using React and TailwindCSS to display chat sessions retrieved from an API. The application allows users to search for chat sessions by **ID** or **Name**, filter sessions by **Date**, and view detailed messages of selected sessions.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- **Search**: Users can search chat sessions by their ID or Name.
- **Date Filtering**: Filter chat sessions by specifying a date range.
- **Infinite Scrolling**: More sessions load automatically when scrolling through the list.
- **Session Details**: Clicking on a chat session reveals the full conversation, including both user and AI messages, with timestamps.
- **Highlighted Selection**: The currently selected chat session is visually highlighted.
- **Responsive Design**: The application is responsive and adapts to different screen sizes (desktop, tablet, mobile).

## Demo
Check out the live demo: [Chat Session](https://chat-session-red.vercel.app/)

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Installed automatically with Node.js

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/chat-session.git
    cd news-app
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```
3. **Start the development server:**

    ```sh
    npm run dev
    ```

4. **Open your browser and navigate to `http://localhost:5173`**



## Usage

Once the application is running, the following features are available:
1. **Search Sessions by ID or Name**:
   - In the search bar located at the top of the sidebar, type a session ID or part of the session name to filter the sessions list.
2. **Filter Sessions by Date**:
   - Use the date picker inputs below the search bar to specify a start and end date.
   - The sessions displayed will be filtered based on the specified date range.
3. **Infinite Scrolling**:
   - Scroll down through the list of chat sessions, and more sessions will be loaded automatically when you reach the middle of the list.
4. **View Session Details**:
   - Click on any chat session in the sidebar to view the detailed conversation in the main panel.
   - The conversation will display both the user and AI messages, along with their timestamps.
5. **Highlight Selected Session**:
   - The currently selected session will be highlighted in the sidebar for better visibility.

## Project Structure

```plaintext
.
├── src
│   ├── components
│   │   ├── ChatSession.jsx 
│   │   ├── Footer.jsx 
│   │   ├── Navbar.jsx  
│   │   ├── Sidebar.jsx     
│   ├── App.jsx             
│   ├── index.css          
│   ├── main.jsx           
│   └── ...
├── tailwind.config.js    
├── package.json            
└── ...
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for designing the UI.
- **React Icons**: For using icons like user profiles and robots in the chat details.
- **Fetch API**: To retrieve chat session data from a backend API.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
# JSON Store Application

A React application that allows users to input JSON data, send it to a backend API for storage, and receive a unique link to access the stored JSON. It also includes features like copy-to-clipboard functionality and error handling.

---

## Features

- **JSON Input**: Paste or type valid JSON data into a textarea.
- **Generate Link**: Sends the JSON to the backend and generates a unique link to access the stored JSON.
- **Error Handling**: Notifies users of invalid JSON formats or server errors.
- **Copy Functionality**: Quickly copy the generated JSON link to the clipboard.
- **Loading Indicator**: Provides a visual cue while the request is being processed.

---

## Prerequisites

- **Node.js** and **npm** installed on your system.
- Basic understanding of React and functional components.

---

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/json-store.git
   cd json-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## Project Structure

- **`src/App.tsx`**: Main component handling JSON input, backend interaction, and UI updates.
- **`lucide-react`**: Icons for the interface (Loader, Send, Copy).

---

## Usage

1. **Input JSON Data**: Paste your JSON into the textarea.
2. **Generate Link**: Click "Generate JSON Link" to store the JSON and retrieve a unique link.
3. **Copy Link**: Click the copy icon to copy the link to your clipboard.
4. **Error Messages**: Invalid JSON or server errors will display as notifications.

---

## Key Components

### `handleSubmit`

- Sends the JSON to the backend API (`https://backend.saxenaayush27-work.workers.dev/api`).
- Displays the generated link or error messages.

### `handleCopyLink`

- Copies the generated JSON link to the clipboard.
- Displays a "Copied!" message for 2 seconds.

---

## Dependencies

- **React**: Frontend library.
- **lucide-react**: Icon library for React.
- **Tailwind CSS**: For styling (replaceable with CSS).

---

## Backend API

### Endpoint

- **POST**: `https://backend.saxenaayush27-work.workers.dev/api`
  - Request Body: JSON data.
  - Response: `{ "api_key": "<unique-key>" }`.

- **GET**: `https://backend.saxenaayush27-work.workers.dev/api/<unique-key>`
  - Retrieve stored JSON using the unique key.

---

Feel free to customize the README as per your needs!
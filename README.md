# 📧 AutoReply AI

**AutoReply AI** is a smart email assistant that helps you write perfect, professional replies in seconds using the power of **Llama 3 AI**.
 live demo    https://email-reply-ai.vercel.app/#how-it-works


<img width="1864" height="860" alt="image" src="https://github.com/user-attachments/assets/ea0c495d-588f-4298-becd-9d7d9b807e02" />


## 🚀 Features

*   **AI-Powered Generation**: Instantly generate context-aware email replies.
*   **Tone Selection**: Choose from Professional, Friendly, Casual, or custom tones.
*   **Secure Authentication**: User management powered by **Clerk**.
*   **Credit System**: New users get **20 free credits** to start.
*   **History**: Automatically saves your generated replies for easy access.
*   **Modern UI**: Clean, responsive interface built with React and Tailwind CSS.

## 🛠️ Tech Stack

### Frontend
*   **React** (Vite)
*   **Tailwind CSS** (Styling)
*   **Clerk** (Authentication)
*   **Axios** (API Requests)

### Backend
*   **Node.js & Express**
*   **MongoDB** (Database for User Data & History)
*   **Groq SDK** (AI Model Integration - Llama 3)
*   **Clerk SDK** (Server-side Auth Validation)

## 📦 Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Singh-OmDev/Email-reply-Ai.git
    cd Email-reply-Ai
    ```

2.  **Install Dependencies**
    *   **Frontend**:
        ```bash
        cd client
        npm install
        ```
    *   **Backend**:
        ```bash
        cd ../server
        npm install
        ```

3.  **Environment Variables**
    Create a `.env` file in **both** the `client` and `server` directories.

    **Client (`client/.env`):**
    ```env
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    ```

    **Server (`server/.env`):**
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    GROQ_API_KEY=your_groq_api_key
    CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    ```

4.  **Run Locally**
    *   **Start Backend**: `cd server && npm run dev`
    *   **Start Frontend**: `cd client && npm run dev`

## 🌍 Deployment

### Frontend (Vercel)
The frontend is optimized for **Vercel**.
1.  Import the `client` folder as the root directory.
2.  Add `VITE_CLERK_PUBLISHABLE_KEY` and `VITE_API_URL` (Backend URL) to Environment Variables.

### Backend (Render)
The backend is optimized for **Render**.
1.  Deploy the `server` folder as the root directory.
2.  Add all backend environment variables (`MONGO_URI`, `GROQ_API_KEY`, etc.).

## 🛡️ License

This project is open-source and available under the [MIT License](LICENSE).

# PrepWise

Hi! This is a project I built to help people practice for technical interviews. It uses AI to simulate a real interview experience and gives you feedback on how you did.

## What it does
-   **Mock Interviews**: You can talk to an AI interviewer (powered by Vapi.ai) just like a real call.
-   **Feedback**: After the interview, it tells you what you did well and where you can improve (using Google Gemini).
-   **Dashboard**: Simple dashboard to see your past interviews.

## Tools I used
-   **Next.js 15**: For the web framework.
-   **React**: For the UI components.
-   **Tailwind CSS**: For styling.
-   **Firebase**: For the database and authentication.
-   **Gemini AI & Vapi.ai**: For the AI logic and voice capabilities.

## How to run it locally
If you want to try this out on your own machine, here are the steps:

1.  **Clone the repo**:
    ```bash
    git clone https://github.com/ShauryaPS5/Interprep.git
    cd Interprep
    ```

2.  **Install the libraries**:
    ```bash
    npm install
    ```

3.  **Set up the environment**:
    Create a `.env.local` file in the main folder. You can use these dummy values to run it in demo mode (no need for real keys right now):
    ```env
    NEXT_PUBLIC_BASE_URL="http://localhost:3000"
    NEXT_PUBLIC_VAPI_WEB_TOKEN="your-vapi-token"
    GOOGLE_GENERATIVE_AI_API_KEY="your-gemini-key"
    FIREBASE_PROJECT_ID="mock-project-id"
    FIREBASE_CLIENT_EMAIL="mock-email@example.com"
    FIREBASE_PRIVATE_KEY="mock-key"
    ```

4.  **Run it**:
    ```bash
    npm run dev
    ```

5.  **Open it**:
    Go to `http://localhost:3000` in your browser.

---
Made by **Shaurya Pratap Singh**

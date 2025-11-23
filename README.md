# PrepWise - AI-Powered Mock Interview Platform

![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-11.10-FFCA28?style=for-the-badge&logo=firebase)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-Powered-8E75B2?style=for-the-badge)

PrepWise is an advanced AI-driven application designed to help job seekers practice and perfect their technical interview skills. By leveraging cutting-edge AI technologies, PrepWise simulates realistic interview scenarios, provides real-time voice interaction, and delivers detailed, actionable feedback to improve candidate performance.

## 🚀 Key Features

-   **Interactive AI Interviews**: Engage in voice-based technical interviews powered by **Vapi.ai**, simulating a real interviewer's presence.
-   **Smart Feedback Engine**: Utilizes **Google Gemini AI** to analyze responses and provide comprehensive feedback on communication, technical accuracy, and problem-solving skills.
-   **Performance Tracking**: A user-friendly dashboard to view past interview sessions, scores, and areas for improvement.
-   **Modern UI/UX**: A sleek, responsive interface built with **Tailwind CSS** and **Radix UI** for a premium user experience.
-   **Secure Architecture**: Built on **Next.js 15** with robust server-side validation and secure API handling.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [clsx](https://github.com/lukeed/clsx)
-   **AI & Voice**: 
    -   [Google Gemini](https://deepmind.google/technologies/gemini/) (Feedback Generation)
    -   [Vapi.ai](https://vapi.ai/) (Voice AI)
-   **Backend & Database**: [Firebase](https://firebase.google.com/) (Firestore, Auth)
-   **State Management & Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
-   **Icons**: [Lucide React](https://lucide.dev/)

## 🏗️ Architecture & Design Decisions

### 1. Next.js App Router
We utilized the Next.js App Router to leverage **React Server Components (RSC)**. This allows for efficient data fetching directly on the server, reducing the client-side bundle size and improving initial load performance. Sensitive logic, such as database interactions and AI API calls, is handled securely via **Server Actions**.

### 2. Demo Mode Configuration
For the purpose of this project submission and ease of evaluation, the application is currently configured in **"Demo Mode"**.
-   **Authentication**: The strict Firebase Authentication checks have been bypassed to allow direct access to the application without requiring a sign-up process.
-   **Data Mocking**: Database interactions are mocked to simulate a populated environment. This ensures that the application is fully explorable immediately after startup, without needing to configure a live Firebase project or populate a database.

### 3. AI Integration
We chose **Google Gemini** for its superior context understanding and generation capabilities, which are crucial for providing nuanced feedback on complex technical answers. **Vapi.ai** was selected for its low-latency voice processing, creating a fluid conversational experience.

## 🏁 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/prepwise.git
    cd prepwise
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory. For this demo version, you can use the following mock values or your own keys if you wish to enable full functionality:
    ```env
    NEXT_PUBLIC_BASE_URL="http://localhost:3000"
    NEXT_PUBLIC_VAPI_WEB_TOKEN="your-vapi-token"
    GOOGLE_GENERATIVE_AI_API_KEY="your-gemini-key"
    FIREBASE_PROJECT_ID="mock-project-id"
    FIREBASE_CLIENT_EMAIL="mock-email@example.com"
    FIREBASE_PRIVATE_KEY="mock-key"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Access the application:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔮 Future Improvements

-   **Live Database Integration**: Re-enable the full Firebase integration for persistent user data.
-   **Custom Interview Paths**: Allow users to upload their own resumes for tailored interview questions.
-   **Multi-Language Support**: Expand voice capabilities to support non-English technical interviews.
-   **Community Features**: Add a leaderboard and peer-review system.

---

*Developed with ❤️ by [Your Name]*

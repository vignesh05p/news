# 📰 Smart Article Reader

A modern, minimalistic web app that delivers the latest technology news with a seamless, responsive user experience. Built with React (Vite) and Node.js, it leverages advanced browser APIs for performance, engagement tracking, and network awareness.

---

## 🚀 Features

- **Tech News Feed**: Responsive cards display the latest technology articles.
- **Lazy-loaded Images**: Optimized image loading for speed and efficiency.
- **Engagement Tracker**: Uses `IntersectionObserver` to monitor article interactions.
- **Network Awareness**: Adapts to connectivity using the `NetworkInformation API`.
- **Background Task Optimization**: Non-urgent tasks run with `requestIdleCallback`.
- **Skeleton Loaders**: Smooth loading experience with animated placeholders.
- **Article Detail View**: Deep linking for individual articles.
- **User Feedback Form**: Collects user feedback for continuous improvement.

---

## 🌐 Web APIs Used

| API | Purpose |
|-----|---------|
| [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) | Tracks when articles enter the viewport for engagement analytics. |
| [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) | Detects network status and adapts loading strategies. |
| [Background Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API) *(via `requestIdleCallback`)* | Runs non-urgent tasks during idle time. |

---

## 🧩 Tech Stack

- **Frontend:** React (Vite), CSS
- **Backend:** Node.js, Express
- **Data Source:** NewsData.io API
- **Routing:** React Router
- **Image Optimization:** Custom `LazyImage` component

---

## 📸 Screenshots

### Home Page – Articles Grid

![Home](screenshots/1.png)

---

### Article Detail View

![Detail View](screenshots/2.png)

---

### User Engagement Tracker

> Scroll-based article section interaction tracking using IntersectionObserver.

![Engagement Tracker](screenshots/3.png)

---

## 📁 Folder Structure

```
frontend/
  └── src/
      ├── App.jsx
      ├── main.jsx
      ├── components/
      │   ├── LazyImage.jsx
      │   ├── EngagementTracker.jsx
      │   ├── FeedbackForm.jsx
      │   ├── SkeletonCard.jsx
      │   └── NetworkHandler.jsx
      ├── pages/
      │   └── ArticlePage.jsx
      ├── styles/
      │   └── app.css
backend/
  ├── index.js
  ├── controllers/
  │   ├── engagementController.js
  │   └── feedbackController.js
  ├── routes/
  │   ├── engagementRoutes.js
  │   └── feedbackRoutes.js
  └── middleware/
      └── logger.js
```

---

## 🛠 Setup Instructions

```bash
git clone https://github.com/your-username/smart-article-reader.git
cd smart-article-reader
npm install
```

Create a `.env` file in the frontend directory:

```
VITE_NEWSDATA_API_KEY=your_api_key_here
```

Start the frontend dev server:

```bash
cd frontend
npm run dev
```

Start the backend server:

```bash
cd ../backend
npm install
node index.js
```

---

## 🖥 Backend Overview

- **Express.js API** for handling engagement and feedback submissions.
- **Controllers**: Business logic for engagement and feedback.
- **Routes**: API endpoints for frontend-backend communication.
- **Middleware**: Logging and request handling utilities.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue to discuss your ideas or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## 📬 Feedback

Suggestions and feedback are encouraged. Please use the [issue tracker](https://github.com/your-username/smart-article-reader/issues) or the in-app feedback form.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

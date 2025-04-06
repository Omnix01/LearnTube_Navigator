# LearnTube_Navigator

# 🔍 Project Overview: *LearnTube Navigator*

*Project Type:* Full-stack Web Application  
*Purpose:* A curated educational video streaming platform that enables users to create accounts, log in securely, and explore personalized content for competitive exams such as *JEE, CAT, and CUET*.

---

## 🧩 Core Features & Modules

### 1. 🔐 Authentication Module

- *User Sign Up*
  - Register with email, password (securely hashed), and optional name
- *User Login*
  - Secure session-based or JWT authentication
- *Password Reset/Change*
  - Accessible via the Account section
- *Session Management*
  - Logout functionality
  - "Remember Me" (optional)

---

### 2. 🏠 Home Page (Post-login Dashboard)

- *Personalized Video Feed*
  - Embedded YouTube videos (with default YouTube controls only)
  - Tailored based on selected exam (JEE, CAT, CUET)
- *Subject-Based Filtering*
  - Dynamic filtering by subject (e.g., Physics, Quant, General Knowledge)
- *Trending Section*
  - Popular videos across all users (statically defined for prototype)
- *Curated Selection from JSON*
  - videos.json stores categorized YouTube video links

---

### 3. 👤 Account/Profile Section

Accessible via an *"Account"* button:

- View user email
- Change password
- Change exam preference (JEE, CAT, CUET)

---

### 4. 🧭 Navigation Structure

- *Header/Navbar*
  - Logo: *LearnTube Navigator*
  - Navigation Links: Home, Trending, Library, Account, Logout
- *Sidebar/Dropdown*
  - For subject filtering on the Home page

---

### 5. 📚 Library Page

- User-specific saved/bookmarked videos
- Option to add/remove videos from Library

---

### 6. 📈 Trending Page

- Shows most viewed/shared videos
- Can be statically curated or based on view count (prototype logic)

---

## 📁 Sample Data Structure (Prototype with videos.json)

json
{
  "JEE": {
    "Physics": [
      {
        "title": "Kinematics Basics",
        "url": "https://www.youtube.com/embed/example1"
      },
      {
        "title": "Thermodynamics",
        "url": "https://www.youtube.com/embed/example2"
      }
    ],
    "Math": []
  },
  "CAT": {
    "Quant": [
      {
        "title": "Number Systems",
        "url": "https://www.youtube.com/embed/example3"
      }
    ],
    "LRDI": []
  },
  "CUET": {
    "General Knowledge": [
      {
        "title": "Indian History",
        "url": "https://www.youtube.com/embed/example4"
      }
    ],
    "English": []
  }
}


---

## 🎨 UI/UX Considerations

- ✅ *Modern, responsive design*
- ✅ *Clean, minimalist aesthetic*
- ✅ *Card-style video previews*
- ✅ *Easy toggling between exams and subjects*
- ✅ *Modal popups* for changing password/preferences
- ✅ Optional *Dark Mode*

---

## ⚙ Tech Stack Suggestions

### Frontend
- *Framework:* React.js
- *Styling:* Tailwind CSS ShadCN UI
- *Routing:* NextJS

### Backend
- *Server:* Firebase
- *Authentication:* Firebase Auth
- *Data Storage:* Firebase Firestore
  - Prototype: JSON file (videos.json)
  - Production: Firebase Firestore

### Other Tools
- *YouTube Embed API* for video rendering
- *LocalStorage/SessionStorage* for client-side bookmarks (prototype)

---

## 🌟 Additional Features to Enhance Engagement

- 📌 *Bookmarks/Watch Later*
  - Save videos to personal Library
- 🔥 *Trending Metrics*
  - Static or dynamic (views, shares, bookmarks)
- 🔍 *Search Bar*
  - Filter by subject or keyword
- ✅ *Progress Tracker*
  - Mark videos as watched (optional)
- 🔔 *Notifications*
  - “New videos added for your selected exam” (prototype only)

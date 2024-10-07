# Capital University Management System

Welcome to the **Capital University Management System**! This project is a comprehensive, user-friendly interface designed to simulate key aspects of managing a university, built with attention to detail, mobile responsiveness, and subtle interactive features to enhance the user experience. The project includes three main pages: `Student Dashboard`, `Faculty Overview`, and `Course Registration`, each offering dynamic functionality to mimic real-world university operations.

## Project Overview

### Pages

#### 1. **Student Dashboard (Student Portal)**

- **Title:** Student Portal
- **Description:**  
  This page provides a dynamic(!) dashboard that displays student information, such as ongoing courses, completed courses, grades, and upcoming events. The interface is interactive and includes several hidden details for a better user experience.

  **Key Features:**
  - **Banner with Student Profile:** Includes the student's image, basic information, and a dedicated page for tracking upcoming events.
  - **Course Tabs:**
    - **Current Courses:** Displays the number of ongoing courses and total credits. Course cards show additional details on hover, including professor details and course ID.
    - **Dropped Courses:** Displays the number of completed Dropped courses.
    - **Upcoming Events:** Displays the number of upcoming events. A pulsing calendar icon allows users to add events to a private calendar within the dashboard.
  - **Real-Time Clock:** Always visible at the bottom right corner of the page, displaying the current time, day, and date on hover.
  - **Notification System:** A bell icon shows notifications (triggered initially and periodically). Notifications can be cleared via accessing the notification bell icon, ensuring a smooth user experience.

#### 2. **Faculty Management (Faculty Overview)**

- **Title:** Faculty Overview
- **Description:**  
  This page displays a list of faculty members, with search and filtering options for easy navigation. Users can find faculty members based on their name, designation, or subjects they teach.

  **Key Features:**
  - **Search & Filter Options:** Search and filter by faculty name, designation and subject area.
  - **Faculty Cards:** Each faculty member is represented by a card showing a their name, designation, contact and office hours.
  

#### 3. **Course Registration (Enroll in Courses)**

- **Title:** Enroll in Courses
- **Description:**  
  A page designed for course registration, where students can browse and enroll in courses using a user-friendly form with input validation.

  **Key Features:**
  - **Enroll Now Button:** A bouncing button triggers a modal with a course enrollment form. The form is pre-filled with student information, but fields can be edited as needed. Students can enroll in up to four courses.
  - **Search & Filter Options:** Students can search for courses by title, filter them by department, or search by professor name.
  - **Course Cards:** Displays available courses with hover interactions that reveal full course details (course title, ID, total enrolled students, and course capacity). Similar to other course cards, hovering over professor names reveals more information.

### Additional Features

- **Local Storage for Data:** The system uses local storage for consistency and to simulate a database for enrolled courses, comparing them with available and completed courses to dynamically filter options.
- **Responsive Design:** The interface is fully mobile-responsive, ensuring smooth navigation and a clean layout on any device (desktop, tablet, smartphone).
- **Dynamic Notifications:** A notification system that triggers messages after certain time intervals (max 3 times for optimal performance).


### Technologies Used

- **Frontend Framework:** React.js (with TypeScript)
- **CSS Framework:** Tailwind CSS (for development)
- **State Management:** React's useState and useEffect hooks
- **Bundler:** Vite
- **Packages/Libraries:**
  - `shadcn` for UI components
  - `react=toastify` for success and error messages
  - `react-helmet-async` for managing page titles
  - `react-icons` for some icons
- **Local Storage** for simulating a database for course enrollment data and consistency

### Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Md-Rashedul-Islam-Rajib/university-management-system.git
   ```

2. **Install dependencies:**

   Navigate to the project directory and run:

   ```bash
   npm install
   ```

3. **Start the development server:**

   Run the following command to start the local server:

   ```bash
   npm run dev
   ```

4. **Open in browser:**

   Open `http://localhost:5173` to view the application in your browser.

### Deployment

The project is hosted live on Vercel. You can view the live application here:

**Live URL:** [https://university-management-system-coral.vercel.app/](https://university-management-system-coral.vercel.app/)

### GitHub Repository

The source code for this project is available on GitHub. Feel free to explore and contribute!

**GitHub Repository:** [https://github.com/Md-Rashedul-Islam-Rajib/university-management-system](https://github.com/Md-Rashedul-Islam-Rajib/university-management-system)

### Future Enhancements

- **Advanced Search:** Improve course and faculty search functionality by adding filters for specific course types and additional faculty attributes.
- **Expanded Notifications:** Add more detailed notifications and messaging features to further enhance student interactions.# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

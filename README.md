#  React Movie Discovery Dashboard

**Internship Project:** Yuva Intern (Junior ReactJS Developer)  
**Technical Focus:** API Integration, Responsive Design, and Quality Assurance

A dedicated movie discovery engine designed to showcase efficient **Asynchronous Search** and **Category Filtering** using the TMDB API. This project emphasizes clean code architecture and a high-fidelity user interface built with **Tailwind CSS**.

---

## UI & UX Architecture (Tailwind CSS)

* **Adaptive Grid Layout:** Engineered a responsive movie grid using Tailwind’s breakpoint system (`grid-cols-1` to `xl:grid-cols-5`), ensuring a seamless experience across mobile, tablet, and ultra-wide screens.

* **Loading Feedback:** Implemented high-performance visual cues for asynchronous operations using Tailwind's `animate-spin` utility, providing instant user feedback during data fetching.
* **Interactive Design:** Utilized micro-interactions such as `hover:scale-105` and `transition-transform` to create a premium feel for movie cards without the overhead of custom CSS files.

---

##  Technical Highlights

* **Advanced Search Logic:** Engineered a real-time search interface that queries the TMDB database dynamically based on user input.
* **Category Discovery:** Implemented instant toggling between "Popular" and "Top Rated" movie collections using optimized API endpoints.
* **Custom Hook Architecture:** Developed the `useMovies` hook to isolate data fetching, loading states, and error management from the UI components.

* **Automated Testing:** Included unit tests with **Jest** and **React Testing Library** to ensure search inputs and movie card rendering remain robust.

---

## 🛠 Tech Stack

| Layer | Technology | Usage |
| :--- | :--- | :--- |
| **Frontend** | React.js (Vite) | High-speed build and development |
| **Styling** | Tailwind CSS | Mobile-first responsive UI |
| **Testing** | Jest / RTL | Component and logic validation |
| **API** | TMDB API | External data integration |

## Local Development

1. **Clone:** `git clone https://github.com/A-adilajaleel/Movie-Dashboard`
2. **Credentials:** Create a `.env` file and add `VITE_TMDB_API_KEY=your_key_here`.
3. **Install:** `npm install`
4. **Run:** `npm run dev`
Movie Dashboard - Optimized React Application
A high-performance, responsive movie discovery dashboard built with ReactJS and the TMDb API. This project was developed as a final graduation milestone for the 6-week Junior ReactJS Developer Internship.

Live Demo
<!-- Deployed on: [Vercel Link here] -->

Local Site: http://localhost:5173/

Core Features
Dynamic Movie Discovery: Real-time fetching of "Popular" and "Top Rated" categories.

Intelligent Search: Instantly find movies using a optimized search bar.

Responsive Design: Fully mobile-first layout using Tailwind CSS.

Data-Driven UI: Custom hooks for efficient state and effect management.

 Performance & Optimization (Week 6)
I focused heavily on modern web performance standards, achieving significant score improvements in Lighthouse:

Code Splitting: Implemented React.lazy and Suspense to reduce initial load time.

Resource Prioritization: Added preconnect hints for API origins to reduce handshake latency.

Image Optimization: Used loading="lazy" and decoding="async" for all movie posters to improve LCP.

SEO Excellence: Created a custom robots.txt to guide search engine crawlers.

 Quality Assurance (Week 5)
Reliability was verified through a comprehensive test suite using Jest and React Testing Library:

Unit Tests: Verified rendering of MovieCard and SearchBar.

Regression Testing: Ensured navigation between categories (Popular/Top Rated) remains stable after code refactors.

 Tech Stack
Frontend: ReactJS, Vite

Styling: Tailwind CSS

Icons: React Icons

Testing: Jest, React Testing Library

API: TMDb (The Movie Database)

 Installation & Setup
Clone the repository: git clone https://github.com/A-adilajaleel/Movie-Dashboard.git

Install dependencies: npm install

Start development server: npm run dev

Run tests: npm test
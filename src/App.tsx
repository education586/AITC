/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import StudentHelpHubPage from './pages/StudentHelpHubPage';
import ContactPage from './pages/ContactPage';
import FormsPage from './pages/FormsPage';
import PoliciesPage from './pages/PoliciesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-brand-dark selection:bg-brand-red/20 selection:text-brand-dark">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:code" element={<CourseDetailsPage />} />
            <Route path="/student-help-hub" element={<StudentHelpHubPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/forms" element={<FormsPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

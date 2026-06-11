import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BricklayingPage from './courses/BricklayingPage';
import BuildingPage from './courses/BuildingPage';
import GraduateDiplomaPage from './courses/GraduateDiplomaPage';

export default function CourseDetailsPage() {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  const formattedCode = code ? code.toUpperCase() : '';

  useEffect(() => {
    // Scroll to the top of the viewport when changing courses
    window.scrollTo({ top: 0 });

    // Validate that the course code exists
    const validCodes = ['CPC33020', 'CPC50220', 'BSB80120'];
    if (formattedCode && !validCodes.includes(formattedCode)) {
      navigate('/courses', { replace: true });
    }
  }, [formattedCode, navigate]);

  // Dispatch rendering to the completely separate modularized page components
  switch (formattedCode) {
    case 'CPC33020':
      return <BricklayingPage />;
    case 'CPC50220':
      return <BuildingPage />;
    case 'BSB80120':
      return <GraduateDiplomaPage />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full border-4 border-brand-red border-t-transparent animate-spin mx-auto"></div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Loading course syllabus specs...</p>
          </div>
        </div>
      );
  }
}

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OnboardingFlow from './pages/OnboardingFlow';
import RecruiterDashboard from './pages/RecruiterDashboard';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/onboarding" element={<OnboardingFlow />} />
            <Route path="/recruiter" element={<RecruiterDashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

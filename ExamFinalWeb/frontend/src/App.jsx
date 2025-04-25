import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Videos from './components/Video';
import { AuthProvider, useAuth } from './context/AuthContext';
import VideoDet from './components/VideoDet';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Videos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/video/:_id"
            element={
              <ProtectedRoute>
                <VideoDet />
              </ProtectedRoute>
            }
            />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">
                    About Us
                  </h1>
                  <p className="text-gray-700 text-lg">
                    This is a youtube clone app.
                  </p>
                </div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
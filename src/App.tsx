import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Waitlist from './pages/Waitlist';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Comments from './pages/Comments';
import ReviewQueue from './pages/ReviewQueue';
import AutoReplies from './pages/AutoReplies';
import VideoControls from './pages/VideoControls';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Dashboard from './dashboard ';
import DashboardLayout from './components/DashboardLayout';

type View = 'waitlist' | 'login' | 'overview' | 'comments' | 'review' | 'auto-replies' | 'videos' | 'analytics' | 'settings' | 'account';

function App() {
  const [currentView, setCurrentView] = useState<View>('waitlist');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderContent = () => {
    if (!isAuthenticated) {
      if (currentView === 'waitlist') {
        return <Waitlist />;
      }
      return <Login />;
    }

    let content;
    switch (currentView) {
      case 'overview':
        content = <Dashboard />;
        break;
      case 'comments':
        content = <Comments />;
        break;
      case 'review':
        content = <ReviewQueue />;
        break;
      case 'auto-replies':
        content = <AutoReplies />;
        break;
      case 'videos':
        content = <VideoControls />;
        break;
      case 'analytics':
        content = <Analytics />;
        break;
      case 'settings':
        content = <Settings />;
        break;
      case 'account':
        content = <Account />;
        break;
      default:
        content = <Dashboard />;
    }

    return (
      <DashboardLayout
        currentPage={currentView}
        onNavigate={(page) => setCurrentView(page as View)}
      >
        {content}
      </DashboardLayout>
    );
  };

  return (
    <ThemeProvider>
      {renderContent()}
    </ThemeProvider>
  );
}

export default App;
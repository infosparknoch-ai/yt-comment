import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Youtube,
  MessageSquare,
  CheckSquare,
  Settings,
  BarChart3,
  LogOut,
  Menu,
  Send,
  Video,
  User,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { AnimatedThemeToggler } from './ui/AnimatedThemeToggler';
import AIChatPanel from './AIChatPanel';

interface DashboardLayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function DashboardLayout({ children, currentPage, onNavigate }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  const navigation = [
    { id: 'overview', name: 'Dashboard', icon: BarChart3 },
    { id: 'comments', name: 'Comments', icon: MessageSquare },
    { id: 'review', name: 'Review Queue', icon: CheckSquare },
    { id: 'auto-replies', name: 'Auto-Replies', icon: Send },
    { id: 'videos', name: 'Video Controls', icon: Video },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'account', name: 'Account', icon: User },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      <motion.aside
        animate={{ width: isCollapsed ? '80px' : '280px' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="bg-gray-900/50 border-r border-white/10 flex flex-col relative"
      >
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Youtube className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold">ReplyAI</span>
            </motion.div>
          )}
          {isCollapsed && (
            <Youtube className="w-8 h-8 text-red-500 mx-auto" />
          )}
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-gray-800 border border-white/10 rounded-full flex items-center justify-center hover:bg-gray-700 transition z-10"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    } ${isCollapsed ? 'justify-center' : ''}`}
                    title={isCollapsed ? item.name : ''}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && <span className="font-medium">{item.name}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 border-t border-white/10"
          >
            <div className="mb-4 p-4 bg-white/5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full" />
                <div className="flex-1">
                  <p className="font-medium text-sm">Creator Channel</p>
                  <p className="text-xs text-gray-400">Free Plan</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-xs text-gray-400 mb-1">This month</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">12 / 25 replies</span>
                  <span className="text-xs text-gray-500">48%</span>
                </div>
                <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-orange-500" style={{ width: '48%' }} />
                </div>
              </div>
            </div>

            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Log Out</span>
            </button>
          </motion.div>
        )}

        {isCollapsed && (
          <div className="p-4 border-t border-white/10">
            <button
              className="w-full flex items-center justify-center p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition"
              title="Log Out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        )}
      </motion.aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-gray-900/30 border-b border-white/10 px-8 py-4 flex items-center justify-between">
          <button className="lg:hidden" onClick={() => setIsCollapsed(!isCollapsed)}>
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAIChatOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition"
            >
              <Sparkles className="w-4 h-4" />
              AI Lab
            </button>
            <AnimatedThemeToggler />
            <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-red-500/50 transition">
              Upgrade to Pro
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>

      <AIChatPanel isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
    </div>
  );
}
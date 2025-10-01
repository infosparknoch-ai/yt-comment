import { Youtube, Sparkles, Bell, Shield, CreditCard } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [autoReplyEnabled, setAutoReplyEnabled] = useState(false);
  const [responseTone, setResponseTone] = useState('professional');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-gray-400">Manage your preferences and integrations</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Youtube className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold">YouTube Connection</h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <Youtube className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-1">Creator Channel</p>
                <p className="text-sm text-gray-400">Connected • 1.2M subscribers</p>
              </div>
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition">
                Disconnect
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            ReplyAI monitors your YouTube channel for new comments every 15 minutes
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">AI Settings</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="font-medium mb-1">Auto-Reply</p>
                <p className="text-sm text-gray-400">
                  Automatically post AI-generated replies when confidence score exceeds 85%
                </p>
              </div>
              <button
                onClick={() => setAutoReplyEnabled(!autoReplyEnabled)}
                className={`relative w-14 h-8 rounded-full transition flex-shrink-0 ${
                  autoReplyEnabled ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-white/10'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    autoReplyEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="pt-6 border-t border-white/10">
              <label className="block font-medium mb-3">Response Tone</label>
              <div className="grid grid-cols-2 gap-3">
                {['professional', 'friendly', 'casual', 'educational'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setResponseTone(tone)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                      responseTone === tone
                        ? 'bg-gradient-to-r from-red-500 to-orange-500'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {tone.charAt(0).toUpperCase() + tone.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <label className="block font-medium mb-3">Confidence Threshold</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="50"
                  max="100"
                  defaultValue="85"
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>More replies (50%)</span>
                  <span className="font-medium text-white">85%</span>
                  <span>Higher quality (100%)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <label htmlFor="blacklist" className="block font-medium mb-3">
                Keyword Blacklist
              </label>
              <textarea
                id="blacklist"
                placeholder="Enter keywords to ignore (comma-separated)"
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition resize-none"
              />
              <p className="text-xs text-gray-500 mt-2">
                Comments containing these keywords will be ignored by the AI
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium mb-1">Email Notifications</p>
                <p className="text-sm text-gray-400">Receive updates about pending replies</p>
              </div>
              <button className="relative w-14 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
                <div className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full" />
              </button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div>
                <p className="font-medium mb-1">Weekly Reports</p>
                <p className="text-sm text-gray-400">Get a summary of your engagement metrics</p>
              </div>
              <button className="relative w-14 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
                <div className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold">Subscription</h2>
          </div>

          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Current Plan</p>
                <p className="text-2xl font-bold">Free</p>
              </div>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                Active
              </span>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Monthly replies used</span>
                <span className="font-medium">12 / 25</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-orange-500" style={{ width: '48%' }} />
              </div>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/50 transition">
              Upgrade to Pro
            </button>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold">Danger Zone</h2>
          </div>

          <div className="space-y-4">
            <button className="w-full px-4 py-3 bg-white/5 border border-red-500/30 text-red-400 rounded-xl font-medium hover:bg-red-500/10 transition text-left">
              Reset All Settings
            </button>
            <button className="w-full px-4 py-3 bg-white/5 border border-red-500/30 text-red-400 rounded-xl font-medium hover:bg-red-500/10 transition text-left">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { User, Mail, Key, CreditCard, Shield, Trash2 } from 'lucide-react';

export default function Account() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-4xl font-bold mb-2">Account</h1>
        <p className="text-gray-400">Manage your profile and subscription</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Profile Information</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  defaultValue="Creator Channel"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue="creator@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition"
                />
              </div>

              <div>
                <label htmlFor="youtube" className="block text-sm font-medium text-gray-300 mb-2">
                  YouTube Channel ID
                </label>
                <input
                  id="youtube"
                  type="text"
                  defaultValue="UC1234567890"
                  disabled
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-500 cursor-not-allowed"
                />
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/50 transition">
                Save Changes
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Key className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold">API Keys</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  OpenAI API Key
                </label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    defaultValue="sk-xxxxxxxxxxxxxxxxxxxxxxxx"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition"
                  />
                  <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition">
                    Update
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  YouTube API Key (Optional)
                </label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    placeholder="Enter your YouTube API key"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition"
                  />
                  <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Security</h2>
            </div>

            <div className="space-y-4">
              <button className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-left hover:bg-white/10 transition">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">Change Password</p>
                    <p className="text-sm text-gray-400">Update your password</p>
                  </div>
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
              </button>

              <button className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-left hover:bg-white/10 transition">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium mb-1">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-400">Add an extra layer of security</p>
                  </div>
                  <Shield className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Trash2 className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-red-400">Danger Zone</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button className="px-6 py-3 bg-red-500/20 border border-red-500/50 text-red-400 rounded-xl font-medium hover:bg-red-500/30 transition">
              Delete Account
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6 text-red-400" />
              <h2 className="text-xl font-bold">Subscription</h2>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-1">Current Plan</p>
              <p className="text-3xl font-bold mb-1">Free</p>
              <p className="text-sm text-gray-400">No credit card required</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Monthly replies</span>
                <span className="font-medium">12 / 25</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Auto-reply</span>
                <span className="font-medium text-red-400">Disabled</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Video settings</span>
                <span className="font-medium text-red-400">Not available</span>
              </div>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/50 transition">
              Upgrade to Pro
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-bold mb-4">Usage This Month</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">AI Replies</span>
                  <span className="font-medium">12 / 25</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-orange-500" style={{ width: '48%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">API Calls</span>
                  <span className="font-medium">2.4K / 5K</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '48%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-bold mb-4">Billing History</h3>
            <div className="space-y-3">
              <div className="text-sm text-gray-400 text-center py-8">
                No billing history yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
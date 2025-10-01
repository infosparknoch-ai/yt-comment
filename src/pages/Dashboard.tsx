import { TrendingUp, MessageSquare, CheckCircle, Clock } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      label: 'Total Comments',
      value: '1,248',
      change: '+12%',
      trend: 'up',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Questions Detected',
      value: '342',
      change: '+8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-red-500 to-orange-500',
    },
    {
      label: 'Replies Posted',
      value: '289',
      change: '+15%',
      trend: 'up',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
    },
    {
      label: 'Pending Review',
      value: '53',
      change: '-5%',
      trend: 'down',
      icon: Clock,
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const recentComments = [
    {
      id: 1,
      commenterName: 'Sarah Johnson',
      commentText: 'How do you get such great lighting in your videos?',
      videoTitle: 'My Photography Setup Tour 2025',
      sentiment: 'positive',
      isQuestion: true,
      status: 'pending',
      timestamp: '2 minutes ago',
    },
    {
      id: 2,
      commenterName: 'Mike Chen',
      commentText: 'This tutorial is amazing! Can you make one about color grading?',
      videoTitle: 'Complete Guide to Video Editing',
      sentiment: 'positive',
      isQuestion: true,
      status: 'replied',
      timestamp: '15 minutes ago',
    },
    {
      id: 3,
      commenterName: 'Alex Rivera',
      commentText: 'What camera are you using for this?',
      videoTitle: 'Behind the Scenes: My Creative Process',
      sentiment: 'neutral',
      isQuestion: true,
      status: 'pending',
      timestamp: '1 hour ago',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Overview</h1>
        <p className="text-gray-400">Monitor your YouTube engagement at a glance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center opacity-80`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentComments.map((comment) => (
              <div
                key={comment.id}
                className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full" />
                    <div>
                      <p className="font-medium">{comment.commenterName}</p>
                      <p className="text-xs text-gray-400">{comment.timestamp}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      comment.status === 'replied'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
                    {comment.status}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-2">{comment.commentText}</p>
                <p className="text-xs text-gray-500">{comment.videoTitle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Engagement Trends</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Response Rate</span>
                <span className="text-sm font-medium">84.5%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: '84.5%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Question Detection Accuracy</span>
                <span className="text-sm font-medium">92%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '92%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Auto-Reply Success</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-orange-500" style={{ width: '78%' }} />
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl">
              <h3 className="font-semibold mb-2">Upgrade to Pro</h3>
              <p className="text-sm text-gray-300 mb-4">
                Get 1,500 monthly replies, custom prompts, and per-video settings
              </p>
              <button className="w-full py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-red-500/50 transition">
                View Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
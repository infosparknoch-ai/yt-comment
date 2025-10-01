import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, MessageSquare, Clock, ThumbsUp } from 'lucide-react';

export default function Analytics() {
  const metrics = [
    { label: 'Avg Response Time', value: '12 min', change: '-23%', trend: 'down', icon: Clock },
    { label: 'Engagement Rate', value: '84.5%', change: '+12%', trend: 'up', icon: ThumbsUp },
    { label: 'Comments/Day', value: '127', change: '+8%', trend: 'up', icon: MessageSquare },
    { label: 'Question Detection', value: '92%', change: '+5%', trend: 'up', icon: TrendingUp },
  ];

  const topVideos = [
    { title: 'My Photography Setup Tour 2025', comments: 342, questions: 89, replies: 78, engagement: 87 },
    { title: 'Complete Guide to Video Editing', comments: 298, questions: 76, replies: 71, engagement: 93 },
    { title: 'Behind the Scenes: Creative Process', comments: 256, questions: 62, replies: 59, engagement: 95 },
    { title: 'Cinematic B-Roll Tutorial', comments: 189, questions: 47, replies: 44, engagement: 91 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-4xl font-bold mb-2">Analytics</h1>
        <p className="text-gray-400">Track performance and engagement metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center opacity-80">
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`flex items-center gap-1 text-sm font-medium ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {metric.change}
                </span>
              </div>
              <p className="text-3xl font-bold mb-1">{metric.value}</p>
              <p className="text-sm text-gray-400">{metric.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Comment Activity</h2>
          <div className="space-y-4">
            {[100, 120, 95, 140, 110, 130, 127].map((value, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-sm text-gray-400 w-12">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span>
                <div className="flex-1 h-8 bg-white/5 rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(value / 150) * 100}%` }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                  />
                </div>
                <span className="text-sm font-medium w-12">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Reply Performance</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Auto-Posted</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Manual Review</span>
                <span className="text-sm font-medium">18%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '18%' }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-400">Rejected</span>
                <span className="text-sm font-medium">4%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '4%' }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-full bg-gradient-to-r from-red-500 to-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">Top Performing Videos</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Video Title</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Comments</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Questions</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Replies</th>
                <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {topVideos.map((video, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="py-4 px-4">
                    <p className="font-medium">{video.title}</p>
                  </td>
                  <td className="py-4 px-4 text-right">{video.comments}</td>
                  <td className="py-4 px-4 text-right">{video.questions}</td>
                  <td className="py-4 px-4 text-right">{video.replies}</td>
                  <td className="py-4 px-4 text-right">
                    <span className="text-green-400 font-medium">{video.engagement}%</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
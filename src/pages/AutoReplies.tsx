import { motion } from 'framer-motion';
import { CheckCircle, ThumbsUp, MessageSquare, TrendingUp } from 'lucide-react';

export default function AutoReplies() {
  const autoReplies = [
    {
      id: 1,
      commenterName: 'Sarah Johnson',
      commentText: 'How do you get such great lighting in your videos?',
      videoTitle: 'My Photography Setup Tour 2025',
      replyText: "Great question! I use a combination of natural light from my window and two softbox lights positioned at 45-degree angles.",
      postedAt: '2 hours ago',
      likes: 12,
      hasResponse: true,
      sentiment: 'positive',
    },
    {
      id: 2,
      commenterName: 'Mike Chen',
      commentText: 'What camera are you using for this?',
      videoTitle: 'Behind the Scenes: My Creative Process',
      replyText: "Thanks for asking! I'm currently shooting with a Sony A7 IV paired with a 24-70mm f/2.8 lens.",
      postedAt: '5 hours ago',
      likes: 8,
      hasResponse: false,
      sentiment: 'neutral',
    },
    {
      id: 3,
      commenterName: 'Alex Rivera',
      commentText: 'This tutorial is amazing! Can you make one about color grading?',
      videoTitle: 'Complete Guide to Video Editing',
      replyText: "Thank you so much! Yes, I'm planning a comprehensive color grading tutorial for next month. Stay tuned!",
      postedAt: '1 day ago',
      likes: 24,
      hasResponse: true,
      sentiment: 'positive',
    },
    {
      id: 4,
      commenterName: 'Jordan Lee',
      commentText: 'Could you explain the settings you used for this shot?',
      videoTitle: 'Cinematic B-Roll Tutorial',
      replyText: "Absolutely! For this particular shot, I used: ISO 400, f/2.8 aperture, and 1/50 shutter speed to match my 24fps frame rate.",
      postedAt: '1 day ago',
      likes: 15,
      hasResponse: false,
      sentiment: 'neutral',
    },
  ];

  const stats = [
    { label: 'Total Auto-Posted', value: '289', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
    { label: 'Avg Likes per Reply', value: '8.3', icon: ThumbsUp, color: 'from-blue-500 to-cyan-500' },
    { label: 'Follow-up Comments', value: '142', icon: MessageSquare, color: 'from-orange-500 to-red-500' },
    { label: 'Engagement Boost', value: '+34%', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-4xl font-bold mb-2">Auto-Replies</h1>
        <p className="text-gray-400">View all automatically posted replies and their performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 opacity-80`}>
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="space-y-4">
        {autoReplies.map((reply, index) => (
          <motion.div
            key={reply.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0" />

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{reply.commenterName}</p>
                      <span className="text-xs text-gray-500">{reply.postedAt}</span>
                    </div>
                    <p className="text-sm text-gray-400">{reply.videoTitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                      Auto-Posted
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-400 mb-2">Original Comment:</p>
                  <p className="text-gray-200 leading-relaxed mb-3">{reply.commentText}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-3">
                  <p className="text-sm text-gray-400 mb-2">Your Auto-Reply:</p>
                  <p className="text-gray-200 leading-relaxed">{reply.replyText}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">{reply.likes} likes</span>
                  </div>
                  {reply.hasResponse && (
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Has follow-up</span>
                    </div>
                  )}
                  <div className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    reply.sentiment === 'positive' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {reply.sentiment}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
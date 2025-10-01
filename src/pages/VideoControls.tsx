import { motion } from 'framer-motion';
import { Video, Settings as SettingsIcon, Play, MoreVertical } from 'lucide-react';
import { useState } from 'react';

export default function VideoControls() {
  const [videos] = useState([
    {
      id: 1,
      title: 'My Photography Setup Tour 2025',
      thumbnail: '',
      views: '124K',
      comments: 342,
      autoReplyEnabled: true,
      responseTone: 'friendly',
      publishedAt: '2 weeks ago',
    },
    {
      id: 2,
      title: 'Complete Guide to Video Editing',
      thumbnail: '',
      views: '98K',
      comments: 298,
      autoReplyEnabled: true,
      responseTone: 'educational',
      publishedAt: '3 weeks ago',
    },
    {
      id: 3,
      title: 'Behind the Scenes: My Creative Process',
      thumbnail: '',
      views: '87K',
      comments: 256,
      autoReplyEnabled: false,
      responseTone: 'casual',
      publishedAt: '1 month ago',
    },
    {
      id: 4,
      title: 'Cinematic B-Roll Tutorial',
      thumbnail: '',
      views: '156K',
      comments: 189,
      autoReplyEnabled: true,
      responseTone: 'professional',
      publishedAt: '1 month ago',
    },
  ]);

  const toggleAutoReply = (videoId: number) => {
    console.log('Toggle auto-reply for video:', videoId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Video Controls</h1>
          <p className="text-gray-400">Manage per-video settings and preferences</p>
        </div>
        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition">
          Sync Videos
        </button>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
        <p className="text-sm text-blue-300">
          <span className="font-semibold">Pro Tip:</span> You can set different response tones and auto-reply settings for each video
        </p>
      </div>

      <div className="grid gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition"
          >
            <div className="flex gap-6">
              <div className="w-48 h-28 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <Play className="w-12 h-12 text-gray-500" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{video.views} views</span>
                      <span>{video.comments} comments</span>
                      <span>{video.publishedAt}</span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-white/5 rounded-lg transition">
                    <MoreVertical className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
                    <span className="text-sm text-gray-400">Auto-Reply:</span>
                    <button
                      onClick={() => toggleAutoReply(video.id)}
                      className={`relative w-11 h-6 rounded-full transition ${
                        video.autoReplyEnabled ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-white/10'
                      }`}
                    >
                      <div
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          video.autoReplyEnabled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
                    <span className="text-sm text-gray-400">Tone:</span>
                    <select
                      value={video.responseTone}
                      onChange={(e) => console.log('Change tone:', e.target.value)}
                      className="bg-transparent text-sm font-medium focus:outline-none"
                    >
                      <option value="professional" className="bg-gray-800">Professional</option>
                      <option value="friendly" className="bg-gray-800">Friendly</option>
                      <option value="casual" className="bg-gray-800">Casual</option>
                      <option value="educational" className="bg-gray-800">Educational</option>
                    </select>
                  </div>

                  <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition">
                    <SettingsIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">Advanced Settings</span>
                  </button>

                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/30 transition">
                    <Video className="w-4 h-4" />
                    <span className="text-sm font-medium">View Comments</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
        <Video className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Showing 4 of 47 videos</h3>
        <p className="text-gray-400 mb-6">Videos with recent comments are prioritized</p>
        <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/50 transition">
          Load More Videos
        </button>
      </div>
    </motion.div>
  );
}
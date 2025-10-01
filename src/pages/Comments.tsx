import { Search, Filter, ThumbsUp, ThumbsDown, Minus, Sparkles } from 'lucide-react';

export default function Comments() {
  const comments = [
    {
      id: 1,
      commenterName: 'Sarah Johnson',
      commenterAvatar: '',
      commentText: 'How do you get such great lighting in your videos? I struggle with this in my setup.',
      videoTitle: 'My Photography Setup Tour 2025',
      videoId: 'abc123',
      sentiment: 'positive',
      isQuestion: true,
      confidence: 0.95,
      status: 'pending',
      timestamp: '2 minutes ago',
    },
    {
      id: 2,
      commenterName: 'Mike Chen',
      commenterAvatar: '',
      commentText: 'This tutorial is amazing! Can you make one about color grading next?',
      videoTitle: 'Complete Guide to Video Editing',
      videoId: 'def456',
      sentiment: 'positive',
      isQuestion: true,
      confidence: 0.92,
      status: 'replied',
      timestamp: '15 minutes ago',
    },
    {
      id: 3,
      commenterName: 'Alex Rivera',
      commenterAvatar: '',
      commentText: 'What camera are you using for this? The quality is incredible.',
      videoTitle: 'Behind the Scenes: My Creative Process',
      videoId: 'ghi789',
      sentiment: 'positive',
      isQuestion: true,
      confidence: 0.98,
      status: 'pending',
      timestamp: '1 hour ago',
    },
    {
      id: 4,
      commenterName: 'Jamie Lee',
      commenterAvatar: '',
      commentText: "I don't understand why you chose this approach. Seems inefficient.",
      videoTitle: 'My Workflow Optimization Tips',
      videoId: 'jkl012',
      sentiment: 'negative',
      isQuestion: false,
      confidence: 0.76,
      status: 'pending',
      timestamp: '2 hours ago',
    },
    {
      id: 5,
      commenterName: 'Taylor Swift',
      commenterAvatar: '',
      commentText: 'Great content as always! Keep it up.',
      videoTitle: 'Weekly Vlog #45',
      videoId: 'mno345',
      sentiment: 'positive',
      isQuestion: false,
      confidence: 0.65,
      status: 'ignored',
      timestamp: '3 hours ago',
    },
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'text-green-400';
      case 'negative':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <ThumbsUp className="w-4 h-4" />;
      case 'negative':
        return <ThumbsDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'replied':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Comments</h1>
        <p className="text-gray-400">All comments from your YouTube channel</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search comments..."
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition"
          />
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition">
          <Filter className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm font-medium whitespace-nowrap">
          All Comments
        </button>
        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition whitespace-nowrap">
          Questions Only
        </button>
        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition whitespace-nowrap">
          Positive
        </button>
        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition whitespace-nowrap">
          Negative
        </button>
        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition whitespace-nowrap">
          Pending
        </button>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0" />

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{comment.commenterName}</p>
                      <span className="text-xs text-gray-500">{comment.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-400">{comment.videoTitle}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(comment.status)}`}>
                      {comment.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-200 mb-4 leading-relaxed">{comment.commentText}</p>

                <div className="flex items-center gap-4 flex-wrap">
                  {comment.isQuestion && (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-medium text-blue-400">Question Detected</span>
                    </div>
                  )}

                  <div className={`flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg ${getSentimentColor(comment.sentiment)}`}>
                    {getSentimentIcon(comment.sentiment)}
                    <span className="text-xs font-medium capitalize">{comment.sentiment}</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg">
                    <span className="text-xs text-gray-400">Confidence: {Math.round(comment.confidence * 100)}%</span>
                  </div>
                </div>

                {comment.isQuestion && comment.status === 'pending' && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-red-500/50 transition">
                      Generate AI Reply
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
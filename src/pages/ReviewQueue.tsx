import { ThumbsUp, ThumbsDown, Edit3, Send, X } from 'lucide-react';
import { useState } from 'react';

export default function ReviewQueue() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState('');

  const pendingReplies = [
    {
      id: 1,
      commenterName: 'Sarah Johnson',
      commentText: 'How do you get such great lighting in your videos? I struggle with this in my setup.',
      videoTitle: 'My Photography Setup Tour 2025',
      aiReply: "Great question! I use a combination of natural light from my window and two softbox lights positioned at 45-degree angles. The key is to diffuse the light and avoid harsh shadows. I'd recommend starting with one good LED panel and experimenting with placement.",
      confidence: 0.95,
      sentiment: 'positive',
      timestamp: '2 minutes ago',
    },
    {
      id: 2,
      commenterName: 'Alex Rivera',
      commentText: 'What camera are you using for this? The quality is incredible.',
      videoTitle: 'Behind the Scenes: My Creative Process',
      aiReply: "Thanks so much! I'm currently shooting with a Sony A7 IV paired with a 24-70mm f/2.8 lens. The camera's autofocus and low-light performance really make a difference. However, good lighting and composition matter more than the gear itself!",
      confidence: 0.98,
      sentiment: 'positive',
      timestamp: '1 hour ago',
    },
    {
      id: 3,
      commenterName: 'Jamie Park',
      commentText: 'Could you explain the settings you used for this shot?',
      videoTitle: 'Cinematic B-Roll Tutorial',
      aiReply: "Absolutely! For this particular shot, I used: ISO 400, f/2.8 aperture for that shallow depth of field, and 1/50 shutter speed to match my 24fps frame rate. I also shot in S-Log3 for maximum color grading flexibility in post-production.",
      confidence: 0.89,
      sentiment: 'neutral',
      timestamp: '2 hours ago',
    },
  ];

  const handleEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditedText(text);
  };

  const handleSave = () => {
    console.log('Saving edited reply:', editedText);
    setEditingId(null);
  };

  const handleApprove = (id: number) => {
    console.log('Approving reply:', id);
  };

  const handleReject = (id: number) => {
    console.log('Rejecting reply:', id);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">Review Queue</h1>
        <p className="text-gray-400">Review and approve AI-generated replies before posting</p>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
        <p className="text-sm text-blue-300">
          <span className="font-semibold">{pendingReplies.length} replies</span> waiting for your review
        </p>
      </div>

      <div className="space-y-6">
        {pendingReplies.map((reply) => (
          <div
            key={reply.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <p className="font-semibold">{reply.commenterName}</p>
                  <span className="text-xs text-gray-500">{reply.timestamp}</span>
                </div>
                <p className="text-sm text-gray-400 mb-2">{reply.videoTitle}</p>
                <p className="text-gray-200 leading-relaxed">{reply.commentText}</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-300">AI Generated Reply</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">
                    Confidence: {Math.round(reply.confidence * 100)}%
                  </span>
                  <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                      style={{ width: `${reply.confidence * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {editingId === reply.id ? (
                <div className="space-y-3">
                  <textarea
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition resize-none"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-green-500 rounded-lg text-sm font-medium hover:bg-green-600 transition"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-200 leading-relaxed">{reply.aiReply}</p>
              )}
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => handleApprove(reply.id)}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/50 transition"
              >
                <ThumbsUp className="w-4 h-4" />
                Approve & Post
              </button>

              <button
                onClick={() => handleEdit(reply.id, reply.aiReply)}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 transition"
              >
                <Edit3 className="w-4 h-4" />
                Edit Reply
              </button>

              <button
                onClick={() => handleReject(reply.id)}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-red-500/30 text-red-400 rounded-lg font-medium hover:bg-red-500/10 transition"
              >
                <X className="w-4 h-4" />
                Reject
              </button>

              <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-lg font-medium hover:bg-blue-500/30 transition ml-auto">
                <Send className="w-4 h-4" />
                Regenerate Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      {pendingReplies.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <ThumbsUp className="w-10 h-10 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">All caught up!</h3>
          <p className="text-gray-400">No pending replies to review at the moment</p>
        </div>
      )}
    </div>
  );
}
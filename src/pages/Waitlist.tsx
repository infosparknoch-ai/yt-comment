import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Youtube, Sparkles, Zap, CheckCircle, ChevronDown } from 'lucide-react';
import { Highlighter } from '../components/ui/Highlighter';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      question: 'How does AI comment detection work?',
      answer: 'Our AI uses advanced natural language processing to analyze comment sentiment, detect questions, and generate contextual replies based on your video content and preferred tone.',
    },
    {
      question: 'Will the replies sound natural?',
      answer: 'Yes! Our AI is trained to generate human-like responses that match your chosen tone (professional, friendly, casual, or educational). You can review and edit any reply before posting.',
    },
    {
      question: 'Is my YouTube data secure?',
      answer: 'Absolutely. We use OAuth 2.0 for secure authentication and never store your YouTube password. Your data is encrypted and we follow industry best practices for security.',
    },
    {
      question: 'Can I customize the AI responses?',
      answer: 'Yes! You can set response tones, keyword blacklists, per-video settings, and even create custom AI prompts on our Pro plan.',
    },
    {
      question: 'What happens if I exceed my monthly quota?',
      answer: 'If you reach your plan limit, you can either upgrade to a higher tier or wait until next month. No replies will be auto-posted once you hit the limit.',
    },
    {
      question: 'Do you support multiple languages?',
      answer: 'Currently, we support English with more languages coming soon. The AI can detect and respond in the language of the original comment.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Youtube className="w-8 h-8 text-red-500" />
            <span className="text-2xl font-bold">ReplyAI</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
            <a href="#how" className="text-gray-300 hover:text-white transition">How it works</a>
            <button className="px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">AI-Powered YouTube Comment Management</span>
          </div>

          <h1 className="text-7xl font-bold mb-6 leading-tight">
            Never Miss Another
            <br />
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              YouTube Comment
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Automatically detect{' '}
            <Highlighter action="underline" color="#FF9800">
              questions in your YouTube comments
            </Highlighter>{' '}
            and generate intelligent, contextual replies using{' '}
            <Highlighter action="highlight" color="#87CEFA">
              advanced AI
            </Highlighter>
            . Engage your audience at scale.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex gap-4 max-w-lg mx-auto mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition flex items-center gap-2"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="max-w-lg mx-auto mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">You're on the list!</h3>
              <p className="text-gray-400">We'll notify you when we launch.</p>
            </div>
          )}

          <p className="text-sm text-gray-500">
            Join 2,847 creators already on the waitlist
          </p>
        </div>
      </section>

      <section id="features" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Automate Your YouTube Engagement
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition">
              <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI Question Detection</h3>
              <p className="text-gray-400 leading-relaxed">
                Advanced NLP identifies questions in comments automatically,
                so you never miss an opportunity to engage with your audience.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition">
              <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Smart Reply Generation</h3>
              <p className="text-gray-400 leading-relaxed">
                GPT-4 powered responses that match your tone and style.
                Review before posting or enable auto-reply for high-confidence responses.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition">
              <div className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Sentiment Analysis</h3>
              <p className="text-gray-400 leading-relaxed">
                Understand comment sentiment at a glance. Prioritize responses
                based on emotional context and engagement potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">How it works?</h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Get started in minutes, not hours
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-6">Step 1</span>
              <h3 className="text-3xl font-bold mb-4">Connect YouTube</h3>
              <p className="text-gray-400 leading-relaxed">
                Sign in with Google and authorize access to your YouTube channel.
                We'll start monitoring your comments immediately.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-3xl p-8">
              <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-6">Step 2</span>
              <h3 className="text-3xl font-bold mb-4">Set Your Preferences</h3>
              <p className="text-gray-400 leading-relaxed">
                Choose your response tone, enable auto-reply, and customize
                which types of comments to prioritize.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-3xl p-8">
              <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-6">Step 3</span>
              <h3 className="text-3xl font-bold mb-4">Review & Approve</h3>
              <p className="text-gray-400 leading-relaxed">
                AI generates replies every 15 minutes. Review suggestions in
                your dashboard, edit if needed, and approve with one click.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-6">Step 4</span>
              <h3 className="text-3xl font-bold mb-4">Engage & Grow</h3>
              <p className="text-gray-400 leading-relaxed">
                Watch your engagement soar as you respond to every question.
                Build stronger connections with your audience effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Start free, scale as you grow
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">25 AI replies per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Manual approval required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Basic sentiment analysis</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white/10 border border-white/20 rounded-full font-semibold hover:bg-white/20 transition">
                Get Started
              </button>
            </div>

            <div className="p-8 bg-gradient-to-b from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-3xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">300 AI replies per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Auto-reply enabled</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Advanced sentiment analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Custom response tones</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition">
                Start Free Trial
              </button>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">1,500 AI replies per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Per-video settings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Custom AI prompts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white/10 border border-white/20 rounded-full font-semibold hover:bg-white/20 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              Frequently Asked{' '}
              <Highlighter action="underline" color="#FF9800">
                Questions
              </Highlighter>
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about ReplyAI
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/5 transition"
                >
                  <span className="font-semibold text-left text-lg">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/50 transition">
              Contact Support
            </button>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Youtube className="w-6 h-6 text-red-500" />
                <span className="text-xl font-bold">ReplyAI</span>
              </div>
              <p className="text-sm text-gray-400">
                AI-powered YouTube comment management for creators
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#how" className="hover:text-white transition">How it works</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>© 2025 ReplyAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
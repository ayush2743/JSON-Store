import { useState } from 'react';
import { Copy, Send, Loader } from 'lucide-react';

const App = () => {
  const [jsonData, setJsonData] = useState<string>('');
  const [jsonLink, setJsonLink] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false); 

  // Handler to send JSON data to the backend and get JSON Link
  const handleSubmit = async () => {
    setLoading(true); 
    try {
      const response = await fetch('https://backend.saxenaayush27-work.workers.dev/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(JSON.parse(jsonData)),
      });

      const data = await response.json();

      if (response.ok) {
        setJsonLink(`https://backend.saxenaayush27-work.workers.dev/api/${data.api_key}`);
        setError('');
      } else {
        setError(data.error || 'Something went wrong');
        setTimeout(() => setError(''), 2000);
      }
    } catch (err) {
      setError('Wrong JSON format');
      setTimeout(() => setError(''), 2000);
    } finally {
      setLoading(false);
    }
  };

  // Copy JSON Link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(jsonLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-200 text-white p-1 flex flex-col items-center justify-center font-mono">
      <div className="w-full max-w-2xl bg-[#0f0f0f] rounded-1xl shadow-xl border border-zinc-800 p-8">
        <h1 className="text-6xl font-bold text-right mb-6 text-white tracking-tight font-sans">
          JSON <span className="text-orange-400">Store</span>
        </h1>

        {/* JSON Input Section */}
        <div className="mb-6">
          <label className="block mb-2 text-xl font-semibold text-gray-300">
            Enter JSON Data
          </label>
          <textarea
            value={jsonData}
            onChange={(e) => setJsonData(e.target.value)}
            rows={5}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-1xl p-4 text-lg text-white focus:ring-2 focus:ring-orange-400 outline-none transition duration-300 resize-none placeholder-gray-600"
            placeholder="Paste your JSON data here..."
          />
        </div>

        {/* Submit Button with Loader */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-orange-400 text-black text-xl font-bold rounded-1xl hover:bg-orange-100 transition duration-300 flex items-center justify-center space-x-4 mb-5"
          disabled={loading}
        >
          {loading ? (
            <Loader className="w-6 h-6 animate-spin" /> 
          ) : (
            <Send className="w-6 h-6" />
          )}
          <span>{loading ? 'Processing...' : 'Generate JSON Link'}</span>
        </button>

        {/* JSON Link Display */}
        {jsonLink && (
          <div className="mb-5 bg-zinc-900 p-4 rounded-1xl flex items-center justify-between border border-zinc-800">
            <code className="text-lg text-gray-300 truncate mr-4">
              {jsonLink.split('/').pop()}
            </code>
            <button
              onClick={handleCopyLink}
              className="text-orange-400 hover:text-orange-100 transition"
            >
              {copied ? 'Copied!' : <Copy className="w-5 h-5" />}
            </button>
          </div>
        )}


        {/* Error Message */}
        {error && (
          <div className="mb-5 bg-red-500/20 border border-red-500/30 text-red-400 p-3 rounded-1xl text-center text-lg">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

import { useState } from 'react';

const StoryPage = () => {
  const [input, setInput] = useState('');
  const [story, setStory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, let's just set the story to the input value.
    // This is where you would call your AI story generation function.
    setStory(input);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-700">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">
          Generate a Story
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 p-2 mb-4 rounded text-black"
            placeholder="Enter your story idea"
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
          >
            Generate Story
          </button>
        </form>
        {story && (
          <div className="mt-6">
            <h2 className="text-xl font-bold text-purple-700">Your Story</h2>
            <p className="mt-2 text-yellow-500">{story}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryPage;

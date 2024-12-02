import React, { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div>
      <h3 className="text-gray-900 dark:text-white font-semibold mb-4 transition-colors duration-200">Join a Newsletter</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-200">
        It has long been known that a reader's attention will be diverted from
      </p>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email Here"
          className="w-full bg-white dark:bg-navy-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-200 dark:border-gray-700 transition-colors duration-200"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          →
        </button>
      </form>
    </div>
  );
}
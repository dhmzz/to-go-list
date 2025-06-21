import { useState } from 'react';
import { supabase } from '../../services/Supabase';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      window.location.href = '/';
    }
  };

  // 🔐 OAuth sign-in handler
  const handleOAuthSignIn = async (provider: 'google' | 'facebook' | 'apple') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin,
      },
    });

    if (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-tr from-gray-100 to-blue-50 shadow">
          <span className="text-2xl">🔐</span>
        </div>
        <h2 className="text-xl font-semibold mb-2">Sign in with email</h2>
        <p className="text-gray-500 text-sm mb-6">
          Sign in to mark your maps, notes, and next adventures.
        </p>

        <form onSubmit={handleSignIn} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
          >
            {loading ? 'Loading...' : 'Get Started'}
          </button>
        </form>

        <div className="text-right text-sm mt-2">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300 border-dotted" />
          <span className="mx-2 text-gray-400 text-sm">Or sign in with</span>
          <hr className="flex-grow border-gray-300 border-dotted" />
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleOAuthSignIn('google')}
            className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition cursor-pointer"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleOAuthSignIn('facebook')}
            className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition cursor-pointer"
          >
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleOAuthSignIn('apple')}
            className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition cursor-pointer"
          >
            <img src="https://www.svgrepo.com/show/508761/apple.svg" alt="Apple" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

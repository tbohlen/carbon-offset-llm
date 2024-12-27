import { useState } from 'react';
import Head from 'next/head';

export default function Signup() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="bg-background text-foreground font-sans min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>{isSignUp ? 'Sign Up' : 'Sign In'} - Carbon Offset LLM</title>
        <meta
          name="description"
          content="Sign up or sign in to Carbon Offset LLM."
        />
      </Head>

      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          {isSignUp ? 'Create an Account' : 'Sign In to Your Account'}
        </h1>
        <form>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand text-white py-2 rounded-md hover:bg-brand-dark transition"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-brand hover:underline"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}

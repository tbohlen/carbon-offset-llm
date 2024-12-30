'use client';

import { useUser } from '@auth0/nextjs-auth0';
import LogoutButton from '../../components/logout-button';
import { redirect } from 'next/navigation';

export default function Dashboard() {
  const { user, isLoading, error } = useUser();

  if (isLoading) return <div>Loading...</div>;
  
  if (error) return <div>Error: {error.message}</div>;
  
  if (!user) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#006D77] to-[#83C5BE] text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Carbon Offset LLM Dashboard</h1>
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* User Info */}
      <main className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-6">Your Profile</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {user.picture && (
              <div className="flex flex-col items-center">
                <img 
                  src={user.picture} 
                  alt="Profile" 
                  className="rounded-full w-32 h-32 mb-4"
                />
              </div>
            )}
            
            <div className="space-y-4">
              {Object.entries(user).map(([key, value]) => (
                <div key={key} className="border-b pb-2">
                  <div className="text-sm text-gray-600 capitalize">
                    {key.replace(/_/g, ' ')}
                  </div>
                  <div className="text-gray-900">
                    {typeof value === 'string' ? value : JSON.stringify(value)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
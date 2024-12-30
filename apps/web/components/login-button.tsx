'use client';

export default function LoginButton() {
  return (
    <a
      href="/auth/login"
      className="px-4 py-2 rounded-lg transition-colors duration-200 bg-[#E29578] text-white hover:bg-opacity-90"
    >
      Sign In
    </a>
  );
}  
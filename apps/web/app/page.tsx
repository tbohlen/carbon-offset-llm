// types.ts
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FooterColumnProps {
  title: string;
  links: string[];
}

import { Shield, BarChart3, Code2, Leaf, Lock, CreditCard } from 'lucide-react';
import Link from 'next/link';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '',
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-lg transition-colors duration-200";
  const styles = variant === 'primary' 
    ? `${baseStyles} bg-[#E29578] text-white hover:bg-opacity-90` 
    : `${baseStyles} text-white hover:text-gray-200`;

  if (href) {
    return (
      <Link href={href} className={`${styles} ${className}`}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={`${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-[#006D77] p-4 rounded-full text-white mb-4">
      <Icon className="h-8 w-8" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center mb-4">
      <Icon className="h-6 w-6 text-[#006D77] mr-2" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    <ul className="space-y-2 text-gray-300">
      {links.map((link, index) => (
        <li key={index}>
          <Link href="#" className="hover:text-white transition-colors duration-200">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function LandingPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#006D77] to-[#83C5BE] text-white">
        <div className="container mx-auto px-6 py-16">
          <nav className="flex justify-between items-center mb-16">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8" />
              <span className="text-xl font-bold">Carbon Offset LLM</span>
            </Link>
            <div className="space-x-8">
              <Button href="/docs" variant="secondary">Documentation</Button>
              <Button href="/pricing" variant="secondary">Pricing</Button>
              <Button href="/signup">Get Started</Button>
            </div>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Offset the Carbon Footprint of Your AI Operations
            </h1>
            <p className="text-xl mb-8">
              Automatically calculate and offset the environmental impact of your LLM API calls. 
              Seamlessly integrate with OpenAI and Anthropic APIs while contributing to a sustainable future.
            </p>
            <Button href="/signup" className="px-6 py-3 text-lg">
              Start Offsetting Today
            </Button>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard
            icon={Shield}
            title="Enterprise-Grade Security"
            description="We never store your API queries or responses. Your data passes through our secure infrastructure with end-to-end encryption."
          />
          <FeatureCard
            icon={BarChart3}
            title="Carbon Impact Dashboard"
            description="Track and visualize your LLM carbon footprint in real-time. Make informed decisions about your AI usage and environmental impact."
          />
          <FeatureCard
            icon={Code2}
            title="Simple Integration"
            description="Replace your existing API endpoint with ours. No code changes required beyond the endpoint URL and API key."
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            <StepCard
              icon={CreditCard}
              title="1. Set Up Your Account"
              description="Create an account and add your payment method. We'll generate your API key instantly."
            />
            <StepCard
              icon={Code2}
              title="2. Update Your Endpoint"
              description="Replace your existing LLM API endpoint with our proxy endpoint. No other code changes needed."
            />
            <StepCard
              icon={Leaf}
              title="3. Start Offsetting"
              description="We'll automatically calculate and offset the carbon footprint of each API call you make."
            />
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-white border border-gray-200 rounded-lg p-8 flex items-start space-x-6">
          <Lock className="h-12 w-12 text-[#006D77] flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
            <p className="text-gray-600 mb-4">
              Your security is our top priority. We operate with bank-level encryption and never store your API queries or responses. 
              Our infrastructure is designed to be completely transparent while maintaining the highest security standards.
            </p>
            <Link href="/security" className="text-[#006D77] hover:underline font-medium">
              Learn more about our security measures →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2F4550] text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6" />
                <span className="font-bold">Carbon Offset LLM</span>
              </Link>
              <p className="text-gray-300">
                Making AI sustainable, one API call at a time.
              </p>
            </div>
            <FooterColumn 
              title="Product"
              links={['Documentation', 'Pricing', 'API Reference']}
            />
            <FooterColumn 
              title="Company"
              links={['About Us', 'Blog', 'Contact']}
            />
            <FooterColumn 
              title="Legal"
              links={['Privacy Policy', 'Terms of Service', 'Security']}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
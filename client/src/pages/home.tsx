import { motion } from "framer-motion";
import { 
  FileText, 
  Sparkles, 
  CreditCard, 
  Users, 
  Download, 
  Globe2,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { FeatureCard } from "@/components/feature-card";
import { PricingCard } from "@/components/pricing-card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/20">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold font-display text-slate-900">BillMate</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden sm:inline-flex text-slate-600 hover:text-primary"
              onClick={() => window.location.href = 'https://app.getbillmate.de/login'}
            >
              Log in
            </Button>
            <Button 
              size="sm" 
              className="bg-slate-900 text-white hover:bg-slate-800"
              onClick={() => window.location.href = 'https://app.getbillmate.de/register'}
            >
              Get Started
            </Button>
            
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium border border-indigo-100 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Now available for German Freelancers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto">
              Create Invoices & <span className="text-gradient">AI Proposals</span> in Seconds
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop wasting time on manual paperwork. BillMate helps you generate professional invoices, track payments, and win more clients with AI-powered proposals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              
                <ShinyButton className="w-full sm:w-auto text-lg h-14">
                  Start Free Trial
                </ShinyButton>
              
              
                <Button variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg border-slate-200 bg-white hover:bg-slate-50 text-slate-700">
                  See Demo
                </Button>
              
            </div>
          </motion.div>

          {/* Dashboard Mockup */}
          <DashboardMockup />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">The Freelancer's Nightmare</h2>
            <p className="text-lg text-slate-600">Still managing invoices in Word or Excel? It's costing you more than just time.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Manual Invoicing", desc: "Hours wasted copy-pasting details into templates.", color: "bg-red-50 text-red-600" },
              { title: "Time-consuming Proposals", desc: "Writing proposals from scratch for every lead.", color: "bg-orange-50 text-orange-600" },
              { title: "Late Payments", desc: "Awkward follow-up emails and lost revenue.", color: "bg-amber-50 text-amber-600" },
              { title: "Disorganized Clients", desc: "Files scattered across folders and emails.", color: "bg-rose-50 text-rose-600" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 font-bold text-xl`}>
                  !
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mt-2 mb-4">Everything you need to run your business</h2>
            <p className="text-lg text-slate-600">Powerful tools designed specifically for freelancers and agencies.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Sparkles} 
              title="AI Proposal Generator" 
              description="Create winning proposals in seconds. Describe the project, and our AI writes the scope, timeline, and pricing for you."
              delay={0.1}
            />
            <FeatureCard 
              icon={FileText} 
              title="Smart Invoice Builder" 
              description="Professional invoices that look great on any device. Auto-fill client details and calculations."
              delay={0.2}
            />
            <FeatureCard 
              icon={CreditCard} 
              title="Payment Tracking" 
              description="Know exactly who's paid and who owes you money. Automated reminders do the awkward chasing for you."
              delay={0.3}
            />
            <FeatureCard 
              icon={Users} 
              title="Client Management" 
              description="A mini-CRM built for freelancers. Keep all client details, projects, and files in one secure place."
              delay={0.4}
            />
            <FeatureCard 
              icon={Download} 
              title="PDF Export" 
              description="Download beautiful, tax-compliant PDF invoices ready to send to your clients or accountant."
              delay={0.5}
            />
            <FeatureCard 
              icon={Globe2} 
              title="Multi-currency (EUR)" 
              description="Built for Europe. Handle VAT, multiple currencies, and language localization with ease."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-display text-slate-900">How BillMate Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 z-0" />

            {[
              { step: "01", title: "Add Client", desc: "Input client details once and reuse them forever." },
              { step: "02", title: "Generate Invoice", desc: "Use AI to draft proposals or invoices instantly." },
              { step: "03", title: "Send & Get Paid", desc: "Send via email and track payment status in real-time." },
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center mb-6 text-2xl font-bold text-primary font-display">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-400 text-lg">Choose the plan that fits your business stage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Starter"
              price="Free"
              description="Perfect for new freelancers just starting out."
              features={["3 Clients", "5 Invoices / month", "Basic Templates", "PDF Export"]}
            />
            <PricingCard
              name="Pro"
              price="€9"
              period="/month"
              description="For growing freelancers with regular clients."
              features={["Unlimited Clients", "Unlimited Invoices", "AI Proposal Generator", "Payment Reminders", "Multi-currency"]}
              popular={true}
            />
            <PricingCard
              name="Business"
              price="€19"
              period="/month"
              description="For small agencies and power users."
              features={["Everything in Pro", "White-labeling", "Team Members (up to 3)", "Priority Support", "API Access"]}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-slate-900">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-medium text-slate-900">Is it compliant with German tax rules?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Yes! BillMate is designed with German freelancing regulations in mind (Kleinunternehmerregelung, VAT/MwSt support). Our templates include all mandatory invoice fields required by the Finanzamt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-medium text-slate-900">Can I export DATEV compatible files?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Currently, we support structured CSV exports that can be imported into DATEV and other accounting software. Direct DATEV XML integration is coming in Q4 2026.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-medium text-slate-900">Is my data secure?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Absolutely. We use bank-grade 256-bit encryption for all data transmission and storage. Your data is backed up daily and stored on secure servers within the EU, fully GDPR compliant.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">Start Billing Smarter Today</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Join thousands of freelancers who have saved time and increased their revenue with BillMate.
          </p>
          
            <ShinyButton className="text-lg px-10 py-6 h-auto">
              Get Started for Free
            </ShinyButton>
         
          <p className="mt-6 text-sm text-slate-500">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">B</span>
                </div>
                <span className="text-lg font-bold font-display text-white">BillMate</span>
              </div>
              <p className="text-sm">
                The smart invoicing platform for modern freelancers and agencies.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Freelance Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tax Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 BillMate GmbH. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

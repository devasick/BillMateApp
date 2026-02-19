import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ name, price, period, description, features, popular }: PricingCardProps) {
  return (
    <div className={cn(
      "relative p-8 rounded-2xl border bg-white flex flex-col h-full transition-all duration-300 hover:shadow-xl",
      popular ? "border-primary shadow-lg shadow-primary/10 ring-1 ring-primary" : "border-slate-200"
    )}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
          Most Popular
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{name}</h3>
        <p className="text-slate-500 text-sm mb-4">{description}</p>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-slate-900">{price}</span>
          {period && <span className="text-slate-500 ml-1">{period}</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm text-slate-600">
            <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <WaitlistDialog>
        <Button 
          className={cn(
            "w-full py-6 text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]",
            popular 
              ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" 
              : "bg-slate-100 text-slate-900 hover:bg-slate-200"
          )}
        >
          {popular ? "Start Free Trial" : "Get Started"}
        </Button>
      </WaitlistDialog>
    </div>
  );
}

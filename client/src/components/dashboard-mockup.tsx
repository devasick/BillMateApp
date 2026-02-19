import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, DollarSign, Users, CreditCard, Activity } from "lucide-react";

const data = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 550 },
  { name: "Thu", value: 450 },
  { name: "Fri", value: 650 },
  { name: "Sat", value: 480 },
  { name: "Sun", value: 700 },
];

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto w-full max-w-5xl rounded-2xl bg-slate-900/5 p-4 md:p-6 lg:p-8 backdrop-blur-xl border border-white/20"
    >
      {/* Glossy Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 to-white/0 pointer-events-none" />

      {/* Main Dashboard Card */}
      <Card className="relative overflow-hidden border-0 shadow-2xl shadow-indigo-500/10 bg-white/90 backdrop-blur">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-indigo-400" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Sidebar Mockup (Hidden on mobile) */}
          <div className="hidden md:flex flex-col space-y-4 border-r pr-6 border-slate-100">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">B</div>
              <span className="font-display font-bold text-lg text-slate-800">BillMate</span>
            </div>
            
            {["Dashboard", "Invoices", "Proposals", "Clients", "Reports"].map((item, i) => (
              <div key={item} className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${i === 0 ? "bg-primary/10 text-primary" : "text-slate-500 hover:bg-slate-50"}`}>
                <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-primary" : "bg-transparent"}`} />
                <span>{item}</span>
              </div>
            ))}

            <div className="mt-auto pt-6 border-t border-slate-100">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-xs">
                  <p className="font-semibold text-slate-700">John Doe</p>
                  <p className="text-slate-500">Freelancer Pro</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-2 space-y-6">
            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border border-slate-100 shadow-sm bg-gradient-to-br from-white to-slate-50">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase">Total Revenue</p>
                    <h3 className="text-2xl font-bold text-slate-800 mt-1">€12,450</h3>
                  </div>
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <DollarSign className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-2 flex items-center text-xs text-green-600 font-medium">
                  <ArrowUpRight className="w-3 h-3 mr-1" /> +12% from last month
                </div>
              </Card>
              
              <Card className="p-4 border border-slate-100 shadow-sm bg-gradient-to-br from-white to-slate-50">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase">Active Clients</p>
                    <h3 className="text-2xl font-bold text-slate-800 mt-1">24</h3>
                  </div>
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-2 flex items-center text-xs text-indigo-600 font-medium">
                  <Activity className="w-3 h-3 mr-1" /> 3 new this week
                </div>
              </Card>
            </div>

            {/* Chart Area */}
            <Card className="p-4 border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-slate-800">Revenue Overview</h4>
                <Badge variant="secondary" className="bg-slate-100 text-slate-600">Last 7 Days</Badge>
              </div>
              <div className="h-[180px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#6366f1" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Recent Invoices List */}
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800 text-sm">Recent Invoices</h4>
              {[
                { client: "TechCorp GmbH", amount: "€2,400.00", status: "Paid", color: "text-green-600 bg-green-50" },
                { client: "Design Studio Berlin", amount: "€850.00", status: "Pending", color: "text-amber-600 bg-amber-50" },
              ].map((inv, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-white border border-slate-200">
                      <CreditCard className="w-4 h-4 text-slate-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">{inv.client}</p>
                      <p className="text-xs text-slate-500">Invoice #00{234 + i}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-800">{inv.amount}</p>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${inv.color}`}>{inv.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

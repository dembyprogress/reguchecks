import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  const [email, setEmail] = useState("");

  return (
    <div className="p-6 space-y-6 bg-white text-gray-900">
      <h1 className="text-3xl font-bold text-center text-blue-900">ReguChecks: Effortless MCA Compliance</h1>
      <p className="text-center text-lg text-gray-700">AI-powered audits, real-time alerts, and seamless compliance tracking.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-lg">
          <CardContent>
            <h2 className="text-lg font-semibold text-green-600">Automated Compliance Audits</h2>
            <p className="text-gray-600">AI-driven audits ensure your dispensary stays compliant.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent>
            <h2 className="text-lg font-semibold text-green-600">Real-Time Violation Alerts</h2>
            <p className="text-gray-600">Integrated with Dutchie & Flowhub for instant alerts.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent>
            <h2 className="text-lg font-semibold text-green-600">MCA-Ready Reports</h2>
            <p className="text-gray-600">Generate MCA-compliant reports in seconds.</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center">
        <h2 className="text-xl font-semibold text-blue-900">Get Your Free Compliance Audit</h2>
        <p className="text-gray-700">Enter your email to receive a free compliance checklist.</p>
        <Input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="mt-2 border border-gray-300 rounded-md p-2" 
        />
        <Button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Get Free Audit</Button>
      </div>
    </div>
  );
}
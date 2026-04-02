import React, { useState } from 'react';
import { Save } from 'lucide-react';

export function BreakdownForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Breakdown record saved successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
        <h2 className="text-lg font-semibold text-slate-800">Daily Breakdown Record</h2>
        <p className="text-sm text-slate-500">Report machine breakdowns and maintenance activities.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {successMessage && (
          <div className="p-3 bg-green-50 text-green-700 rounded-md border border-green-200 text-sm font-medium">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="date" className="block text-sm font-medium text-slate-700">Date</label>
            <input type="date" id="date" required className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" defaultValue={new Date().toISOString().split('T')[0]} />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="machineId" className="block text-sm font-medium text-slate-700">Machine ID / Name</label>
            <input type="text" id="machineId" required placeholder="e.g. MCH-001" className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div className="space-y-2">
            <label htmlFor="breakdownTime" className="block text-sm font-medium text-slate-700">Breakdown Time</label>
            <input type="time" id="breakdownTime" required className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div className="space-y-2">
            <label htmlFor="repairTime" className="block text-sm font-medium text-slate-700">Repair Completed Time</label>
            <input type="time" id="repairTime" className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <p className="text-xs text-slate-500">Leave blank if still pending</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="maintenancePerson" className="block text-sm font-medium text-slate-700">Maintenance Personnel</label>
            <input type="text" id="maintenancePerson" placeholder="Name of technician" className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div className="space-y-2">
            <label htmlFor="status" className="block text-sm font-medium text-slate-700">Status</label>
            <select id="status" required className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="Pending">Pending Repair</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="issue" className="block text-sm font-medium text-slate-700">Issue Description</label>
          <textarea id="issue" required rows={3} placeholder="Describe the breakdown symptoms and cause..." className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="actionTaken" className="block text-sm font-medium text-slate-700">Action Taken (if resolved)</label>
          <textarea id="actionTaken" rows={2} placeholder="What was done to fix the issue..." className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>

        <div className="pt-4 flex justify-end">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Save className="h-4 w-4" />
            {isSubmitting ? 'Saving...' : 'Save Record'}
          </button>
        </div>
      </form>
    </div>
  );
}

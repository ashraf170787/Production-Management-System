import React, { useState } from 'react';
import { Save } from 'lucide-react';

export function ProductionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Production record saved successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
        <h2 className="text-lg font-semibold text-slate-800">Daily Production Record</h2>
        <p className="text-sm text-slate-500">Enter the production details for the current shift.</p>
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
            <label htmlFor="shift" className="block text-sm font-medium text-slate-700">Shift</label>
            <select id="shift" required className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select Shift</option>
              <option value="Morning">Morning (06:00 - 14:00)</option>
              <option value="Evening">Evening (14:00 - 22:00)</option>
              <option value="Night">Night (22:00 - 06:00)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="product" className="block text-sm font-medium text-slate-700">Product Name</label>
            <input type="text" id="product" required placeholder="e.g. Widget A" className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div className="space-y-2">
            <label htmlFor="operator" className="block text-sm font-medium text-slate-700">Operator Name</label>
            <input type="text" id="operator" required placeholder="John Doe" className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div className="space-y-2">
            <label htmlFor="targetQty" className="block text-sm font-medium text-slate-700">Target Quantity</label>
            <input type="number" id="targetQty" min="0" required placeholder="0" className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div className="space-y-2">
            <label htmlFor="actualQty" className="block text-sm font-medium text-slate-700">Actual Quantity Produced</label>
            <input type="number" id="actualQty" min="0" required placeholder="0" className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className="block text-sm font-medium text-slate-700">Additional Notes</label>
          <textarea id="notes" rows={3} placeholder="Any issues or observations during production..." className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>

        <div className="pt-4 flex justify-end">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Save className="h-4 w-4" />
            {isSubmitting ? 'Saving...' : 'Save Record'}
          </button>
        </div>
      </form>
    </div>
  );
}

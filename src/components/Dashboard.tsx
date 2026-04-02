import React from 'react';
import { Factory, Trash2, Wrench, TrendingUp, AlertCircle, Clock } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { label: 'Total Production Today', value: '1,245 units', icon: Factory, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Total Wastage Today', value: '23 kg', icon: Trash2, color: 'text-red-600', bg: 'bg-red-100' },
    { label: 'Active Breakdowns', value: '2', icon: Wrench, color: 'text-amber-600', bg: 'bg-amber-100' },
    { label: 'Efficiency Rate', value: '94.2%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  const recentActivities = [
    { id: 1, type: 'production', text: 'Morning shift produced 450 units of Widget A', time: '2 hours ago', icon: Factory, color: 'text-blue-500' },
    { id: 2, type: 'breakdown', text: 'Machine MCH-002 reported breakdown', time: '3 hours ago', icon: AlertCircle, color: 'text-amber-500' },
    { id: 3, type: 'wastage', text: '5kg material wastage reported in Line 1', time: '4 hours ago', icon: Trash2, color: 'text-red-500' },
    { id: 4, type: 'production', text: 'Night shift produced 380 units of Widget B', time: '8 hours ago', icon: Factory, color: 'text-blue-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Dashboard Overview</h2>
        <p className="text-slate-500">Welcome to the Production Management System.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h3 className="font-semibold text-slate-800">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {recentActivities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className="flex gap-4">
                    <div className="mt-1">
                      <Icon className={`h-5 w-5 ${activity.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">{activity.text}</p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-slate-500">
                        <Clock className="h-3 w-3" />
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h3 className="font-semibold text-slate-800">Quick Actions</h3>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer group">
              <Factory className="h-8 w-8 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-medium text-slate-800">Log Production</h4>
              <p className="text-xs text-slate-500 mt-1">Record new production output</p>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition-colors cursor-pointer group">
              <Trash2 className="h-8 w-8 text-red-500 mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-medium text-slate-800">Report Wastage</h4>
              <p className="text-xs text-slate-500 mt-1">Log material or product waste</p>
            </div>
            <div className="p-4 border border-slate-200 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-colors cursor-pointer group">
              <Wrench className="h-8 w-8 text-amber-500 mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-medium text-slate-800">Report Breakdown</h4>
              <p className="text-xs text-slate-500 mt-1">Log machine issues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

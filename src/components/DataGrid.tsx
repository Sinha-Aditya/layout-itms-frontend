import React from 'react';

export interface Column {
  key: string;
  header: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataGridProps {
  columns: Column[];
  data: any[];
  className?: string;
}

export default function DataGrid({ columns, data, className = '' }: DataGridProps) {
  return (
    <div className={`overflow-x-auto w-full ${className}`}>
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((col) => (
              <th 
                key={col.key} 
                scope="col" 
                className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50/80 transition-colors">
              {columns.map((col) => (
                <td key={col.key} className="whitespace-nowrap px-6 py-4 text-sm text-slate-700">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-6 py-12 text-center text-sm text-slate-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

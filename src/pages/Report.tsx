import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from '../components/Card';
import { Download, Filter, Search, X } from 'lucide-react';
import { Button, Input } from '../components/Form';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

export default function ReportPage() {
  const [globalFilter, setGlobalFilter] = useState<string>('');
  
  const defaultFilters = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    vehicle: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    type: { value: null, matchMode: FilterMatchMode.EQUALS },
    material: { value: null, matchMode: FilterMatchMode.EQUALS },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
  };

  const [filters, setFilters] = useState(defaultFilters);

  const clearFilter = () => {
    setFilters(defaultFilters);
    setGlobalFilter('');
  };

  const statusBodyTemplate = (rowData: any) => {
    return (
      <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
        rowData.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20' : 
        rowData.status === 'Overweight' ? 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20' :
        'bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-500/20'
      }`}>
        {rowData.status}
      </span>
    );
  };

  const weightBodyTemplate = (rowData: any) => {
    return <span className="font-mono font-medium">{rowData.netWeight}</span>;
  };

  const statuses = ['Approved', 'Overweight', 'Pending'];
  const statusItemTemplate = (option: string) => {
    return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
        option === 'Approved' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20' : 
        option === 'Overweight' ? 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20' :
        'bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-500/20'
      }`}>{option}</span>;
  };

  const statusRowFilterTemplate = (options: any) => {
    return (
      <Dropdown 
        value={options.value} 
        options={statuses} 
        onChange={(e) => options.filterApplyCallback(e.value)} 
        itemTemplate={statusItemTemplate} 
        placeholder="Select One" 
        className="p-column-filter" 
        showClear 
        style={{ minWidth: '12rem' }} 
      />
    );
  };

  const types = ['Internal', 'External'];
  const typeRowFilterTemplate = (options: any) => {
    return (
      <Dropdown 
        value={options.value} 
        options={types} 
        onChange={(e) => options.filterApplyCallback(e.value)} 
        placeholder="Select One" 
        className="p-column-filter" 
        showClear 
        style={{ minWidth: '12rem' }} 
      />
    );
  };

  const data = [
    { id: 'TRP-1042', vehicle: 'MH-12-AB-1234', type: 'External', material: 'Iron Ore', netWeight: 24.5, status: 'Approved', time: '10:42 AM' },
    { id: 'TRP-1043', vehicle: 'DMP-042', type: 'Internal', material: 'Overburden', netWeight: 58.2, status: 'Approved', time: '10:45 AM' },
    { id: 'TRP-1044', vehicle: 'KA-01-XY-9876', type: 'External', material: 'Iron Ore', netWeight: 26.1, status: 'Overweight', time: '11:02 AM' },
    { id: 'TRP-1045', vehicle: 'DMP-018', type: 'Internal', material: 'Overburden', netWeight: 55.4, status: 'Approved', time: '11:15 AM' },
    { id: 'TRP-1046', vehicle: 'GJ-05-PQ-1122', type: 'External', material: 'Iron Ore', netWeight: 23.8, status: 'Approved', time: '11:30 AM' },
    { id: 'TRP-1047', vehicle: 'DMP-021', type: 'Internal', material: 'Overburden', netWeight: 60.1, status: 'Pending', time: '11:45 AM' },
    { id: 'TRP-1048', vehicle: 'MH-14-CD-5678', type: 'External', material: 'Iron Ore', netWeight: 24.0, status: 'Approved', time: '12:05 PM' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Daily Weighment Report</h1>
            <p className="text-slate-500 mt-1">Comprehensive log of all material movement across gates</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2"><Filter className="w-4 h-4" /> Filter</Button>
            <Button variant="primary" className="gap-2"><Download className="w-4 h-4" /> Export CSV</Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-deep-twilight to-french-blue text-white border-0">
            <div className="text-sm font-medium text-sky-aqua mb-1">Total Trips Today</div>
            <div className="text-4xl font-bold">1,284</div>
          </Card>
          <Card>
            <div className="text-sm font-medium text-slate-500 mb-1">Total Volume</div>
            <div className="text-3xl font-bold text-slate-900">32,450 <span className="text-lg text-slate-400 font-normal">Tons</span></div>
          </Card>
          <Card>
            <div className="text-sm font-medium text-slate-500 mb-1">External Dispatches</div>
            <div className="text-3xl font-bold text-slate-900">412</div>
          </Card>
          <Card>
            <div className="text-sm font-medium text-slate-500 mb-1">Active Exceptions</div>
            <div className="text-3xl font-bold text-amber-600">24</div>
          </Card>
        </div>

        {/* Data Grid Section */}
        <Card noPadding className="overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold text-slate-900">Trip Logs</h2>
              <Button variant="outline" className="py-1.5 px-3 text-xs gap-1" onClick={clearFilter}>
                <X className="w-3 h-3" /> Clear Filters
              </Button>
            </div>
            <div className="relative max-w-sm w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <Input 
                placeholder="Search by Vehicle or Trip ID..." 
                className="pl-10 py-2"
                value={globalFilter}
                onChange={(e) => {
                  setGlobalFilter(e.target.value);
                  const _filters = { ...filters };
                  _filters['global'].value = e.target.value as any;
                  setFilters(_filters);
                }}
              />
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            <DataTable 
              value={data} 
              paginator 
              rows={5} 
              rowsPerPageOptions={[5, 10, 25, 50]} 
              filters={filters}
              filterDisplay="row"
              globalFilterFields={['id', 'vehicle', 'type', 'material', 'status']}
              emptyMessage="No trips found."
              className="p-datatable-sm"
              rowHover
              stripedRows
              showGridlines
            >
              <Column field="id" header="Trip ID" sortable filter filterPlaceholder="Search by ID" style={{ minWidth: '12rem' }}></Column>
              <Column field="vehicle" header="Vehicle No." sortable filter filterPlaceholder="Search by Vehicle" style={{ minWidth: '12rem' }}></Column>
              <Column field="type" header="Type" sortable filter filterElement={typeRowFilterTemplate} showFilterMenu={false} style={{ minWidth: '12rem' }}></Column>
              <Column field="material" header="Material" sortable filter filterPlaceholder="Search by Material" style={{ minWidth: '12rem' }}></Column>
              <Column field="netWeight" header="Net Wt (T)" body={weightBodyTemplate} sortable style={{ minWidth: '10rem' }}></Column>
              <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusRowFilterTemplate} showFilterMenu={false} style={{ minWidth: '12rem' }}></Column>
              <Column field="time" header="Time" sortable style={{ minWidth: '10rem' }}></Column>
            </DataTable>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
}

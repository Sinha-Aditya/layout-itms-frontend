import Header from '../components/Header';
import Footer from '../components/Footer';
import FormLayout from '../components/FormLayout';
import { Card } from '../components/Card';
import { TextInput, Select, NumberInput } from '@mantine/core';
import { Button } from '../components/Button';
import { Download, Plus } from 'lucide-react';

export default function FormsDemo() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Form Components</h1>
          <p className="text-slate-500 mt-1">Reusable form elements and layouts using Mantine.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Layout Example */}
          <div className="lg:col-span-2">
            <FormLayout 
              title="Register New Vehicle" 
              description="Enter the vehicle details to register it in the master database. Ensure all documents are valid."
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <TextInput
                  label="Vehicle Number"
                  placeholder="e.g. MH-12-AB-1234"
                  size="md"
                  radius="md"
                />
                <Select
                  label="Vehicle Type"
                  placeholder="Select Type"
                  data={[
                    { value: 'internal', label: 'Internal Dumper' },
                    { value: 'external', label: 'External Market Truck' }
                  ]}
                  size="md"
                  radius="md"
                />
              </div>

              <TextInput
                label="Transporter Name"
                placeholder="Company Name"
                size="md"
                radius="md"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <NumberInput
                  label="Standard Tare Weight (T)"
                  placeholder="0.00"
                  size="md"
                  radius="md"
                  decimalScale={2}
                />
                <NumberInput
                  label="Max Capacity (T)"
                  placeholder="0.00"
                  defaultValue={120}
                  size="md"
                  radius="md"
                  error="Capacity exceeds standard limits for this vehicle type."
                  decimalScale={2}
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-4 border-t border-slate-100">
                <Button text="Cancel" variant="default" size="md" color="gray" />
                <Button text="Register Vehicle" color="blue" size="md" />
              </div>
            </FormLayout>
          </div>

          {/* Component Showcase Sidebar */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Button Component</h3>
              <p className="text-sm text-slate-500 mb-4">Common component with color, text, and shape props.</p>
              
              <div className="space-y-4 flex flex-col">
                <Button text="Rounded (Default)" color="blue" shape="rounded" />
                <Button text="Rectangle Shape" color="teal" shape="rectangle" />
                <Button text="Pill Shape" color="violet" shape="pill" />
                <Button text="With Icon" color="indigo" shape="rounded" icon={<Plus className="w-4 h-4" />} />
                <Button text="Outline Variant" color="red" variant="outline" shape="rounded" />
                <Button text="Light Variant" color="orange" variant="light" shape="rounded" />
              </div>
            </Card>

            <Card className="bg-deep-twilight text-white">
              <h3 className="text-lg font-semibold text-white mb-4">Input on Dark</h3>
              <div className="space-y-4">
                <TextInput
                  label="Search"
                  placeholder="Search..."
                  size="md"
                  radius="md"
                  styles={{
                    label: { color: 'var(--mantine-color-blue-2)' },
                    input: { 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }
                  }}
                />
              </div>
            </Card>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

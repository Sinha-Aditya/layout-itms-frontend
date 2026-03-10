/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ReportPage from './pages/Report';
import FormsDemo from './pages/FormsDemo';

export default function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/forms" element={<FormsDemo />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

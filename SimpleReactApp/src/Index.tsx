import * as ReactDOM from 'react-dom';
import * as React from 'react';
import MainView from './ViewComponents/MainView';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<MainView />);
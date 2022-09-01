import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/GlobalFonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<GlobalStyle />
		<GlobalFonts />
		<App />
	</BrowserRouter>
);

import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import theme from './theme'; // Ensure you have defined your theme correctly in theme.js
import HomePage from './pages/home/home';
import PageNotFound from './pages/page_not_found/pageNotFound';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Layout from './layout/layout';
import About from './pages/about/about';
import Services from './pages/services/services';
import Contact from './pages/contact/contact';
import PrivacyPolicy from './pages/supportPages/PrivacyPolicy';
import TermsAndConditions1 from './pages/supportPages/TermsAndConditions1';

function App() {
  useEffect(() => {
    Aos.init();
    // Aos.refresh();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/services',
          element: <Services />,
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/privacy-policies',
          element: <PrivacyPolicy/>,
        },
        {
          path: '/terms-and-conditions',
          element: <TermsAndConditions1 />,
        },
      ],
      errorElement: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


const styles = {
  footLinkStyle: {
    // background: 'red',
    padding: '5px',
    paddingLeft: '15px',
    paddingRight: '15px',
    listStyleType: 'none',
    textDecoration: 'none',
    margin: '5px',
    fontSize: '1.1rem'
  },
};


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer class="footer mt-auto py-4 bg-dark">
        <div class="container">
          <ul class="list-group list-group-horizontal justify-content-center">

            <li style={styles.footLinkStyle} className="footLink text-primary">
              <a href="https://www.linkedin.com/in/bernardodibildox/" target="_blank" rel="noopener">LinkedIn</a>
            </li>
          
            <li style={styles.footLinkStyle} className="footLink">
              <a href="https://github.com/bdibil/" target="_blank" rel="noopener">Github</a>
            </li>
            
            <li style={styles.footLinkStyle} className="footLink">
              <a href="https://stackoverflow.com/users/17655603/b-dibil" target="_blank" rel="noopener">Stack Overflow</a>
            </li>

          </ul>
        </div>
      </footer>

    </div>

  )
}

import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar'


function App() {
  return (
    <div id="wrapper">
      <Sidebar />

      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" class="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
        </div>

        {/* <!-- Footer --> */}
        <footer class="sticky-footer bg-white">
          
        </footer>
        
      </div>

    </div>
  );
}

export default App;

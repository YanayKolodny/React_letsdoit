import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from './Students';
import Books from './Books';
import Mosh from './Mosh';
import StuList from './StuList';
import StuClasses from './StuClasses';
import Moshs from './studs/Moshs';
import Yanay from './studs/Yanay';
import Trini from './studs/Trini';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="students" element={<Students />}>
            <Route path="stulist" element={<StuList />}>
              <Route path='mosh' element={<Moshs />}></Route>
              <Route path='yanay' element={<Yanay />}></Route>
              <Route path='trini' element={<Trini />}></Route>
            </Route>
            <Route path="stuclasses" element={<StuClasses />} />
          </Route>

          <Route path="books" element={<Books />} />

          <Route path="mosh" element={<Mosh />} />

          {/* A route which allows an error respond if the url doe's no exsist */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


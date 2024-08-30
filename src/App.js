import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./scenes/global/Sidebar";
import { Topbar } from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider,CssBaseline } from "@mui/material";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts/Contacts";
import Invoices from "./scenes/invoices/Invoices";
import Form from "./scenes/form/Form";
import Calendar from "./scenes/calendar/Calendar";
import Faq from "./scenes/faq/Faq";
import Bar from "./scenes/bar/Bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";
import Geo from "./scenes/geography/Geo";



function App() {
  const [theme,colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}/>
              <Route path="/team" element={<Team />}/>
              <Route path="/contacts" element={<Contacts />}/>
              <Route path="/invoices" element={<Invoices />}/>
              <Route path="/form" element={<Form />}/>
              <Route path="/calendar" element={<Calendar />}/>
              <Route path="/faq" element={<Faq />}/>
              <Route path="/bar" element={<Bar />}/>
              <Route path="/pie" element={<Pie />}/>
              <Route path="/line" element={<Line />}/>
              <Route path="/geography" element={<Geo />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;

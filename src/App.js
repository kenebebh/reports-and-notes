import { Route, Routes } from "react-router-dom";
import {
  LoginPage,
  RecordForm,
  RecordList,
  ReportForm,
  ReportList,
  NavBar,
  RecordDetails,
} from "./components";
import Container from "./components/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App relative">
      <ToastContainer />
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/all-records" element={<RecordList />}></Route>
          <Route path="/create-record" element={<RecordForm />}></Route>
          <Route path="/edit-record/:id" element={<RecordForm />}></Route>
          <Route path="/all-reports" element={<ReportList />}></Route>
          <Route path="/create-report" element={<ReportForm />}></Route>
          <Route path="/edit-report/:id" element={<ReportForm />}></Route>
          <Route path="/record/:id" element={<RecordDetails />}></Route>
          <Route path="/edit-record/:id" element={<RecordForm />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;

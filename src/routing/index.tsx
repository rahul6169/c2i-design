import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import { LayoutComponent } from "../layout";
import { Dashboard } from "../dashboard";
import { Investor } from "../investor";
export const AppRouting: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

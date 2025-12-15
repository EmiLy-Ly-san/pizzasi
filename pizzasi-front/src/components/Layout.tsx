import { Outlet } from 'react-router-dom';
import Header from './HeaderGood';
import Footer from './FooterGood';



export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
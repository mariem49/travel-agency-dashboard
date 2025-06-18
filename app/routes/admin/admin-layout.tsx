import { Outlet } from "react-router"

const AdminLayout = () => {
  return (
    <div className="admin-layout flex">
            MobileSidebar
      <aside className="w-full max-w-[270px] hidden lg:block">Sidebar</aside>
      <main className="children">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

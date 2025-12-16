import DashboardCard from "@/components/DashboardCard";
import { DataTable } from "@/components/DataTable";
import Navbar from "@/components/Navbar";
import { dashboardCardData } from "@/mockData";
import { appointmentColumns } from "@/components/AppointmentColumns";
import AppProvider from "@/components/AppProvider";
import { useAppContext } from "@/components/AppProvider";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="px-10 pb-15 lg:px-20">
        <header className="my-10.5">
          <h1 className="">Welcome, Admin</h1>
          <p className="text-carepulse-gray font-medium mt-3">
            Start day with managing new appointments
          </p>
        </header>
        <AppProvider>
          <MainContent />
        </AppProvider>
      </main>
    </>
  );
};
export default Dashboard;

const MainContent = () => {
  const { data } = useAppContext()!;
  return (
    <>
      <section className="flex justify-between">
        {dashboardCardData.map((card) => (
          <DashboardCard {...card} key={card.title} />
        ))}
      </section>
      <DataTable columns={appointmentColumns} data={data} />
    </>
  );
};

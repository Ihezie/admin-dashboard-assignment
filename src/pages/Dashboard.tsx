import DashboardCard from "@/components/DashboardCard";
import { DataTable } from "@/components/DataTable";
import Navbar from "@/components/Navbar";
import { dashboardCardData, appointments } from "@/mockData";
import { appointmentColumns } from "@/components/AppointmentColumns";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="px-10 lg:px-20">
        <header className="my-10.5">
          <h1 className="">Welcome, Admin</h1>
          <p className="text-carepulse-gray font-medium mt-3">
            Start day with managing new appointments
          </p>
        </header>
        <section className="flex justify-between">
          {dashboardCardData.map((card) => (
            <DashboardCard {...card} />
          ))}
        </section>
        <DataTable columns={appointmentColumns} data={appointments} />
      </main>
    </>
  );
};
export default Dashboard;

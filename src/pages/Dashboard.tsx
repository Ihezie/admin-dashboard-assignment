import DashboardCard from "@/components/DashboardCard";
import { DataTable } from "@/components/DataTable";
import Navbar from "@/components/Navbar";
import { dashboardCardData, type Appointment } from "@/mockData";
import { appointmentColumns } from "@/components/AppointmentColumns";
import { useAppContext } from "@/components/AppProvider";

const calculateCardValues = (appointments: Appointment[]) => {
  const cardValues = {
    scheduled: 0,
    pending: 0,
    cancelled: 0,
  };
  appointments.forEach((appointment) => {
    if (appointment.status) return cardValues[appointment.status]++;
  });

  return cardValues;
};

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="px-3 pb-15 sm:px-10 lg:px-20">
        <header className="my-10.5">
          <h1 className="">Welcome, Admin</h1>
          <p className="text-carepulse-gray font-medium mt-3">
            Start day with managing new appointments
          </p>
        </header>
        <MainContent />
      </main>
    </>
  );
};
export default Dashboard;

const MainContent = () => {
  const { data } = useAppContext();

  const cardValues = calculateCardValues(data);

  return (
    <>
      <section className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 md:gap-10">
        {dashboardCardData.map((card) => (
          <DashboardCard
            value={cardValues[card.title]}
            {...card}
            key={card.title}
          />
        ))}
      </section>
      <DataTable columns={appointmentColumns} data={data} />
    </>
  );
};

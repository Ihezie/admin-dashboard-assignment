interface DashboardCardProps {
  Icon: React.FunctionComponent;
  title: string;
  stat: number;
}

const DashboardCard = ({ Icon, title, stat }: DashboardCardProps) => {
  return (
    <div className="bg-linear-to-r">
      <div>
        <Icon /> <span>{stat}</span>
      </div>
      <p>Total number of {title}</p>
    </div>
  );
};
export default DashboardCard;

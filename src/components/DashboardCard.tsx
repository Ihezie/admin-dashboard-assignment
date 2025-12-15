interface DashboardCardProps {
  Icon: React.FunctionComponent;
  title: string;
  value: number;
  edgeColor: string;
}
import { cn } from "@/lib/utils";

const DashboardCard = ({
  Icon,
  title,
  value,
  edgeColor,
}: DashboardCardProps) => {
  return (
    <div className="lg:w-[31.25%] relative overflow-hidden rounded-xl">
      <div className="py-8 px-6 border-t relative z-10 border-white/10">
        <div className="flex gap-4.5 items-center">
          <Icon /> <span className="font-bold text-[32px]">{value}</span>
        </div>
        <p className="font-semibold mt-6">
          Total number of <span className="font-bold">{title}</span>
        </p>
      </div>
      <div
        className={cn(
          "size-28 absolute left-3 bottom-0 translate-y-1/2 rounded-full -z-10 blur-2xl opacity-15",
          edgeColor
        )}
      ></div>
    </div>
  );
};
export default DashboardCard;

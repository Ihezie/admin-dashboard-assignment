import type { Icon } from "@/mockData";

interface DashboardCardProps {
  Icon: Icon;
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
    <div className="relative overflow-hidden rounded-xl">
      <div className="p-3 py-4 sm:py-8 sm:px-6 border-t relative z-10 border-white/10 glass-gradient">
        <div className="flex gap-4.5 items-center">
          <Icon />
          <span className="font-bold text-[32px]">{value}</span>
        </div>
        <p className="font-normal text-sm sm:font-semibold mt-3 sm:mt-6 sm:text-normal">
          Total number of{" "}
          <span className="font-semibold sm:font-bold">{title}</span>{" "}
          appointments
        </p>
      </div>
      <div
        className={cn(
          "size-20 sm:size-28 absolute left-3 bottom-0 translate-y-1/2 rounded-full -z-10 blur-2xl opacity-15",
          edgeColor
        )}
      ></div>
    </div>
  );
};
export default DashboardCard;

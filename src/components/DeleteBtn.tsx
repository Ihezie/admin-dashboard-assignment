import { Button } from "./ui/button";
import { useAppContext } from "./AppProvider";
import { Trash } from "lucide-react";

const DeleteBtn = ({ deleteId }: { deleteId: string }) => {
  const { dispatch } = useAppContext();
  return (
    <Button
      onClick={() => {
        dispatch({ type: "delete-appointment", payload: deleteId });
      }}
      aria-label="delete"
      variant="ghost"
      className="rounded-full text-red-500 hover:text-red-500 hover:bg-red-900/20!"
      size={"icon"}
    >
      <Trash />
    </Button>
  );
};
export default DeleteBtn;

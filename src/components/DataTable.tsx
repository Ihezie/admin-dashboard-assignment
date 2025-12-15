import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ArrowRight from "@/assets/icons/arrow-right.svg?react";
import ArrowLeft from "@/assets/icons/arrow-left.svg?react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Cross from "../assets/icons/cross.svg?react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <div className="overflow-hidden rounded-xl border border-noble-black-600 mt-15.5">
      <Table className="px-0">
        <TableHeader className="bg-noble-black-800 text-noble-black-200 text-xs">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className="border-b border-noble-black-600"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="px-6 py-4.5">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="border-none even:bg-[#1C2023]"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="px-6 py-5">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No appointments added.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between px-6 border-t border-noble-black-600 pt-3 pb-4">
        <Button
          aria-label="previous"
          variant="secondary"
          className="bg-[#1C2023] border border-noble-black-600 size-9  hover:bg-[#1C2023] hover:border hover:border-carepulse-green rounded-lg"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ArrowLeft className="size-5" />
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="border-noble-black-500 text-sm font-semibold hover:bg-carepulse-green hover:text-white"
              variant="outline"
            >
              Add to List
            </Button>
          </DialogTrigger>
          <DialogContent
            showCloseButton={false}
            className="dialog-content lg:w-[42.33%]"
          >
            <DialogHeader className="gap-4">
              <div className="sm:flex sm:justify-between sm:items-center relative">
                <DialogTitle className="text-xl sm:text-2xl">
                  Add Appointment
                </DialogTitle>
                <DialogClose asChild className="dialog-close">
                  <button type="button" aria-label="close">
                    <Cross />
                  </button>
                </DialogClose>
              </div>
              <DialogDescription className="dialog-description">
                Please fill the following details to add appointment.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Button
          aria-label="next"
          variant="secondary"
          className="bg-[#1C2023] border border-noble-black-600 size-9 hover:bg-[#1C2023] hover:border hover:border-carepulse-green rounded-lg"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}

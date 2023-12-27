import prismadb from "@/lib/prismadb";
import { format } from "date-fns";

import { BillboardClient } from "./components/client";
import { BillBoardColumn } from "./components/colums";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillBoardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy  (h:mm a)"),
  }));

  return (
    <div className=" flex-col">
      <div className="flex-1 space-y-4 p-8 pt-5">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;

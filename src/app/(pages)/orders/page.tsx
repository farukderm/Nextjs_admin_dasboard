import OrdersTable from "../../components/table/OrdersTable";
import { Order } from "../../types";
import { getOrders } from "../../utils/api";

const Page = async () => {
  const orders: Order[] = await getOrders();

  return (
    <div>
      <h1 className="title">Siparişler</h1>

      <OrdersTable orders={orders} />
    </div>
  );
};

export default Page;

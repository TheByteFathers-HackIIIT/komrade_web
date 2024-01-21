import Breadcrumb from '../components/Breadcrumb';
import MyOrders from '../components/TableOne';
import TableThree from '../components/TableThree';
import OtherOrders from '../components/TableTwo';

const Orders = () => {
  return (
    <>
      <Breadcrumb pageName="Active Orders" />

      <div className="flex flex-col gap-10">
        <OtherOrders />
        <MyOrders />
      </div>
    </>
  );
};

export default Orders;

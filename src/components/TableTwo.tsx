import ProductOne from '../images/product/product-01.png';
import ProductTwo from '../images/product/product-02.png';
import ProductThree from '../images/product/product-03.png';
import ProductFour from '../images/product/product-04.png';

const OtherOrders = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Available Orders
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Order ID</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Item(s)</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Canteen</p>
        </div>
        
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Accept</p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">121453</p>
        </div>
        <div className="col-span-3 items-center">
          <p className="text-sm text-black dark:text-white">Burger, Pizza</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">Vindhya Canteen</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Accept
            </button>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">121453</p>
        </div>
        <div className="col-span-3 items-center">
          <p className="text-sm text-black dark:text-white">Burger, Pizza</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">Vindhya Canteen</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Accept
            </button>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">121453</p>
        </div>
        <div className="col-span-3 items-center">
          <p className="text-sm text-black dark:text-white">Burger, Pizza</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">Vindhya Canteen</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Accept
            </button>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">121453</p>
        </div>
        <div className="col-span-3 items-center">
          <p className="text-sm text-black dark:text-white">Burger, Pizza</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">Vindhya Canteen</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Accept
            </button>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">121453</p>
        </div>
        <div className="col-span-3 items-center">
          <p className="text-sm text-black dark:text-white">Burger, Pizza</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="text-sm text-black dark:text-white">Vindhya Canteen</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Accept
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherOrders;

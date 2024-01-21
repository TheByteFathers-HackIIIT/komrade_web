import BrandOne from '../images/brand/brand-01.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-03.svg';
import BrandFour from '../images/brand/brand-04.svg';
import BrandFive from '../images/brand/brand-05.svg';

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Your orders
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Item Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              From
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              To
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Komrade
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Item 1</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Vindhya Canteen</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Bakul Nivas</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-warning dark:text-warning">Pending</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-orange-500">...</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Item 2</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Juice Canteen</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">OBH</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-danger dark:text-danger">Cancelled</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-orange-500">X</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Item 3</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Vindhya Canteen</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Bakul Nivas</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-success dark:text-success">Completed</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-orange-500">Kishor</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Item 4</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Vindhya Canteen</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Bakul Nivas</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-success dark:text-success">Completed</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-orange-500">Kishor</p>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">Item 5</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Vindhya Canteen</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Bakul Nivas</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-success dark:text-success">Completed</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-orange-500">Kishor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOne;

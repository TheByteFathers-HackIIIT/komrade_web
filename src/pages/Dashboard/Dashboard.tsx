// import CardFour from '../../components/CardFour.tsx';
// import CardOne from '../../components/CardOne.tsx';
// import CardThree from '../../components/CardThree.tsx';
// import CardTwo from '../../components/CardTwo.tsx';
// import ChartOne from '../../components/ChartOne.tsx';
// import ChartThree from '../../components/ChartThree.tsx';
// import ChartTwo from '../../components/ChartTwo.tsx';
// import ChatCard from '../../components/ChatCard.tsx';
// import MapOne from '../../components/MapOne.tsx';
import { Link } from 'react-router-dom';
import TableOne from '../../components/TableOne.tsx';

const Dashboard = () => {
  return (
    <>
      {/* Add a greeting message that says Greetings, Komrade! */}
      <div className="text-6xl font-bold text-gray-800 dark:text-gray-100">
        Greetings, Komrade!
      </div>
      {/* add some space */}
      <div className="h-4" />
      <div className="text-2xl font-bold text-gray-600 dark:text-gray-300">
        Glad to see you onboard.
      </div>
      {/* add some space */}
      <div className="h-8" />
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div> */}

      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div> */}

      <TableOne />

      {/* add a floating + button on the bottom right */}
      {/* increase the size of the floating button depending on available resolution */}
      {/* increase the font size also depending on  */}
      <div className="fixed bottom-0 right-0">
        <Link to='/createorder'>
          <button style={{ margin: '25px' }} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full floating-button">
          +
          </button>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;

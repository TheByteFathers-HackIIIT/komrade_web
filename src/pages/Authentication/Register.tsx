import React, { SyntheticEvent, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { apiUrl } from '../../App';
import { genheaders } from '../../js/utils';
import { useNavigate } from 'react-router-dom';

interface FormData {
  room: string;
  hostel: string;
  phone: string;
}

const Register: React.FC = () => { 
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    room: '',
    hostel: '',
    phone: '',
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to ${value}`);
    setFormData({
      ...formData,
      [name]: value,
    });

  };


  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    
    await registerUser();
  }

  const registerUser = async () => {
    console.log(formData)
    try {
      const response = await fetch(
        apiUrl+'/register',
        {
          method: 'POST',
          headers: genheaders(),
          body: JSON.stringify(formData),
          mode: 'cors',
        }
      );
      if(response.ok){
        console.log('Data sent successfully');
      }
      else{
        console.error('Error sending data');
      }
      if(response.status ===  200) {
          localStorage.setItem('registered', 'true');
          navigate('/dashboard');
      }
      else{
          localStorage.clear();
          navigate('/signin');
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
      navigate('/signin');
    }
  };
  return (
    <>
      <Breadcrumb pageName="Register" />
      <label className="mb-3 block text-black dark:text-white">Room Number</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="room"
          value={formData.room}
          onChange={handleInputChange}
          placeholder="Enter your room number here..."
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />  
        <label className="mb-3 block text-black dark:text-white">Select Hostel</label>
        <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
         name="hostel"
         value={formData.hostel}
         onChange={handleInputChange}>
          <option value="bakul">Bakul</option>
          <option value="parijaat">Parijaat</option>
          <option value="obh">OBH</option>
          <option value="kadamb">Kadamb</option>
        </select>
        <label className="mb-3 block text-black dark:text-white">Whatsapp Phone Number (With country code. Ex: 91XXXXXXXXXX)</label>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number here..."
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary no-spinner"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Register;

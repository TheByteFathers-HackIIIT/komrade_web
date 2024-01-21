import React, { useState, SyntheticEvent } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { genheaders } from '../../js/utils';
import { apiUrl } from '../../App';

interface FormData {
  items: string[];
  canteen: string;
}

const CreateOrder: React.FC = () => {
  const navigate =useNavigate();
  const [formData, setFormData] = useState<FormData>({
    items: [''],
    canteen: '',
  });

  const handleInputChange = (
    field: keyof FormData,
    value: string | string[]
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAddTextArrayInput = () => {
    setFormData({
      ...formData,
      items: [...formData.items, ''],
    });
  };

  const handleRemoveTextArrayInput = (index: number) => {
    const updatedInputs = [...formData.items];
    updatedInputs.splice(index, 1);
    setFormData({ ...formData, items: updatedInputs });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    
    await registerUser();
  }

  const registerUser = async () => {
    console.log(formData)
    try {
      const response = await fetch(
        apiUrl+'/neworder',
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
          navigate('/dashboard');
      }
      else{
          navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
      navigate('/dashboard');
    }
  };

  return (
    <>
      <Breadcrumb pageName="FormLayout" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Create your Order
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6.5">
            {/* Multi-Text Array Input */}
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Items
              </label>
              {formData.items.map((input, index) => (
                <div key={index} className="relative mb-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) =>
                      handleInputChange('items', [
                        ...formData.items.slice(0, index),
                        e.target.value,
                        ...formData.items.slice(index + 1),
                      ])
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  {formData.items.length > 1 && (
                    <span
                      className="absolute top-1/2 right-4 cursor-pointer"
                      onClick={() => handleRemoveTextArrayInput(index)}
                    >
                      Remove
                    </span>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddTextArrayInput}
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
              >
                Add More Items
              </button>
              <div className="mt-2 text-gray">
                Added Items: {formData.items.join(', ')}
              </div>
            </div>

            {/* Canteen Input */}
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Canteen
              </label>
              <input
                type="text"
                placeholder="Enter canteen name"
                value={formData.canteen}
                onChange={(e) =>
                  handleInputChange('canteen', e.target.value)
                }
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateOrder;
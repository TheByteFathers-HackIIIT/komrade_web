import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiUrl } from '../../App';
import { genheaders } from '../../js/utils';
import Loader from '../../common/Loader';

const CAS: React.FC = () => {
  const location = useLocation();
  const memoizedLocation = useMemo(() => location, [location]); // Memoize the location
  const [ticket, setTicket] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(memoizedLocation.search);
    const ticketValue = params.get('ticket');
    setTicket(ticketValue);

    const authenticateUser = async (ticket: string) => {
      try {
        const response = await fetch(
          apiUrl + `/auth?ticket=${ticket}`,
          {
            method: 'GET',
            headers: genheaders(),
            mode: 'cors',
          }
        );
        const data = await response.json();
        if(response.status ===  200) {
            localStorage.setItem('email', data['email']);
            localStorage.setItem('firstname', data['firstname']);
            localStorage.setItem('name', data['name']);
            localStorage.setItem('registered', data['registered']);
            localStorage.setItem('seshkey', data['seshkey']);
            console.log(data);
            if(data['registered'] === false) {
              navigate('/register');
            }
            else{
                navigate('/dashboard');
            }
        }
        else{
            localStorage.clear();
            navigate('/signin');
        }
      } catch (error) {
        localStorage.clear();
        console.log(error);
      }
    };

    if (ticketValue) {
      authenticateUser(ticketValue);
    }
  }, [memoizedLocation]);
  return (
    <>
      <Loader>
      </Loader>
    </>
  );
};

export default React.memo(CAS);
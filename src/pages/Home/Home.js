import React, { useEffect, useState } from 'react';
import { useCompany } from '../../contexts/CompanyContext';
import { Onsite } from './components/Onsite/Onsite';
import { Active } from './components/Requests/Active';
import { Pending } from './components/Requests/Pending';
import './home.scss';

export const Home = () => {
  const { company, requests, onsite } = useCompany();
  const [active, setActive] = useState();
  const [pending, setPending] = useState();

  useEffect(() => {
    filterRequsets();
  }, [requests]);

  const filterRequsets = () => {
    if (requests) {
      const active = requests.filter((req) => req.status === 'active');
      const pending = requests.filter((req) => req.status === 'pending');
      setActive(active);
      setPending(pending);
    }
  };
  return (
    <div>
      {company && (
        <div id="Home">
          <div className="row">
            <Onsite onsite={onsite} />
            <Active requests={active} />
          </div>
          <Pending requests={pending} />
        </div>
      )}
    </div>
  );
};

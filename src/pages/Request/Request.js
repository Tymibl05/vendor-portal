import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCompany } from '../../contexts/CompanyContext';
import { Info } from './components/Info/Info';
import { Visitors } from './components/Visitors/Visitors';
import { Activity } from './components/Activity/Activity';
import './request.scss';

export const Request = () => {
  const { id } = useParams();
  const [request, setRequest] = useState();
  const { getRequestById } = useCompany();
  useEffect(() => {
    const getRequest = async () => {
      const req = await getRequestById(id);
      setRequest(req);
    };
    if (id) getRequest();
  }, [id]);
  return (
    <div>
      {request && (
        <div id="Request">
          <Info req={request} />
          <Visitors req={request} />
          <Activity activity={request.activity} />
        </div>
      )}
    </div>
  );
};

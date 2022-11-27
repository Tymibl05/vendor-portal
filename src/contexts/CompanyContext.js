import React, { createContext, useContext, useEffect, useState } from 'react';

const CompanyContext = createContext();
export const useCompany = () => {
  return useContext(CompanyContext);
}; // ClientContext

export const CompanyProvider = ({ children }) => {
  const [company, setCompany] = useState();
  const [requests, setRequests] = useState();
  const [onsite, setOnsite] = useState();
  // const urlBase = 'http://localhost:5000';
  const urlBase = 'https://visitor-kiosk-mern-server.onrender.com';

  useEffect(() => {
    (async () => {
      setCompany(await getCompany());
    })();
  }, []); // [currentUser]

  useEffect(() => {
    (async () => {
      setRequests(await getRequests());
    })();
  }, [company]);

  useEffect(() => {
    (async () => {
      setOnsite(await getOnsite());
    })();
  }, [requests]);

  const getCompany = async () => {
    const url = `${urlBase}/visitor-kiosk/companies/wdcoperations`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getRequests = async () => {
    const url = `${urlBase}/visitor-kiosk/requests/`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getRequestById = async (id) => {
    const url = `${urlBase}/visitor-kiosk/requests/id/${id}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getOnsite = () => {
    if (requests) {
      let onsite = [];
      requests.map((req) => {
        req.visitors.map((vis) => {
          if (vis.is_onsite === true) {
            onsite.push({ ...vis, req: req._id });
          }
          return;
        });
      });
      return onsite;
    }
  };

  const value = {
    urlBase,
    company,
    requests,
    onsite,
    getRequestById,
  };
  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
};

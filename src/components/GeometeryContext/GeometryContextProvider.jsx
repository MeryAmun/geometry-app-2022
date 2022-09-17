import React, { createContext, useState,useEffect } from 'react';
//import App from '../../App';
import { baseUrl } from '../api/geometricFiguresApi';
import Loader from '../GeometricFigures/Loader';


export const GeometryContext = createContext()


const GeometryContextProvider = ({children}) => {
    const [geometricFigures, setGeometricFigures] = useState([]);

    useEffect(() => {
        const getGeoFigures = async () => {
          const response = await fetch(`${baseUrl}/geometry/all`, {
            method: "GET",
            header: {
              "Content-Types": "application/json",
            },
          }).then((response) => {
            return response.json();
          });
          setGeometricFigures(response);
          return response;
        };
        getGeoFigures();
      }, []);
    
    //   if (figure.length === 0) {
    //     return <Loader />;
    //   }
    
      return (
          <GeometryContext.Provider value={geometricFigures}>
              {children}
          </GeometryContext.Provider>
      
)}
export default GeometryContextProvider



  
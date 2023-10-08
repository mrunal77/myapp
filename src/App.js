import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {


  const url = "http://localhost:8080/HRMS/api/common/getRolesList";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <center>
            <h1>{data.message}</h1>
            {data.roleList.map((obj, index) => {
              return (

                <div style={{
                  width: "15em",
                  backgroundColor: "#35D841",
                  padding: 2,
                  borderRadius: 10,
                  marginBlock: 10,
                }}>
                  {obj.roleName}

                </div>
              );
            })}
          </center>
        </div>
      )}
    </div>
  );
}

export default App;

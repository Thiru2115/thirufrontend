import React from "react";
import Quicksearchitem from "./Quicksearchitem";
import axios from "axios";
import { useState, useEffect } from "react";

function Quicksearch() {
  const [mealType, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get("/getAllMeals");
        setMeals(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeals();
  }, []);
  return (
    <div>
      <div className="bottom">
        <h1 className="heading">Quick Search</h1>
        <h3 className="subheading">Discover restaurants by type of meal</h3>
      
      </div>
      <div className="container">
        <div className="row">
          {mealType.map((ed) => {
            return (
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-4 col-sm-6 col-xs-12 p-4 shadow-lg p-3">
                <Quicksearchitem
                  img={ed.image}
                  detail={ed.content}
                  name={ed.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Quicksearch;

import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryCard from '../Components/CategoryCard';
import Loader from '../Components/Loader';
function Category() {
  const newHomeData = useSelector(state => state.homePage);
  const { products, loading } = newHomeData;

  return (
    <>
      <div className="category-section">
        <div className="container">
          <div className="category-sectiontitle">
            <h2 className="category-header">Shop by categories</h2>
            <p className="category-desciption">We’ve got something for everyone </p>
          </div>
          <div className="row">
            {loading ? (
              <Loader />
            ) : (
              products &&
              products[1] &&
              products[1].categories &&
              products[1].categories.map(category => (
                <div className="col-lg-4 p-3" key={category.id.toString()}>
                  <CategoryCard categories={category} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;

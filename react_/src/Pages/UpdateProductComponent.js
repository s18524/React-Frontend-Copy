import React, { useEffect, useState } from 'react';
import ProductService from '../services/ProductService'; // Replace with the correct path
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UpdateProductComponent(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    id:id,
    name: "",
    
  });

  useEffect(() => {
    ProductService.getProductById(id).then((res) => {
      let productData = res.data;
      setProduct({
        ...product,
        name: productData.name,        
      });
    });
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();

    let updatedProduct = {
        id: product.id,
        name: product.name,
      
    };

    console.log('updatedProduct =>' + JSON.stringify(updatedProduct));

    ProductService.updateProduct(updatedProduct).then((res) => {
        navigate('/products');
    });
  
};

  const changeProductNameHandler = (event) => {
    setProduct({ ...product, name: event.target.value });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Product</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Product Name</label>
                  <input
                    placeholder="Product Name"
                    name="productName"
                    className="form-control"
                    value={product.name}
                    onChange={changeProductNameHandler}
                  />
                </div>     
                <button className="btn btn-success" onClick={updateProduct}>
                  Save
                </button>                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProductComponent;

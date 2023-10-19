import React, { useState } from 'react';
import ProductService from '../services/ProductService';
import { useNavigate } from 'react-router-dom';

function AddProductComponent() {
  
  const navigate = useNavigate();
  const [product, setProduct] = useState({
  name: '',
        
  });

  const saveProduct = (e) => {
    e.preventDefault();

    ProductService.createProduct(product).then((res) => {
      navigate('/products');
    });
  };

  
  const cancel = () => {
    navigate('/products');
  };

  const changeNameHandler = (event) => {
    setProduct({ ...product, name: event.target.value });
  };

  
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Add Product</h3>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label> Name</label>
                  <input
                    placeholder='Name'
                    name='name'
                    className='form-control'
                    value={product.name}
                    onChange={changeNameHandler}
                    />
                  </div>

                <button className='btn btn-success' onClick={saveProduct}>
                  Save
                </button>

                <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: '5px' }}>
                    Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductComponent;

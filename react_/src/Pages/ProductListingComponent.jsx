import React, { useState, useEffect } from 'react';
import ProductService from '../services/ProductService';
import { Link } from 'react-router-dom';
import AddProductComponent from '../Pages/AddProductComponent';
import { useNavigate  } from 'react-router-dom';

function ProductListingComponent() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    ProductService.deleteProduct(id).then((res) => {
      setProducts(products.filter((product) => product.id !== id));
    });
  };

  const addProduct = () => {
    navigate('/add-products');
  };
  useEffect(() => {
    ProductService.getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  
  return (
    <div>
      <h2 className="text-center">Product List</h2>

      <button className='btn btn-primary' onClick={addProduct}>
        Add Product
      </button>

      <div className="row">
        <table className="table table-striped table-boarded">
          <thead>
            <tr>
              <th>Product Name</th>
         
              <th> Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td> {product.name}</td>
                <td>         
                <Link
                    className="text-decoration-none btn btn-sm btn-info"
                    to={`/update-products/${product.id}`}
                  >
                      {' '}Update{' '}
                  </Link>

                  <button
                    style={{ marginLeft: '10px' }}
                    onClick={() => deleteProduct(product.id)}
                    className="btn btn-danger"
                  >
                    {' '}Delete{' '}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductListingComponent;



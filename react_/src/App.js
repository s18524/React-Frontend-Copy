
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductListingComponent from './Pages/ProductListingComponent';
import UpdateProductComponent from './Pages/UpdateProductComponent';
import AddProductComponent from './Pages/AddProductComponent';


function App() {
  return (
    <div>
      <Router>
              <div className="container">
                <Routes>
                  <Route path = "/" exact element = {<ProductListingComponent />}></Route>
                  <Route path = "/products" element = {<ProductListingComponent />}></Route>
                  <Route path = "/update-products/:id" element = {<UpdateProductComponent />}></Route>
                  <Route path = "/add-products" element = {<AddProductComponent />}></Route>

                </Routes>


              </div>
      </Router>

    </div>


  );
}

export default App;

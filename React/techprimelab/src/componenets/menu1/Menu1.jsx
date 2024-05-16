import React from 'react';
import './menu.css'
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';


function Menu1() {
  return (
    <>
    <div className="row mobilev">

<div className="col-sm-12">
<nav className="navbar mobilev row navbar-expand-lg navbar-light">

<button className="navbar-toggler Toggle menubtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarTogglerDemo02">


  <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><ul>
  <li><SpeedIcon/></li>
  <li><StorageIcon/></li>
  <li><AddIcon/></li>
  <li><LogoutIcon/></li>
 
  </ul></div>
  <div class="p-2 bd-highlight"> <form class="row g-3">
  <div class="col-md-12">
     
    <input type="text" class="form-control" id="text"/>
  </div>
  <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight"><div class="col-4">
    <label for="inputForBusiness" class="form-label">Business</label>
    <select class="form-select" aria-label="Disabled select example" disabled>
  <option selected>For Business</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>

  
   </div>
  <div class="p-2 bd-highlight"><div class="col-4">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>

  </div>
  <div class="col-4">
    <label for="inputForBusiness" class="form-label">Business</label>
    <select class="form-select" aria-label="Disabled select example" disabled>
  <option selected>For Business</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
  <div class="p-2 bd-highlight"> <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
 
  <div class="col-6">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div></div>
</div>
   
  
  
  
  
</form></div>
  
</div>
   
</div>

</nav>

</div>



</div>
    </>
  )
}

export default Menu1
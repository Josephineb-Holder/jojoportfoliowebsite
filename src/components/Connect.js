import React from 'react'
import "./Connect.css"

const Connect = () => {
   
    return (
        <div>
            <div class="container">
        <h1 class="display-4 text-center py-1">Let's Connect!!!</h1>
        
        <div class=" p-3 shadow-sm">
          <form id="create-form" action="/create-item" method="POST">
            <div class="d-flex align-items-center">
            <h6>What is your Name?:</h6>
              <input id="create-field" name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" placeholder="Name" />
              </div>
              <br />
              <div class="d-flex align-items-center">
                  <h6>Please leave me your Email:</h6>
              <input id="create-field" name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" placeholder="Email" />
              </div>
              <br />
              <div class="d-flex align-items-center">
              <h6>Can i have your WhatsApp:</h6>
              <input id="create-field" name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" placeholder="Contact" />
              </div>
              <br />
              <div class="d-flex align-items-center">
              <h6>Are you an Employer?</h6>
              <input id="check-box" name="item" class="checkbox" type="checkbox" />
              </div>
              <br />
              <div class="d-flex align-items-center">
              <h6>Are you an Employee?</h6>
              <input id="check-box" name="item" type="checkbox" />
              </div>

              <br />

              <div class="d-flex align-items-center">
              <h6>Are you a Student?</h6>
              <input id="check-box" name="item" type="checkbox" />
              </div>
              <br />

              <div class="d-flex align-items-center">
              <h6>Can you Reccomend me?</h6>
              <input id="check-box" name="item" type="checkbox" />
              </div>
            
              

              <br></br>
            <button class="btn btn-outline-success">Connect</button>
          </form>
        </div>
        
        <ul id="item-list" class="list-group pb-5">
          
        </ul>
        
      </div>
        
        </div>
    )
}



export default Connect

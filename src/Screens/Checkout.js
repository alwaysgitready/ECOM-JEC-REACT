import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { User_Base_URL } from "../Config/BaseURL"











const Checkout =  () =>{

const {state}  = useLocation()
const navigate = useNavigate()

console.log(state)


const Processorder = ()=>{

axios.post(User_Base_URL + '/purchase_order' ,  state).then((res)=>{
    toast.success(res.data.message)
    if(res.data.status  == 200)
    {
        navigate('/my-cart')
    }
}).catch((err)=>{
    toast.error(err.response.data.message)
})
    


}


return(

    <>
    <div className="container" style={{display : "flex" , justifyContent : "center"}}>

    <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <p class="card-text">Choose a payment method to continue checking out. You will still have a chance to review and edit your order before it is final.</p>
    <h5 class="card-title">Ordere Summary</h5>
    <div class="container">
  <div class="row">
    <div class="col-sm">
      Items :
    </div>
    <div class="col-sm">
    &#8377; {state.total_price}
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      Delivery :
    </div>
    <div class="col-sm">
    &#8377; {Math.floor(state.total_price *  0.10)}
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      Total:
    </div>
    <div class="col-sm">
    &#8377; {Math.floor(state.total_price *  0.10) + state.total_price}
    </div>
  </div>
</div>
    <button onClick={Processorder}  class="btn btn-primary">Process  Order</button>
  </div>
</div>

    </div>
    </>
)



}

export default Checkout
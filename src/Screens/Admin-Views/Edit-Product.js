import axios from "axios"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import { Admin_Base_URL } from "../../Config/BaseURL"










const EditProduct = ()=>{

    const {state} = useLocation()

    console.log(state)


    const [values , setValues ]=  useState({

        name :state.name,
        image :state.image,
        category :state.category,
        price :state.price,
        discount :state.discount,
        description :state.description,
        p_id : state._id
    })



    const onEdit = ()=>{

      console.log(values)


      axios.post(Admin_Base_URL + '/edit-products' , values).then((res)=>{
        toast.success(res.data.message)
      }).catch((err)=>{
      toast.error(err.response.data.message)
      })



    }


    const onChangeInput= (e)=>{

     setValues({...values , [e.target.name] :  e.target.value})

    }



    return(


<>

<div className="container">


{/* <form> */}
  <div class="form-group">
    <label >Produt Name</label>
    <input type="text" name="name" onChange={onChangeInput} class="form-control" value={values.name}  aria-describedby="emailHelp" placeholder="Enter Product Name" />
  </div>
  <div class="form-group">
    <label >Product Category</label>
    <input type="text" name="category" onChange={onChangeInput} class="form-control" value={values.category}  placeholder="Enter Category" />
  </div>
  <div class="form-group">
    <label >Product Price</label>
    <input type="number" name="price" onChange={onChangeInput} class="form-control" value={values.price}  placeholder="Enter Price" />
  </div>
  <div class="form-group">
    <label >Product Discount</label>
    <input type="number" name="discount" onChange={onChangeInput} class="form-control"  value={values.discount} placeholder="Enter Discount" />
  </div>
  <div class="form-group">
    <label >Product Description</label>
    <textarea type="text" name="description" onChange={onChangeInput} class="form-control" rows={4} value={values.description}  placeholder="Enter Description" />
  </div>
  <div class="form-group">
    <label >Image URL</label>
    <textarea type="text" name="image" onChange={onChangeInput} class="form-control" rows={4}  value={values.image} placeholder="Enter Image URL" />
  </div>

  <img src={values.image} style={{width:'200px', height:'200px'}}/>

  <button onClick={onEdit} type="submit" class="btn btn-primary">Update Product</button>
{/* </form> */}

</div>
</>


    )


}

export default EditProduct
import People from "../model/peoplemodel.js";

const addpeople=async(req,res,next)=>{
    const respose=await req.body
    console.log(respose);
    const {Item}=req.body;
   
    const newuser= new People({
       confession
    })
    try {
      await newuser.save()
      console.log("Item posted");
      return res.status(201).json({message:"done"})
    } catch (error) {
        return res.status(400).json({message:error})
        
    }
}
export default addpeople;
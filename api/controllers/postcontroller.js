import People from "../model/peoplemodel.js";

const addpeople=async(req,res,next)=>{
    const respose=await req.body
    const { Item,description }=req.body;
    console.log(respose);
   console.log();
    const newpost= new People({
       Item,description
    })
    try {
      await newpost.save()
      console.log("Item posted");
      return res.status(201).json({message:"done"})
    } catch (error) {
        return res.status(400).json({message:error})
        
    }
}
export default addpeople;
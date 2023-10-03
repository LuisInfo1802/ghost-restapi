
import { pool } from "../db.js"





export const getSong = async (req,res )=>{

   try {
    const [rows]=   await pool.query('select * from songs where idSong =?', [req.params.idSong])
    console.log(rows)

    if(rows.length<=0) return res.status(404).json({message:'Song no found'})

    res.json(rows[0])
   } catch (error) {
    return res.status(500).json({
        message:'something goes wrong'
    })
   }

}



export const getSongs= async(req,res) =>{
    
  try {
    const [rows] =await pool.query ('select * from songs')
    res.json(rows)
  } catch (error) {
    return res.status(500).json({
        message:'something goes wrong'
    })
  }
}


export const createSong= async(req,res)=>{

    try {
        const {title,duration,albumFk,date_published,image}=req.body
        const [rows]=  await pool.query('insert into songs (title,duration,albumFk,date_published,image) values(?,?,?,?,?);', [title,duration,albumFk,date_published,image])
    
            res.send({
                idSong: rows.insertId,
                title,
                duration,
                albumFk,
                date_published,
                image,
            })
    } catch (error) {
        return res.status(500).json({
            message:'something goes wrong'
        })
    }
     
    }


export const deleteSong=  async(req,res) =>{
    try {
        const [result]= await pool.query('delete from songs where idSong = ?',[req.params.idSong])
    console.log(result)

    if(result.affectedRows<=0) return res.status(404).json({
        message:'Song not found'
    })

    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:'something goes wrong'
        })
    }
}


export const updateSong= async (req,res) =>{
   try {
    const {idSong} = req.params
    const {title,duration,albumFk,date_published,image}= req.body

 const [result] =  await pool.query('update songs set title = ifnull(?,title), duration = ifnull(?,duration), albumFk = ifnull(?,albumFk), date_published = ifnull(?,date_published), image = ifnull(?,image) where idSong= ?', [title,duration,albumFk,date_published,image, idSong])
 
 if(result.affectedRows==0) return res.status(404).json({
    message:'Song not found'
 })


 const [rows] =await pool.query('select * from songs where idSong = ? ', [idSong])

 

 console.log(result)   
 res.json(rows[0])
   } catch (error) {
    return res.status(500).json({
        message:'something goes wrong'
    })
   }
}


import { pool } from "../db.js"


export const getMember= async (req,res)=>{
    try {
        const[rows]= await pool.query('select * from members where idMember = ?', [req.params.idMember])
        console.log(rows)

        if(rows.length<=0) return res.status(404).json({
            message:'Member not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'something goes wrong'
        })
    }
}


export const getMembers= async(req,res)=>{
    try {
        const [rows] = await pool.query('select * from members ')
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message:'something goes wrong'
        })
    }
}

export const createMember= async(req,res)=>{
   try {
    const {real_name, nickname, instrument, image}=req.body
    const [rows]= await pool.query('insert into members (real_name,nickname,instrument,image) values(?,?,?,?)',[real_name,nickname,instrument,image])

    res.send({
        idMember:rows.insertId,
        real_name,
        nickname,
        instrument,
        image,
    })
   } catch (error) {
    return res.status(500).json({
        message:'something goes wrong'
    })
   }
}


export const deleteMember = async(req,res)=>{
    try {
        const [result]=await pool.query('delete from members where idMember = ? ', [req.params.idMember])

        console.log(result)

        if(result.affectedRows<=0) return res.status(404).json({
            message:'member not found'
        })

        res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({
            message:'something goes wrong'
        })
    }
}


export const updateMember= async (req,res)=>{
    try {
        const {idMember}=req.params
        const {real_name,nickname,instrument,image}=req.body

        const [result]= await pool.query('update members set real_name = ifnull(?, real_name), nickname = ifnull(?,nickname), instrument = ifnull(?,instrument), image = ifnull(?, image) where idMember = ? ', [real_name,nickname,instrument,image, idMember])

        if(result.affectedRows==0) return res.status(404).json({message:'Member not found'})
        const [rows] = await pool.query('select * from members ')
    console.log(result)
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'something goes wrong'
        })
    }
}


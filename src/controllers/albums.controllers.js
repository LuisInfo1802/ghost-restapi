import { pool } from "../db.js"


export const getAlbum = async(req,res)=>{
    try {
        const [rows]= await pool.query('select * from albums where idAlbum = ?',[req.params.idAlbum])
        console.log(rows)

        if(rows.length<=0) return res.status(404).json({message:'Album not Found'})

        res.json(rows[0])
    } catch (error) {
        
        return res.status(500).json({
            message:'something goes wrong'
        })
    }
}

export const getAlbums= async(req,res) =>{
    try {
        const [rows] = await pool.query ('select * from albums')
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message:'something goes wrong'
        })
    }
}

export const createAlbum = async(req, res) =>{
    try {
        const {nameAlbum,numSongs,date_published,image}=req.body
        const [rows]= await pool.query('insert into albums (nameAlbum,numSongs,date_published,image) values (?,?,?,?);', [nameAlbum,numSongs,date_published,image])
    res.send({
        idMember:rows.insertId,
        nameAlbum,
        numSongs,
        date_published,
        image,

    })
    
    } catch (error) {
        return res.status(500).json({
            message:'something goes wrong'
        })
    }
}


export const deleteAlbum = async(req,res)=>{
    try {
        const [result] = await pool.query('delete from albums where idAlbum = ?', [req.params.idAlbum])
        console.log(result)

        if(result.affectedRows<=0) return res.status(404).json({message:'Album not found'})

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:'something goes wrong'
        })
    }
}

export const updateAlbum = async (req,res) =>{
    try {
        const {idAlbum}= req.params

        const {nameAlbum,numSongs,date_published,image}= req.body

        const [result] = await pool.query('update albums set nameAlbum = ifnull(?,nameAlbum), numSongs = ifnull(?, numSongs), date_published = ifnull(?,date_published), image = ifnull(?,image) where idAlbum = ?', [nameAlbum,numSongs,date_published,image,idAlbum])

        if(result.affectedRows==0) return res.status(404).json({message:'Album not found'})

        const [rows] = await pool.query ('select * from albums')

        console.log(result)
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'something goes wrong'
        })
    }
}

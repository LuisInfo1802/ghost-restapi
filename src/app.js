import express from 'express'
import songsRoutes from './routes/songs.routes.js'
import membersRoutes from './routes/members.routes.js'
import albumsRoutes from './routes/albums.routes.js'
import indexRoutes from './routes/index.routes.js'
 const app= express()

app.use(express.json())

app.use('/api',albumsRoutes)

app.use('/api',membersRoutes)

app.use('/api',songsRoutes)

app.use('/api',indexRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message:'Endpoint not found'
    })
})

export default app



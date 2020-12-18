const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const posts = 
    [
      {
      
    }
    ]
  
    await Post.insertMany(posts)
    console.log("Created posts!")
}
const run = async () => {
    await main()
    db.close()
}

run()
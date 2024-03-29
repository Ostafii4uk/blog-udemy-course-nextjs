import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = JSON.parse(req.body)

    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid input.' })
      return
    }

    const newMessage = {
      email,
      name,
      message
    }

    let client
    const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.kudvezz.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

    try {
      client = await MongoClient.connect(connectString)
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' })
      return
    }

    const db = client.db()

    try {
      await db.collection('messages').insertOne(newMessage)
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'Could not add new message to database' })
      return
    }

    client.close()

    res.status(201).json({ message: 'Success stored new message', message: newMessage })
  }
}

export default handler
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

    try {
      client = await MongoClient.connect(
        'mongodb+srv://Ostafii4uk240178:Ostafii4uk240178@cluster0.kudvezz.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0'
      )
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
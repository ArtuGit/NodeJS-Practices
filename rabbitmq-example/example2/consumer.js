
const amqp = require("amqplib");

const queueName = process.argv[2];

async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName);

    channel.consume(queueName, message => {
      const input = JSON.parse(message.content.toString());
      console.log(`Recieved number: ${input.number} from queueName: ${queueName}`);
      channel.ack(message);
    })

    console.log(`Waiting for messages from queueName: ${queueName}`);
  }
  catch (ex) {
    console.error(ex);
  }
}

connect();
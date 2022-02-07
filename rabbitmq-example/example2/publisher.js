const amqp = require("amqplib");

const inputNums = process.argv[2];

async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue("odd");
    await channel.assertQueue("even");

    console.log('Start publishing');
    await Promise.all(
      inputNums.split(',').map(async num => {
        const queueName = parseInt(num) % 2 ? "odd" : "even";
        console.log(`Publishing number: ${num} to queueName: ${queueName}`);
        return await channel.sendToQueue(queueName, Buffer.from(JSON.stringify({ number: num })));
      })
    );
    console.log('End publishing');

    await channel.close();
    await connection.close();
  }
  catch (ex) {
    console.error(ex);
  }
}

connect();
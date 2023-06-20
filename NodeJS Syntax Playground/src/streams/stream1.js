const url = "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const body = response.body;
    const reader = body.getReader();

    const decoder = new TextDecoder();

    const textStream = new ReadableStream({
      start(controller) {
        function read() {
          reader.read().then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }
            const chunk = decoder.decode(value, { stream: true });
            // Process the chunk (e.g., parse XML, extract data)
            console.log(chunk);
            read();
          });
        }
        read();
      },
    });

    return textStream;
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();

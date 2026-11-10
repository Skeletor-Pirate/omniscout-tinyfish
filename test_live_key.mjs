const apiKey = "sk-tinyfish-KllnVzWLC92Ip8IlP2ZrhakiJQnxzdSI";

async function testFetch() {
  console.log("Testing TinyFish Fetch API with user's key...");
  try {
    const res = await fetch("https://api.fetch.tinyfish.ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey
      },
      body: JSON.stringify({ url: "https://example.com" })
    });
    const status = res.status;
    const body = await res.text();
    console.log(`Fetch Status: ${status}`);
    console.log(`Fetch Response:`, body.slice(0, 300));
  } catch (err) {
    console.error("Fetch error:", err.message);
  }
}

async function testAgent() {
  console.log("\nTesting TinyFish Agent API with user's key...");
  try {
    const res = await fetch("https://agent.tinyfish.ai/v1/automation/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey
      },
      body: JSON.stringify({
        url: "https://example.com",
        goal: "Extract page title and primary header"
      })
    });
    const status = res.status;
    const body = await res.text();
    console.log(`Agent Status: ${status}`);
    console.log(`Agent Response:`, body.slice(0, 300));
  } catch (err) {
    console.error("Agent error:", err.message);
  }
}

async function testSearch() {
  console.log("\nTesting TinyFish Search API with user's key...");
  try {
    const res = await fetch("https://api.search.tinyfish.ai?q=test", {
      headers: {
        "X-API-Key": apiKey
      }
    });
    const status = res.status;
    const body = await res.text();
    console.log(`Search Status: ${status}`);
    console.log(`Search Response:`, body.slice(0, 300));
  } catch (err) {
    console.error("Search error:", err.message);
  }
}

async function main() {
  await testFetch();
  await testSearch();
  await testAgent();
}

main();

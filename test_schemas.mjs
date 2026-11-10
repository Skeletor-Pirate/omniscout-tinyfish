const apiKey = "sk-tinyfish-KllnVzWLC92Ip8IlP2ZrhakiJQnxzdSI";

async function testFetchCorrect() {
  console.log("Testing Fetch with urls array...");
  const res = await fetch("https://api.fetch.tinyfish.ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey
    },
    body: JSON.stringify({ urls: ["https://example.com"] })
  });
  console.log("Fetch Status:", res.status);
  const data = await res.json();
  console.log("Fetch Data:", JSON.stringify(data, null, 2).slice(0, 400));
}

async function testSearchCorrect() {
  console.log("\nTesting Search with query...");
  const res = await fetch("https://api.search.tinyfish.ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey
    },
    body: JSON.stringify({ query: "OpenAI ChatGPT agents" })
  });
  console.log("Search Status:", res.status);
  const data = await res.json();
  console.log("Search Data:", JSON.stringify(data, null, 2).slice(0, 400));
}

async function run() {
  await testFetchCorrect();
  await testSearchCorrect();
}

run();

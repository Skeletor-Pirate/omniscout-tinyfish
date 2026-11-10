#!/usr/bin/env node
/**
 * TinyFish Direct CLI Agent Runner
 * Usage:
 *   node run-agent.mjs agent "https://stripe.com/pricing" "Extract pricing tiers"
 *   node run-agent.mjs fetch "https://news.ycombinator.com"
 *   node run-agent.mjs search "autonomous web agents 2026"
 */

const API_KEY = process.env.TINYFISH_API_KEY || "sk-tinyfish-KllnVzWLC92Ip8IlP2ZrhakiJQnxzdSI";

const command = process.argv[2] || 'agent';
const target = process.argv[3] || 'https://example.com';
const goal = process.argv[4] || 'Extract page title and primary CTA';

async function runAgent(url, taskGoal) {
  console.log(`\n🐟 [TinyAgent] Initiating autonomous session...`);
  console.log(`🎯 URL:  ${url}`);
  console.log(`📋 Goal: ${taskGoal}`);
  console.log(`🔑 Key:  ${API_KEY.slice(0, 15)}...`);
  console.log(`⏳ Autonomous agent reasoning & navigating in cloud Chromium...`);

  const startTime = Date.now();
  const res = await fetch("https://agent.tinyfish.ai/v1/automation/run", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY
    },
    body: JSON.stringify({ url, goal: taskGoal })
  });

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  const data = await res.json();
  console.log(`\n✨ [Finished in ${duration}s | HTTP ${res.status}]`);
  console.log(JSON.stringify(data, null, 2));
}

async function runFetch(url) {
  console.log(`\n🐟 [TinyFetch] Extracting clean Markdown...`);
  console.log(`🎯 URL: ${url}`);
  const res = await fetch("https://api.fetch.tinyfish.ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY
    },
    body: JSON.stringify({ urls: [url] })
  });
  const data = await res.json();
  console.log(`\n✨ [HTTP ${res.status}] Output:`);
  console.log(JSON.stringify(data, null, 2));
}

async function runSearch(query) {
  console.log(`\n🐟 [TinySearch] Searching agent-optimized index...`);
  console.log(`🔍 Query: "${query}"`);
  const res = await fetch(`https://api.search.tinyfish.ai?query=${encodeURIComponent(query)}`, {
    headers: { "X-API-Key": API_KEY }
  });
  const data = await res.json();
  console.log(`\n✨ [HTTP ${res.status}] Found ${data.total_results || (data.results && data.results.length) || 0} results:`);
  console.log(JSON.stringify(data, null, 2));
}

switch (command.toLowerCase()) {
  case 'fetch':
    runFetch(target);
    break;
  case 'search':
    runSearch(target);
    break;
  case 'agent':
  default:
    runAgent(target, goal);
    break;
}

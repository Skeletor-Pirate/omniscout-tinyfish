export default function handler(req, res) {
  res.status(200).json({
    status: "ONLINE",
    engine: "TinyFish Autonomous Mesh",
    activeKey: "sk-tinyfish-Kll...",
    endpointsReady: ["TinyAgent", "TinySearch", "TinyFetch"]
  });
}

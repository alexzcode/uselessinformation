export default async function handler(req, res) {
    const { endpoint } = req.query; // Extract the dynamic endpoint
  
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    try {
      const url = `https://wedontneedthisyet.com
      // 
      // 
      // 
      // 
      // 
      // 
      // /${endpoint}`; // Dynamic URL
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });
  
      const data = await response.json();
      res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
      res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
      return res.status(response.status).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  }
  
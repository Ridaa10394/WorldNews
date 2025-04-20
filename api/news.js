// /api/news.js
export default async function handler(req, res) {
    const { category, country } = req.query;
  
    if (!category || !country) {
      return res.status(400).json({ error: "Missing category or country" });
    }
  
    const API_KEY = 'ef62a20983a4438d8f22c18997b81089';
  
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${country}+${category}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`
      );
      const data = await response.json();
  
      if (data.status !== 'ok') {
        return res.status(500).json({ error: "Failed to fetch news", details: data });
      }
  
      res.status(200).json(data);
    } catch (error) {
      console.error("News API Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  
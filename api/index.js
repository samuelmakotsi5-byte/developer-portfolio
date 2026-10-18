export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const portfolio = {
    name: "Samuel Makotsi - Kivora Tech",
    title: "Full Stack Developer | Kivora Tech Founder",
    status: "Live",
    location: "Utawala, Nairobi, Kenya",
    contact: {
      whatsapp: "https://wa.me/254704262903",
      github: "https://github.com/samuelmakotsi5-byte",
      portfolio: "https://developer-portfolio-qwyp.bolt.host"
    },
    projects: [
      {
        id: 1,
        name: "Kivora Digital Forge",
        type: "Agency Website",
        link: "https://developer-portfolio-qwyp.bolt.host",
        tech: ["React", "Tailwind", "Vercel"]
      },
      {
        id: 2,
        name: "Furni-Style E-commerce",
        type: "E-commerce",
        status: "Coming Soon"
      }
    ],
    api_info: {
      endpoint: "/api",
      message: "Welcome to Kivora Tech Official API"
    }
  };

  return res.status(200).json(portfolio);
  }

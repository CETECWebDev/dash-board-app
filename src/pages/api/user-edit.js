export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const { id, name, email } = req.body;


    try {
      const response = await fetch(`http://89.235.119.239/gateway/employees/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        const responseData = await response.json();
        return res.status(200).json(responseData);
      } else {
        const errorData = await response.json();
        return res.status(response.status).json({ message: errorData.message || "Failed to edit user" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error forwarding request to external API", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["PATCH"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}



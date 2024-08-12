// pages/api/getUser.ts
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userData = req.cookies["user-data"];
  if (userData) {
    res.status(200).json({ user: JSON.parse(userData) });
  } else {
    res.status(401).json({ error: "User not authenticated" });
  }
}

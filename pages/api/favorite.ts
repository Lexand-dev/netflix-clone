import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { without } from "lodash";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { currentUser } = await serverAuth(req, res);

      const {movieId} = req.body

      const existingMovie = await prismadb.movie.findUnique({
        where: { id: movieId },
      });

      if (!existingMovie) {
        return res.status(404).json({ error: "Movie not found" });
      }

      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favoriteIds: {
            push: movieId,
          },
        }
    });
    

    return res.status(200).json(user);
  }

  if (req.method === "DELETE") {
    const { currentUser } = await serverAuth(req, res);

    const {movieId} = req.body

    const existingMovie = await prismadb.movie.findUnique({
      where: { id: movieId },
    });

    if (!existingMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    const updatedFavorites = without(currentUser.favoriteIds, movieId)

    const updatedUser = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: updatedFavorites,
      }
  });

  return res.status(200).json(updatedUser);
  }

  res.status(400).json({ error: "Invalid method" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
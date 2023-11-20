export async function getUser({ userID }: { userID: number }) {
  const res = await fetch(`http://localhost:3000/user/${userID}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

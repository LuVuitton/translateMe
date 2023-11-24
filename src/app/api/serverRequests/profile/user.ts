const BASE_URL = 'http://localhost:3000'

export async function getUser({ userID }: { userID: number }) {
  const res = await fetch(`${BASE_URL}/user/${userID}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data getUser");
  }

  return res.json();
}


export async function getUserLangs({ userID }: { userID: number }) {
  const res = await fetch(`${BASE_URL}/user-lang/${userID}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data getUserLangs");
  }

  return res.json();
}

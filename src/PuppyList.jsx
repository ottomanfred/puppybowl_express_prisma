import { useGetPlayersQuery } from "./puppySlice";

export default function Puppies() {
  const { data: puppies, isLoading } = useGetPlayersQuery();

  console.log(puppies);
  return (
    <>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          puppies.map((player) => (
            <li key={player.id}>
              <h2>{player.name}</h2>
              <p>{player.status}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSongsFetch } from "../redux/songSlice";
import { Link } from "react-router-dom";

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 1rem;

//   > div {
//     font-size: 20px;
//     font-weight: bold;
//   }
// `;

const Home = () => {
  const songs = useSelector((state: IState) => state.songs.songs);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return (
    <>
      <h1>Manage songs</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {songs?.map((song) => (
            <tr key={song._id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/songs/new">Add New song</Link>
    </>
  );
};

export default Home;

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteSong, getSongs } from "../redux/songSlice";
import { Link } from "react-router-dom";
import { IState } from "../types";

const Home = () => {
  const { isLoading, songs } = useSelector((state: IState) => state.songs);
  console.log("🚀 ~ Home ~ songs:", songs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Manage songs</h1>
        <Link to="/songs/new">Add New song</Link>
      </div>
      {isLoading ? (
        <h5>Loading</h5>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Genre</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {songs?.map((song) => (
              <tr key={song._id}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>
                  <Link to={`/songs/${song._id}`}>Edit</Link>
                </td>
                <td>
                  <button onClick={() => dispatch(deleteSong(song._id))}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Home;

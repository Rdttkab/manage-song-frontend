import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteSong, getSongs } from "../redux/songSlice";
import { Link } from "react-router-dom";
import { IState } from "../types";
import styled from "@emotion/styled";

const Container = styled.div`
  min-width: 760px;
  width: 100%;
  padding: 2.5 rem;
  background-color: rgb(243 244 246)
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;
  > h1 {
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  background-color: rgb(79 70 229);
  color: white;
  border-radius: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  text-align: center;
  font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;


  :hover {
    color: #e2e8f0;
  }
`;

const Table = styled.table`
  margin: 2rem 0;
  text-align: center;

  tr {
    margin: 8px 0;
    background-color: #f1f5f9;
  }

  td,
  th {
    width: 100px;
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 8px;
  }
`;

const Button = styled.button`
  background-color: red;
  color: white;
`;

const Section = styled.section`
max-width: 80rem;
padding-left: 2rem;
padding-right: 2rem;
margin-left: auto;
margin-right: auto;
`;

const Home = () => {
  const { isLoading, songs } = useSelector((state: IState) => state.songs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <Container>
      <h1>Manage songs</h1>
      <Section>

      <TitleContainer>
        <div>

        <h3>Songs</h3>
        </div>
        <StyledLink to="/songs/new">Add New song</StyledLink>
      </TitleContainer>
      {isLoading ? (
        <h5>Loading</h5>
      ) : (
        <Table>
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
                  <Button onClick={() => dispatch(deleteSong(song._id))}>
                    delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      </Section>
    </Container>
  );
};

export default Home;

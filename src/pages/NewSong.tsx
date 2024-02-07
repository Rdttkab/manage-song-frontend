import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { addSong } from "../redux/songSlice";
import { useNavigate } from "react-router-dom";

const labelStyles = css({
  display: "block",
  fontSize: "0.875rem",
  fontWeight: 500,
  lineHeight: "1.5rem",
  color: "rgb(17 24 39)",
  textAlign: "left",
});

const InputContainer = styled.div`
  display: flex;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  --tw-ring-inset: inset;
  --tw-ring-color: rgb(209 213 219);
  box-shadow: var(--tw-ring-inset) 0 0 0 1px var(--tw-ring-color);

  :focus-within {
    --tw-ring-inset: inset;
    --tw-ring-color: rgb(79 70 229);
    box-shadow: var(--tw-ring-inset) 0 0 0 2px var(--tw-ring-color);
  }

  max-width: 28rem;
`;

const StyledInput = styled.input`
  display: block;
  flex: 1 1 0%;
  border-width: 0px;
  background-color: transparent;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.25rem;
  color: rgb(17 24 39);

  font-size: 0.875rem;
  line-height: 1.25rem;
  line-height: 1.5rem;

  ::placeholder {
    color: rgb(156 163 175);
  }

  :focus {
    --tw-ring-inset: inset;
    box-shadow: var(--tw-ring-inset) 0 0 0 0px #fff;
  }
`;

const NewSong = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    dispatch(addSong(data));
    event.currentTarget.reset();
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        css={css`
          background-color: rgb(243 244 246);
          padding: 2rem 4rem;
          border-radius: 0.2rem;
          min-width: 35rem;
        `}>
        <div
          css={css`
            border-bottom-width: 1px;
            border-color: rgb(17 24 39) / 10;
            margin-bottom: 3rem;
          `}>
          <h2
            css={css`
              font-size: 1rem;
              line-height: 1.5rem;
              font-weight: 600;
              line-height: 1.75rem;
              color: rgb(17 24 39);
              text-align: left;
            `}>
            Add New Song
          </h2>
        </div>

        <div
          css={css`
            margin-top: 1rem;
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            column-gap: 1.5rem;
            row-gap: 2rem;
          `}>
          <div
            css={css`
              grid-column: span 4 / span 4;
            `}>
            <label htmlFor="title" css={labelStyles}>
              Title
            </label>
            <div
              css={css`
                margin-top: 0.5rem;
              `}>
              <InputContainer>
                <StyledInput
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="title"
                  required
                  placeholder="janesmith"
                />
              </InputContainer>
            </div>
          </div>

          <div
            css={css`
              grid-column: span 4 / span 4;
            `}>
            <label htmlFor="artist" css={labelStyles}>
              Artist
            </label>
            <div
              css={css`
                margin-top: 0.5rem;
              `}>
              <InputContainer>
                <StyledInput
                  type="text"
                  name="artist"
                  id="artist"
                  autoComplete="artist"
                  required
                  placeholder="janesmith"
                />
              </InputContainer>
            </div>
          </div>

          <div
            css={css`
              grid-column: span 4 / span 4;
            `}>
            <label htmlFor="album" css={labelStyles}>
              Album
            </label>
            <div
              css={css`
                margin-top: 0.5rem;
              `}>
              <InputContainer>
                <StyledInput
                  type="text"
                  name="album"
                  id="album"
                  autoComplete="album"
                  required
                  placeholder="janesmith"
                />
              </InputContainer>
            </div>
          </div>

          <div
            css={css`
              grid-column: span 4 / span 4;
            `}>
            <label htmlFor="genre" css={labelStyles}>
              Genre
            </label>
            <div
              css={css`
                margin-top: 0.5rem;
              `}>
              <InputContainer>
                <StyledInput
                  type="text"
                  name="genre"
                  id="genre"
                  autoComplete="genre"
                  required
                  placeholder="janesmith"
                />
              </InputContainer>
            </div>
          </div>
        </div>

        <div
          css={css`
            margin-top: 1.5rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            column-gap: 1.5rem;
          `}>
          <button
            type="button"
            css={css`
              font-size: 0.875rem;
              line-height: 1.25rem;
              font-weight: 600;
              line-height: 1.5rem;
              color: rgb(17 24 39);
            `}>
            Cancel
          </button>
          <button
            type="submit"
            css={css`
              border-radius: 0.375rem;
              background-color: rgb(79 70 229);
              padding-left: 0.75rem;
              padding-right: 0.75rem;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              font-size: 0.875rem;
              line-height: 1.25rem;
              font-weight: 600;
              color: white;
              box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

              :hover {
                background-color: rgb(99 102 241);
              }
            `}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewSong;

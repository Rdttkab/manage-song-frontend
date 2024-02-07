import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteSong, getSongs } from "../redux/songSlice";
import { Link } from "react-router-dom";
import { IState } from "../types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const thStyles = css({
  color: "rgb(17 24 39)",
  fontWeight: 600,
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  textAlign: "left",
  padding: "0.875rem 0.75rem",
});

const tdStyles = css({
  color: "rgb(107 114 128)",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  padding: "1rem 0.75rem",
  whiteSpace: "nowrap",
  textAlign: "left",
});

const Home = () => {
  const { isLoading, songs } = useSelector((state: IState) => state.songs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <div
      css={css`
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;

        --tw-bg-opacity: 1;
        background-color: rgb(243 244 246 / var(--tw-bg-opacity));
      `}>
      <div
        css={css`
          min-width: 70rem;

          margin-left: auto;
          margin-right: auto;
        `}>
        <div
          css={css`
            padding-left: 2rem;
            padding-right: 2rem;
          `}>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}>
            <div
              css={css`
                flex: 1 1 auto;
              `}>
              <h1
                css={css`
                  font-size: 1rem;
                  line-height: 1.5rem;

                  --tw-text-opacity: 1;
                  color: rgb(17 24 39 / var(--tw-text-opacity));

                  text-align: left;
                `}>
                Users
              </h1>
              <p
                css={css`
                  --tw-text-opacity: 1;
                  color: rgb(55 65 81 / var(--tw-text-opacity));

                  font-size: 0.875rem;
                  line-height: 1.25rem;

                  margin-top: 0.5rem;

                  text-align: left;
                `}>
                A list of all the users in your account including their name,
                title, email and role.
              </p>
            </div>
            <div
              css={css`
                flex: none;

                margin-top: 0px;
                margin-left: 4rem;
              `}>
              <button
                type="button"
                css={css`
                  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
                  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
                  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
                    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

                  --tw-text-opacity: 1;
                  color: rgb(255 255 255 / var(--tw-text-opacity));

                  font-weight: 600;

                  font-size: 0.875rem;
                  line-height: 1.25rem;

                  text-align: center;

                  padding: 0.5rem 0.75rem;

                  --tw-bg-opacity: 1;
                  background-color: rgb(79 70 229 / var(--tw-bg-opacity));

                  border-radius: 0.375rem;

                  display: block;
                `}>
                Add user
              </button>
            </div>
          </div>

          {isLoading ? (
            <div>Loading</div>
          ) : (
            <div
              css={css`
                display: flow-root;
                margin-top: 2rem;
              `}>
              <div
                css={css`
                  margin-left: -2rem;
                  margin-right: -2rem;

                  overflow-x: auto;

                  margin-top: -0.5rem;
                  margin-bottom: -0.5rem;
                `}>
                <div
                  css={css`
                    padding-left: 2rem;
                    padding-right: 2rem;

                    vertical-align: middle;

                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;

                    min-width: 100%;

                    display: inline-block;
                  `}>
                  <div
                    css={css`
                      border-radius: 0.5rem;

                      --tw-ring-opacity: 0.05;

                      --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));

                      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
                        var(--tw-ring-offset-width) var(--tw-ring-offset-color);
                      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
                        calc(1px + var(--tw-ring-offset-width))
                        var(--tw-ring-color);
                      box-shadow: var(--tw-ring-offset-shadow),
                        var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);

                      --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1),
                        0 1px 2px -1px rgb(0 0 0 / 0.1);
                      --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),
                        0 1px 2px -1px var(--tw-shadow-color);

                      overflow: hidden;
                    `}>
                    <table
                      css={css`
                        min-width: 100%;
                      `}>
                      <thead
                        css={css`
                          background-color: rgb(249 250 251);
                        `}>
                        <tr>
                          <th
                            scope="col"
                            css={css`
                              color: rgb(17 24 39);

                              font-weight: 600;
                              font-size: 0.875rem;
                              line-height: 1.25rem;
                              text-align: left;

                              padding: 0.875rem;
                              padding-right: 0.75rem;
                              padding-left: 1.5rem;
                            `}>
                            Name
                          </th>
                          <th scope="col" css={thStyles}>
                            Title
                          </th>
                          <th scope="col" css={thStyles}>
                            Email
                          </th>
                          <th scope="col" css={thStyles}>
                            Role
                          </th>
                          <th
                            scope="col"
                            css={css`
                              padding-right: 1.5rem;

                              padding-left: 0.75rem;

                              padding-top: 0.875rem;
                              padding-bottom: 0.875rem;

                              position: relative;
                            `}>
                            <span
                              css={css`
                                position: absolute;
                                width: 1px;
                                height: 1px;
                                padding: 0;
                                margin: -1px;
                                overflow: hidden;
                                clip: rect(0, 0, 0, 0);
                                white-space: nowrap;
                                border-width: 0;
                              `}>
                              Edit
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        css={css`
                          .ach > :not([hidden]) ~ :not([hidden]) {
                            --tw-divide-opacity: 1;
                            border-color: rgb(
                              209 213 219 / var(--tw-divide-opacity)
                            );
                          }

                          .acc > :not([hidden]) ~ :not([hidden]) {
                            --tw-divide-y-reverse: 0;
                            border-top-width: calc(
                              1px * calc(1 - var(--tw-divide-y-reverse))
                            );
                            border-bottom-width: calc(
                              1px * var(--tw-divide-y-reverse)
                            );
                          }

                          --tw-bg-opacity: 1;
                          background-color: rgb(
                            255 255 255 / var(--tw-bg-opacity)
                          );
                        `}>
                        {songs?.map((song) => (
                          <tr key={song._id}>
                            <td
                              css={css`
                                padding-left: 1.5rem;

                                --tw-text-opacity: 1;
                                color: rgb(17 24 39 / var(--tw-text-opacity));

                                font-weight: 500;

                                font-size: 0.875rem;
                                line-height: 1.25rem;

                                padding-right: 0.75rem;

                                padding-top: 1rem;
                                padding-bottom: 1rem;

                                white-space: nowrap;

                                text-align: left;
                              `}>
                              {song.title}
                            </td>
                            <td css={tdStyles}>{song.artist}</td>
                            <td css={tdStyles}>{song.album}</td>
                            <td css={tdStyles}>{song.genre}</td>
                            <td
                              css={css`
                                padding-right: 1.5rem;

                                font-weight: 500;

                                font-size: 0.875rem;
                                line-height: 1.25rem;

                                padding-left: 0.75rem;

                                padding-top: 1rem;
                                padding-bottom: 1rem;

                                white-space: nowrap;

                                display: flex;
                                align-items: center;
                                justify-content: center;
                                gap: 0.5rem;
                              `}>
                              <Link
                                to="#"
                                css={css`
                                  color: rgb(79 70 229);
                                `}>
                                Edit
                              </Link>
                              <span>|</span>
                              <Link
                                to="#"
                                css={css`
                                  color: #f43f5e;
                                `}>
                                Delete
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

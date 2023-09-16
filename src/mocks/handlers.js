import { rest } from "msw";

const baseURL = 'https://drf-api-alf-f7affde58488.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 9,
        username: "Harry",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 9,
        profile_image: "https://res.cloudinary.com/dl80utlk8/image/upload/v1/media/../default_profile_oztffo"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
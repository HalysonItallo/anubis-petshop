import { rest } from "msw";
import typesAnimals from "../data/typesAnimals";
import typesBreed from "../data/typesBreed";
import Dates from "../data/Dates";
import Adress from "../data/Adress";
import Hours from "../data/Hours";
import Appointment from "../data/Appointments";
import Vaccines from "../data/Vaccines";


export const handlers = [
  rest.get("https://backend.dev/typesAnimals", (req, res, ctx) => {
    return res(ctx.json(typesAnimals));
  }),
  rest.get("https://backend.dev/typesBreed", (req, res, ctx) => {
    return res(ctx.json(typesBreed));
  }),
  rest.get("https://backend.dev/dates", (req, res, ctx) => {
    return res(ctx.json(Dates));
  }),
  rest.get("https://backend.dev/hours", (req, res, ctx) => {
    return res(ctx.json(Hours));
  }),
  rest.get("https://backend.dev/adress", (req, res, ctx) => {
    return res(ctx.json(Adress));
  }),
  rest.get("https://backend.dev/appointment", (req, res, ctx) => {
    return res(ctx.json(Appointment));
  }),
  rest.get("https://backend.dev/vaccines", (req, res, ctx) => {
    return res(ctx.json(Vaccines));
  }),
];

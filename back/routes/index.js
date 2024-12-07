import express, { json } from "express";
import { query as _query } from "../config/db";
import {authRouter as auth} from "./authRouter";

module.exports = {
  message: 'Server index file is connected properly!',
};



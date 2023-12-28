import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagii from "./Pagii";
import Single from "../singlepost/Single";

export default function POst({ allPost }) {
  return (
    <div>
      <div>
        <Single allPost={allPost} />
      </div>
    </div>
  );
}

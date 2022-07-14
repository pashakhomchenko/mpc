import { useEffect } from "react";
import Router from "next/router";
const Subscribe = () => {
  useEffect(() => {
    Router.push("https://pashakhomchenko.com/subscribe?success=true");
  });
  return;
};

export default Subscribe;

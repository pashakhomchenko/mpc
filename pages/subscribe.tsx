import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Subscribe = () => {
  const { query } = useRouter();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    query.success && setSuccess(true);
  }, [query.success]);
  return (
    <div className="h-screen w-screen font-Michroma flex flex-col justify-center items-center">
      {success ? (
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-xl">Payment was successful</h1>
          <a
            className="text-xl underline"
            href="https://pashakhomchenko.com/subscribe?success=true"
          >
            Return to the app
          </a>
        </div>
      ) : (
        <h1 className="text-4xl">Loading</h1>
      )}
    </div>
  );
};

export default Subscribe;

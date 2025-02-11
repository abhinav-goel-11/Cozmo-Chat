import { useEffect } from "react";
import { useRouter } from "next/router";

export default function CustomError() {
  const router = useRouter();

  useEffect(() => {
    router.push("/"); // Redirect to the home page
  }, []);

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>You will be redirected to the home page shortly...</p>
    </div>
  );
}

CustomError.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(200, {
      Location: "/",
    });
    res.end();
  }
};

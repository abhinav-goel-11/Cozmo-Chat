import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page after 3 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ margin: "15% 38%", width: "100%" }}>
      <h1 style={{ fontSize: "45px" }}>Page Not Found</h1>
      <p>Sorry, the page you're looking for does not exist.</p>
      <a href="/">
        <p style={{ fontSize: "20px", marginTop: "2% " }}>Go To Home</p>
      </a>
    </div>
  );
}

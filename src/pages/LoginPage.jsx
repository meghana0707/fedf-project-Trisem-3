import { useNavigate } from "react-router-dom";
import background from "../assets/background.jpg";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="overlay">
        <div className="login-box">
          <h1>College Canteen</h1>
          <h2>Token System</h2>

          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Student ID" />
            <input type="password" placeholder="Password" />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
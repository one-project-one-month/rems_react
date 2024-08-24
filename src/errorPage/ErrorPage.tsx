import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goDashboard = () => {
    navigate("/");
  };
  const goClient = () => {
    navigate("/web/clients");
  };

  return (
    <div>
      <button onClick={goDashboard}> Go To Dashboard</button> <br />
      <button onClick={goClient}> Go To Client Web View</button>
    </div>
  );
};

export default ErrorPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AgentRegister: React.FC = () => {
  const navigate = useNavigate();

  const [agentName, setAgentName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [licenseNumber, setLicenseNumber] = useState<string>("")
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<string>("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous messages
    setError("");
    setSuccess("");

    // Validate all fields
    if (!agentName || !userName || !licenseNumber || !email || !password || !confirmPassword || !phone || !address) {
      setError("Please fill in all fields.");
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Simulate an API call
      setLoading(true)
      await axios.post("http://65.18.112.78:44010/rems/api/v1/agents", { agentName, userName,licenseNumber, email, password, phone, address });
      
      setSuccess("Successfully signed up!");
      setError("");

      // Redirect after a successful registration
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        className="mt-10 border p-5 rounded-md flex flex-col w-[100%] justify-center items-center shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[1.2rem] font-bold text-gray-500 mb-5">Registration Form for Agent</h1>
        <p className="my-4 font-bold">Agents can sell or rent the properties</p>
        <div className="flex flex-col gap-5">
          {/* First Name and Last Name */}
          <div className="flex flex-wrap gap-2">
            <input
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              className="bg-gray-200 focus:outline-none flex-1 border-b-2 p-2 rounded-md"
              type="text"
              placeholder="Agent Name"
              required
            />

            <input
              className="bg-gray-200 focus:outline-none flex-1 border-b-2 p-2 rounded-md"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="User Name"
              required
            />
          </div>

          {/* Email and Password */}

          <input
            type="text"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            className="bg-gray-200 focus:outline-none border-b-2 p-2 rounded-md"
            placeholder="License Number"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 focus:outline-none border-b-2 p-2 rounded-md"
            placeholder="Email"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 focus:outline-none border-b-2 p-2 rounded-md"
            placeholder="Password"
            required
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-gray-200 focus:outline-none border-b-2 p-2 rounded-md"
            placeholder="Confirm Password"
            required
          />

          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={2}
            cols={10}
            className="focus:outline-none bg-gray-200 p-3"
            placeholder="Your address..."
            required
          />

          <input
            className="bg-gray-200 focus:outline-none border-b-2 p-2 rounded-md"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            required
          />
        </div>

        {/* Error and Success Messages */}
        {error && <p className="w-[50%] text-center mt-5 text-red-500">{error}</p>}
        {success && <p className="w-[50%] text-center mt-5 text-green-500">{success}</p>}
        {loading && <p className="w-[50%] text-center mt-5 text-green-500">Loading</p>}

        <button
          className="bg-blue-500 mt-10 px-5 py-2 rounded-md text-white font-bold hover:shadow-lg hover:bg-blue-400"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default AgentRegister;
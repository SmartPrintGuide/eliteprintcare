import React, { useState, useEffect } from "react";
import {
  X,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  Mail,
  Key,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  sendRegistrationOTP,
  verifyRegistrationOTP,
  forgotPassword,
  resetPassword,
} from "../redux/actions/userActions";

const AuthModal = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const { loading, userInfo, error } = useSelector((state) => state.userLogin);
  const { loading: loadingSendOTP, success: successSendOTP, error: errorSendOTP } =
    useSelector((state) => state.userSendOTP);
  const { success: successVerifyOTP, loading: loadingVerifyOTP, error: errorVerifyOTP } =
    useSelector((state) => state.userVerifyOTP);
  const { success: successForgot } =
    useSelector((state) => state.userForgotPassword);
  const { success: successReset, error: errorReset } =
    useSelector((state) => state.userResetPassword);

  useEffect(() => {
    if (userInfo) {
      setSuccessMessage("Login Successful!");
      setTimeout(() => onClose(), 1200);
    }
  }, [userInfo, onClose]);

  const submitHandler = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (mode === "signup") {
      if (password !== confirmPassword)
        return setErrorMessage("Passwords do not match");
      dispatch(
        sendRegistrationOTP(firstName, lastName, email.trim(), password)
      );
    } else if (mode === "verify-otp") {
      dispatch(verifyRegistrationOTP(email.trim(), otp));
    } else if (mode === "forgot-password") {
      dispatch(forgotPassword(email.trim()));
    } else if (mode === "reset-password") {
      if (newPassword !== confirmPassword)
        return setErrorMessage("Passwords do not match");
      dispatch(resetPassword(email.trim(), otp, newPassword));
    } else {
      dispatch(login(email.trim(), password));
    }
  };

  useEffect(() => {
    if (successSendOTP) {
      setMode("verify-otp");
      setSuccessMessage("OTP sent to your email.");
    }
  }, [successSendOTP]);

  useEffect(() => {
    if (successVerifyOTP) {
      setMode("login");
      setSuccessMessage("Account created successfully!");
    }
  }, [successVerifyOTP]);

  useEffect(() => {
    if (successForgot) {
      setMode("reset-password");
      setSuccessMessage("Reset OTP sent to email.");
    }
  }, [successForgot]);

  useEffect(() => {
    if (successReset) {
      setMode("login");
      setSuccessMessage("Password reset successfully!");
    }
  }, [successReset]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Dark Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-[95%] sm:w-[480px] bg-white border border-gray-200 rounded-xl p-8 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300"
        style={{ maxWidth: '480px' }}
      >

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#2564E5]">
            {mode === "login" && "Login"}
            {mode === "signup" && "Create Account"}
            {mode === "verify-otp" && "Verify OTP"}
            {mode === "forgot-password" && "Forgot Password"}
            {mode === "reset-password" && "Reset Password"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#2564E5] transition"
          >
            <X size={22} />
          </button>
        </div>

        {errorMessage && (
          <div className="mb-4 text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-xl px-3 py-2 font-medium">
            {errorMessage}
          </div>
        )}
        {/* Show incorrect userid/password error if login fails */}
        {mode === "login" && error && (
          <div className="mb-4 text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-xl px-3 py-2 font-medium">
            Incorrect email or password.
          </div>
        )}
        {successMessage && (
          <div className="mb-4 text-green-600 text-sm text-center bg-green-50 border border-green-200 rounded-xl px-3 py-2 font-medium">
            {successMessage}
          </div>
        )}
        {mode === "signup" && errorSendOTP && (
          <div className="mb-4 text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-xl px-3 py-2 font-medium">
            {errorSendOTP}
          </div>
        )}
        {mode === "verify-otp" && errorVerifyOTP && (
          <div className="mb-4 text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-xl px-3 py-2 font-medium">
            {errorVerifyOTP}
          </div>
        )}
        {mode === "reset-password" && errorReset && (
          <div className="mb-4 text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-xl px-3 py-2 font-medium">
            {errorReset === 'Invalid or expired OTP' || errorReset === 'OTP not matched' ? 'OTP not matched' : errorReset}
          </div>
        )}

        {/* LOGIN */}
        {mode === "login" && (
          <form onSubmit={submitHandler} className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2564E5] focus:border-[#2564E5] bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Move Forgot Password above Login button */}
            <button
              type="button"
              className="w-full text-xs text-[#2564E5] hover:underline font-medium mb-2"
              onClick={() => setMode("forgot-password")}
            >
              Forgot Password?
            </button>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#2564E5] text-white rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-blue-700 transition"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                <>
                  Login <ArrowRight size={18} />
                </>
              )}
            </button>

            <div className="text-sm text-center mt-2">
              Don’t have account?{" "}
              <button
                type="button"
                className="text-[#2564E5] font-medium"
                onClick={() => setMode("signup")}
              >
                Signup
              </button>
            </div>
          </form>
        )}
          {/* VERIFY OTP */}
          {mode === "verify-otp" && (
            <form onSubmit={submitHandler} className="space-y-5">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-[#2564E5]" size={24} />
                </div>
                <p className="text-gray-600 text-sm">
                  We've sent a 6-digit OTP to <strong>{email}</strong>
                </p>
              </div>
              <input
                type="text"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-center text-2xl font-mono tracking-widest focus:ring-2 focus:ring-[#2564E5] bg-white"
                placeholder="000000"
                value={otp}
                onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
                required
              />
              <button
                type="submit"
                disabled={otp.length !== 6 || loadingVerifyOTP}
                className="w-full py-3 bg-[#2564E5] text-white rounded-xl font-semibold flex justify-center items-center gap-2 disabled:opacity-50 hover:bg-blue-700 transition"
              >
                {loadingVerifyOTP ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  'Verify & Create Account'
                )}
              </button>
              <div className="text-sm text-center mt-6">
                Didn't receive OTP?{' '}
                <button
                  type="button"
                  className="text-[#2564E5] font-medium"
                  onClick={() => { setMode('signup'); setOtp(''); }}
                >
                  Try again
                </button>
              </div>
            </form>
          )}

          {/* FORGOT PASSWORD */}
          {mode === "forgot-password" && (
            <form onSubmit={submitHandler} className="space-y-5">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-[#2564E5]" size={24} />
                </div>
                <p className="text-gray-600 text-sm">
                  Enter your email address and we'll send you a reset code
                </p>
              </div>
              <input
                type="email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2564E5] bg-white"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#2564E5] text-white rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Send Reset Code
              </button>
              <div className="text-sm text-center mt-6">
                Remember your password?{' '}
                <button
                  type="button"
                  className="text-[#2564E5] font-medium"
                  onClick={() => setMode('login')}
                >
                  Login
                </button>
              </div>
            </form>
          )}

          {/* RESET PASSWORD */}
          {mode === "reset-password" && (
            <form onSubmit={submitHandler} className="space-y-5">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="text-[#2564E5]" size={24} />
                </div>
                <p className="text-gray-600 text-sm">
                  Enter the OTP sent to <strong>{email}</strong> and your new password
                </p>
              </div>
              <input
                type="text"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-center text-2xl font-mono tracking-widest focus:ring-2 focus:ring-[#2564E5] bg-white"
                placeholder="000000"
                value={otp}
                onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
                required
              />
              <input
                type="password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2564E5] bg-white"
                placeholder="New Password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                required
              />
              <input
                type="password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2564E5] bg-white"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={otp.length !== 6}
                className="w-full py-3 bg-[#2564E5] text-white rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Reset Password
              </button>
              <div className="text-sm text-center mt-6">
                <button
                  type="button"
                  className="text-[#2564E5] font-medium"
                  onClick={() => setMode('forgot-password')}
                >
                  Try different email
                </button>
              </div>
            </form>
          )}

        {/* SIGNUP */}
        {mode === "signup" && (
          <form onSubmit={submitHandler} className="space-y-5">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2564E5] bg-white"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2564E5] bg-white"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2564E5] bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2564E5] bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#2564E5] bg-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loadingSendOTP}
              className="w-full py-3 bg-[#2564E5] text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              {loadingSendOTP ? (
                <Loader2 className="animate-spin mx-auto" size={18} />
              ) : (
                "Send OTP"
              )}
            </button>

            <div className="text-sm text-center">
              Already have account?{" "}
              <button
                type="button"
                className="text-[#2564E5] font-medium"
                onClick={() => setMode("login")}
              >
                Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;

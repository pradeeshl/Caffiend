import React, { useState } from "react";

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted");
};

const Form = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="text-gradient auth-title">
          {isSignUp ? "Create Account" : "Sign In"}
        </h2>
        
        <p className="auth-subtitle">
          {isSignUp 
            ? "Join our coffee community today!" 
            : "Welcome back, coffee enthusiast!"}
        </p>

        {isSignUp && (
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              className="form-input"
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="form-input"
            required
          />
        </div>

        {isSignUp && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="form-input"
              required
            />
          </div>
        )}
        
        <button type="submit" className="auth-button">
          <i className="fa-solid fa-mug-hot mr-2"></i>
          {isSignUp ? "Create Account" : "Sign In"}
        </button>

        <p className="auth-toggle">
          {isSignUp ? "Already have an account?" : "Don't have an account yet?"}{" "}
          <button 
            type="button"
            className="auth-toggle-button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Form;

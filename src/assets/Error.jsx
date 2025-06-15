import React from "react";

const ErrorComponent = ({ errorType, onRetry }) => {
  const getErrorContent = () => {
    switch (errorType) {
      case "timeout":
        return {
          icon: "⏰",
          title: "Request Timeout",
          message: "The request is taking too long to complete.",
          suggestion: "Please check your internet connection and try again.",
        };
      case "network":
        return {
          icon: "🌐",
          title: "Network Error",
          message: "Unable to connect to the server.",
          suggestion: "Please check your internet connection and try again.",
        };
      case "server":
        return {
          icon: "🔧",
          title: "Server Error",
          message: "Something went wrong on our end.",
          suggestion: "Please try again in a few moments.",
        };
      case "loading":
        return {
          icon: "⚠️",
          title: "Loading Error",
          message: "Failed to load user data.",
          suggestion: "There might be an issue with the data source.",
        };
      default:
        return {
          icon: "❌",
          title: "Something Went Wrong",
          message: "An unexpected error occurred.",
          suggestion: "Please try refreshing the page or try again later.",
        };
    }
  };

  const { icon, title, message, suggestion } = getErrorContent();

  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">{icon}</div>
        <h2 className="error-title">{title}</h2>
        <p className="error-message">{message}</p>
        <p className="error-suggestion">{suggestion}</p>
        {onRetry && (
          <button className="error-retry-btn" onClick={onRetry}>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorComponent;

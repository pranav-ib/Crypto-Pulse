function ApiWarning({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="api-warning">
      <div className="api-warning-icon">!</div>

      <div className="api-warning-content">
        <p className="api-warning-title">API Connection Warning</p>
        <p className="api-warning-text">{message}</p>
      </div>

      <button className="api-warning-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
}

export default ApiWarning;
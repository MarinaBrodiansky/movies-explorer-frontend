import "./InfoTooltip.css";

const InfoTooltip = ({ isOpen, onClose, message }) => {
  return (
    <div className={`popup ${isOpen && "popup__opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <p>{JSON.stringify(message)}</p>
      </div>
    </div>
  );
};

export default InfoTooltip;

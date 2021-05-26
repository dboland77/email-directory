import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal displayBlock" : "modal displayNone";

  return (
    <div className={showHideClassName}>
      <section className="modalMain">
        <button className = "close" onClick={handleClose}>x</button>
        {children}
      </section>
    </div>
  );
};

export default Modal;

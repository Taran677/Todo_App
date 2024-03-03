import css from "./Empty.module.css";
function Empty() {
  return (
    <div className={`${css["empty-div"]}`}>
      {" "}
      <h2 className="empty">Enjoy You Day!</h2>
      <p className="emptyPara">No TODOs Found!</p>
      <img src="https://raw.githubusercontent.com/Taran677/Todo_App/master/src/assets/TODOEMPTY.png" alt="¯\_(ツ)_/¯" />
    </div>
  );
}
export default Empty;

import css from "./Empty.module.css";
function Empty() {
  return (
    <div className={`${css["empty-div"]}`}>
      {" "}
      <div className={`${css["notes"]}`}>
        {" "}
        <div className="top">
          <h2 className="empty">Enjoy Your Day!</h2>
          <p className="emptyPara">No TODOs Found!</p>
        </div>
        <div className={`${css["one"]}`}>▨</div>
        <div className={`${css["one"]}`}>▨</div>
        <div className={`${css["one"]}`}>▨</div>
        <div className={` ${css["one"]}`}>
          <div>▨</div>
          <div className="empty-man">¯\_(ツ)_/¯</div>
        </div>
        <div className={`${css["one"]}`}>▨</div>
        <div className={`${css["one"]}`}>▨</div>
        <div className={`${css["one"]}`}>▨</div>
      </div>
    </div>
  );
}
export default Empty;

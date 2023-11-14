import nexIcon from "../assets/next.svg"

export const PrevButton = ({ enabled, onClick ,style}) => (
    <button  onClick={onClick} disabled={!enabled} className="embla__button">
      <img alt="" src={nexIcon} style={{transform: "rotate(180deg)", ...style}} />
    </button>
  )
export const NextButton = ({ enabled, onClick ,style}) => (
    <button  onClick={onClick} disabled={!enabled} className="embla__button">
      <img alt="" src={nexIcon} style={style} />
    </button>
  )
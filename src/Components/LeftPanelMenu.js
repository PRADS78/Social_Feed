import MenuOption from "./MenuOption";
import SeeMoreButton from "./SeeMoreButton";


function LeftPanelMenu({options}) {
  return (
    <>
    <MenuOption menuOption={options} />
    <SeeMoreButton seeMoreFunc={isSeeMoreOne} />
    </>
  )
}

export default LeftPanelMenu
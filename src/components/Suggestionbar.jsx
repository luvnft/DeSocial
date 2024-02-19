import UserInfo from "./UserInfo";

function RightSidebar() {
  return (
    <div className="right-sidebar-container">
      <h6 className="right-sidebar-heading">Follow</h6>
      <UserInfo Address="0xA04CB45701e018c30b3e558d9361e392BcBcEF2a" />
      <UserInfo Address="0x8EcB5056aD2Bdf463533D75559bD2A763ba22335" />
      <UserInfo Address="0x41fDBAAcAA6E2beb48cc7e279f39818Bd48770d6" />
    </div>
  );
}
export default RightSidebar;

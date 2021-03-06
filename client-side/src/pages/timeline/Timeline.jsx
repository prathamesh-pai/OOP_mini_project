import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./home.css"
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Timeline() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}

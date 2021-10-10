import comment from './images/comment.svg';
import heart from './images/heart.svg';
import ore from './images/ore.svg';
import save from './images/save.svg';
import send from './images/send.svg';
import share from './images/share.svg';
import './App.css';

function Fbpost({ description, postimg, userimg, username }) {

    var currentdate = new Date();
    var datetime =currentdate.getDay() + "/" + currentdate.getMonth()
        + "/" + currentdate.getFullYear() + " on "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    return (
        <div>
        <div className="post">
            <div className="head">
                <div className="name_profile">
                    <img
                        src={userimg}
                        className="avatar"
                        alt=""
                    ></img>
                    <div className="q">
                        <h4>{username}</h4>
                        <p>{datetime}</p>
                    </div>
                </div>
                <div className="icon">
                    <img src={ore} 
                    className="svg" alt=""
                    ></img>
                </div>

            </div>
            <div className="body">
                <p>{description}</p>
                <img
                    className="post_image"
                    src={postimg} alt=""
                ></img>
                <div className="btm_icon">
                    <div className="left_icon">
                        <img
                            src={heart}
                            className="svg margin" alt=""
                        ></img>
                        <img 
                        src={comment} alt="" 
                        className="svg margin"
                        ></img>
                        <img 
                        src={share} alt="" 
                        className="svg margin"
                        ></img>
                    </div>
                    <div className="right_icon">
                        <img 
                        src={save} alt="" 
                        className="svg margin"
                        ></img>
                    </div>
                </div>
                <form>
                    <div className="flex">
                        <img 
                        src={userimg} alt="" 
                        className="ico"
                        ></img>
                        <input
                            type="text"
                            name=""
                            placeholder="Enter Text..."
                            className="in"
                        ></input>

                    </div>
                    <img 
                    src={send} alt=""
                     className="svg margin"
                     ></img>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Fbpost;
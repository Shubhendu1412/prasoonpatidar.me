import React from "react";
import {FaFileAlt, FaMailBulk, FaLinkedin, FaMap} from 'react-icons/fa'
import './styles.css'
const About = () => {
    return (
        <div>
            <h1 className="heading"/>
            <img src="/profile.png" alt="portrait(Now Empty)" className="left" draggable={false}/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi erat mi, facilisis at elit ac, mattis commodo turpis.
                Cras vel rhoncus purus.
                Vivamus malesuada neque purus, ut ultrices ex fringilla sed.
                Ut interdum ante lorem, id pretium elit euismod sed. Donec accumsan id urna non gravida.
                Morbi orci leo, auctor vel semper nec, elementum a tellus.
                Maecenas orci nisi, hendrerit consequat neque at, pulvinar dapibus orci. Proin auctor ex quis felis eleifend, id iaculis lacus semper.
                <br/>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Donec id massa a libero condimentum elementum at et augue. Etiam eu placerat lectus, mollis egestas magna. Praesent id sem ante.
                Integer in risus quis turpis facilisis malesuada sed id est.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi erat mi, facilisis at elit ac, mattis commodo turpis.
                Cras vel rhoncus purus.
                Vivamus malesuada neque purus, ut ultrices ex fringilla sed.
                Ut interdum ante lorem, id pretium elit euismod sed. Donec accumsan id urna non gravida.
                Morbi orci leo, auctor vel semper nec, elementum a tellus.
                Maecenas orci nisi, hendrerit consequat neque at, pulvinar dapibus orci. Proin auctor ex quis felis eleifend, id iaculis lacus semper.
                <br/>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Donec id massa a libero condimentum elementum at et augue. Etiam eu placerat lectus, mollis egestas magna. Praesent id sem ante.
                Integer in risus quis turpis facilisis malesuada sed id est.
            </p>
            <br/>
            <p>
                <FaFileAlt/>
                <a className="link" href="/" target="_blank">Resume</a>
                <FaMailBulk/>
                <a className="link" href="/" target="_blank">prasoonpatidar@cmu.edu</a>
                <FaLinkedin/>
                <a className="link" href="/" target="_blank">LinkedIn</a>
                <FaMap/>
                <a className="link" href="/" target="_blank">Location</a>
            </p>
        </div>
    )
};

export default About;
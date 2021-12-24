import React from "react";
import './styles.css';
import YoutubeEmbed from "../../components/video/YoutubeEmbed";
import Footer from "../../components/footer/footer";

const Projects = () => {
    return (
        <>
            <div className="projects-topic">
                <h1 className="project-header">In accumsan pulvinar feugiat</h1>
                <YoutubeEmbed embedId="rokGy0huYEA" />
                <p className="content">Morbi fringilla eros at quam condimentum maximus. Ut justo quam, vestibulum ac pulvinar ac, cursus et eros. Nulla non purus nibh. Praesent finibus orci turpis, non venenatis ligula cursus quis. In eu erat id justo aliquet rhoncus aliquam a arcu. Phasellus a justo et metus accumsan maximus. Cras porttitor velit et magna facilisis, ut ullamcorper neque lacinia. Aliquam commodo lorem tristique risus varius condimentum. Sed at fermentum massa.</p>
                <a className="button" target="_blank" href="/">CONTENT</a>
                <a className="button" target="_blank" href="/">CONTENT1</a>
                <a className="button" target="_blank" href="/">CONTENT2</a>
            </div>
            <Footer name="Prasoon Patidar"/>
        </>
    )
}

export default Projects;
// Template for a Publication JSX Element

const PublicationTemplate = (props) => {
    return(
        <div>
            {/* Define the mapped components here, use the passed in props "data" */}
            <a href={props.link} class="publicationTemplate" target="_blank">
                {props.title}
                <br/>
                <br/>
            </a>
        </div>
    );
};

export default PublicationTemplate;
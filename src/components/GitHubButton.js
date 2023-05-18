import gitHub from "./../styles/img/icons/gitHub-black.svg"
import "./GitHubButton"
function GitHubButton({ link }) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHub} alt="" />
            GitHub repo
        </a>
    )
}


export default GitHubButton
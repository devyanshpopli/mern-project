export default function Post(){
    return(
        <div className="post">
        <div className="image">
        <img src="https://wemakedevs.org/static/media/aboutus.02f2915b9ae736e9ef8a.png" alt=""/>
        </div>
        <div className="texts">
        <h2>Title</h2>
        <p className="info">
          <a className="author">John Doe</a>
          <time>20023-06-11 13:45</time>
        </p>
        <p className="summary">Yes. That is the highlight of our community. Get expert guidance from industry experts from around the world. You can learn more and get inspired by their stories and roadmaps via the podcast Open Source Cafe.</p>
        </div>
        </div>
        
    );
}
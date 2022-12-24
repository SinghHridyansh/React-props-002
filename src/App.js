import './index.css';


const News = (props) =>{
    return(
      <div className='newsStrip'>
        <div className='left'>
          <div className='avatar'>
            <img className='avatar-img' src='https://thumbs.dreamstime.com/b/gray-man-avatar-design-concept-ai-supported-81256396.jpg' alt=''/>
            <h4 className='avatar-name'>{props.name}</h4>
          </div>
          <div className='newsSection'>
            <h2 className='heading'>{props.heading}</h2>
            <p className='desc'>{props.desc}</p>
          </div>
          <div className='interaction'>
            <div className='interaction2'>
              <p>{props.date}</p>
              <p>{props.read}</p>
              <button>{props.tag}</button>
            </div>
            <img className='bookmark-icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_bookmark.svg/1200px-OOjs_UI_icon_bookmark.svg.png' alt=''></img>
          </div>
        </div>
        <div className='right'>
          <img className='newsimg' src={props.newsimg} alt=''/>
        </div>
      </div>
    );
  };

function App() {
  return (
    <div className='main'>
      <News name="Eric Feng" heading="Why are there so many Web3 startups?" desc="This week, Pitchbook published their latest Emerging Tech Indicator (ETI) report which tracks early stage investment activity..." date="Dec 4" read="6 min read" tag="Web3" newsimg="https://st2.depositphotos.com/3591429/5245/i/450/depositphotos_52451299-stock-photo-people-and-startup-business-concept.jpg"></News>
      <News name="Chasten Buttigieg" heading="What Marriage Means to Me" desc="After dropping the kids off, I came home and stopped in the kitchen to take in the aftermath of our chaotic morning together...." date="Nov 29" read="3 min read" tag="Parenting" newsimg="https://media.istockphoto.com/id/1215892497/photo/family-bonding-time.jpg?s=612x612&w=0&k=20&c=F8MRD2ajQGey9K3lyab1njzasyiKEd8LUsTTNsoIu20="></News>
      <News name="Nicholas Moryl" heading="Leaving San Francisco" desc="Letting qo with love." date="Nov 23" read="8 min read" tag="Change" newsimg="https://us.123rf.com/450wm/auxins/auxins2209/auxins220901135/auxins220901135.jpg?ver=6"></News>
    </div>
  );
}

export default App;

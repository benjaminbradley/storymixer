import { useState } from 'react';
import './App.css';

const genres = [
	'Tragedy',
	'Comedy',
	'Thriller',
	'Fantasy',
	'Mystery',
	'Western',
	'Sports',
	'Adventure',
	'Historical',
	'Superhero',
	'War',
	'Horror',
	'Chick Lit',
	'Magical Realism',
	'Science Fiction',
];

const stories = [
	'Hades and Persephone',
	'Murder of Osiris',
	'Hercules and Omphale',
	'Purification of Izanagi',
	'Odin’s Discovery of the Runes',
	'Beauty and the Beast',
	'The Snow Maiden',
	'Hansel and Gretel',
	'Ishtar’s Journey to the Underworld',
	'Invisible Man (1952) By Ralph Ellison',
	'Lolita (1955) By Vladimir Nabokov',
	'The Joy Luck Club (1989) ',
	'By Amy Tan',
	'My Brilliant Friend (2012) ',
	'By Elena Ferrante',
	'Othello',
	'The Tempest',
	'A Midsummer Night’s Dream',
	'Hamlet',
];

function randomChoice(data) {
  const randIdx = Math.floor(Math.random() * data.length);
  return data[randIdx];
}

function makeNewStory() {
  const genre = randomChoice(genres);
  const story = randomChoice(stories);
  return `${story} told in the style of ${genre}`;
}


function App() {
  const [pastStories, setPastStories] = useState([]);
  const [curStory, setCurStory] = useState(false);

  const doNewStory = () => {
	  if (curStory) {
	    pastStories.unshift(curStory);
      setPastStories(pastStories);
	  }
    const newStory = makeNewStory();
    setCurStory(newStory);
  };


  return (
    <div className="App">
      <h1>Story Mixer</h1>
      <button
        onClick={doNewStory}
      >
        New Story!
      </button>
      {curStory &&
        <div className="curStory">
          {curStory}
        </div>
      }
      {pastStories.length > 0 &&
        <div className="pastStories">
          {pastStories.map((s,i) => <p key={i}>{s}</p>)}
        </div>
      }
    </div>
  );
}

export default App;

import { Feature } from '../../components';
import './whatgpt3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-4"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nobis maiores sapiente id necessitatibus. Enim ab excepturi ea, esse molestiae dolores? Itaque reprehenderit voluptates odio?"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="ChatBots"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, minus?"
        />
        <Feature
          title="Knowledge"
          text="Lorem ipsum dolor sit amet consectetur adipisicing."
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur nesciunt deserunt ipsa sit ut!"
        />
      </div>
    </div>
  );
}

export default WhatGPT3

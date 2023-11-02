import { useState } from 'react';
import './accordion.css';

export type Topic = {
  id: number;
  title: string;
  content: string;
};
type Props = {
  topics: Topic[];
};
export function Accordion({ topics }: Props) {
  const [openTopic, setOpenTopic] = useState<Topic>();
  function handleClick(clickedTopic: Topic) {
    if (clickedTopic === openTopic) {
      setOpenTopic(undefined);
    } else {
      setOpenTopic(clickedTopic);
    }
  }
  return (
    <div>
      {topics.map((topic) => (
        <TopicCard
          topic={topic}
          isOpen={openTopic === topic}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
type CardProps = {
  topic: Topic;
  isOpen: boolean;
  onClick: (topic: Topic) => void;
};
function TopicCard({ topic, isOpen, onClick }: CardProps) {
  return (
    <div className="topic">
      <div onClick={() => onClick(topic)} className="topic-title">
        <h3>{topic.title}</h3>
      </div>
      {isOpen && <div className="topic-content">{topic.content}</div>}
    </div>
  );
}

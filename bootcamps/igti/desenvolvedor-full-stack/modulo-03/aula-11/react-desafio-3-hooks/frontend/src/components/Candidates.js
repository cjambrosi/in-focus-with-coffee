import React from 'react'
import FlipMove from 'react-flip-move';
import Card from './Card';
import Candidate from './Candidate';

export default function Candidates({ candidates, previousVotes, previousPercentages }) {
  return (
    <div>
      <FlipMove>
        {candidates.map((candidate, index) => {
          const { id } = candidate;
          const previousVoteObject = previousVotes.find(item => item.id === id);
          const previousVote = !!previousVoteObject ? previousVoteObject.votes : 0;

          const previousPercentageObject = previousPercentages.find(item => item.id === id);
          const previousPercentage = !!previousPercentageObject ? previousPercentageObject.percentage : 0;
          
          return (
            <div key={id}>
              <Card>
                <Candidate previousPercentage={previousPercentage} previousVote={previousVote} candidate={candidate} position={++index} />
              </Card>
            </div>
          );
        })}
      </FlipMove>
    </div>
  )
}

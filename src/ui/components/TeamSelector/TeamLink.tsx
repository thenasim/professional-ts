import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const TeamLink: React.FC<any> = ({ team }) => {
  const match = useRouteMatch({
    path: `/team/${team.id}`,
    exact: false,
  });

  return (
    <Link
      to={`/team/${team.id}/channel/${team.channels[0].id}`}
      className={
        'team-selector__team-button cursor-pointer rounded-lg p-2 pl-4 inline-block sm:block no-underline opacity-25 ' +
        (match ? 'opacity-100' : '')
      }
    >
      <div className="flex items-center justify-center w-12 h-12 mb-1 overflow-hidden text-2xl font-semibold text-black bg-white rounded-lg">
        <img
          className="team-selector__team-logo"
          src={team.iconUrl}
          alt={`Join the ${name} chat`}
        />
      </div>
    </Link>
  );
};

export default TeamLink;

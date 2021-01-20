import * as React from 'react';
import ChannelLink from './TeamSidebar/ChannelLink';

const TeamSidebar: React.FC<any> = ({ team }) => {
  return (
    <section className="flex flex-col flex-none h-full pb-6 text-purple-300 bg-indigo-800 team-sidebar md:w-64 sm:w-48">
      <header className="flex justify-between px-4 mt-3 mb-2 text-white team-sidebar__header">
        <div className="flex-auto">
          <h1 className="mt-2 mb-1 text-xl font-semibold leading-tight truncate team-sidebar__team-name">
            {team.name}
          </h1>

          <div className="flex items-center mb-6 team-sidebar__current-user-indicator">
            <svg
              aria-hidden="true"
              className="w-2 h-2 mr-2 text-green-500 fill-current"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="10"></circle>
            </svg>
            <span className="text-sm text-white opacity-75 team-sidebar__current-user-name">
              Chris User
            </span>
          </div>
        </div>

        <button disabled>
          <svg
            aria-hidden="true"
            className="hidden w-6 h-6 text-white opacity-25 fill-current sm:block"
            viewBox="0 0 20 20"
          >
            <path
              d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </header>

      <nav className="flex flex-col flex-1 mb-4 team-sidebar__channels-list">
        <div className="flex items-center justify-between px-4 mb-2 text-white">
          <h2 className="text-lg opacity-75">Channels</h2>

          <button
            className="text-white team-sidebar__join-channel-button"
            aria-label="join a new channel"
            role="button"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 opacity-50 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
            </svg>
          </button>
        </div>
        {team.channels.map((ch: any) => (
          <ChannelLink
            key={ch.id}
            to={`/team/${team.id}/channel/${ch.id}`}
            channel={ch}
          />
        ))}
      </nav>
      <footer className="mx-4 text-white">
        <button className="p-2 text-white bg-gray-500 rounded hover:bg-red-800 team-sidebar__logout-button">
          Logout
        </button>
      </footer>
    </section>
  );
};

export default TeamSidebar;

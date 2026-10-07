import { useState } from 'react';
import closedEnv from '../assets/lace/envelope-closed.png';
import openEnv from '../assets/lace/envelope-open.png';
import seal from '../assets/lace/seal.png';

export default function LetterReveal({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`letter-stage${open ? ' is-open' : ''}`}>
      <div className="letter-garden" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="envelope-scene">
        <button
          type="button"
          className="envelope-closed"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label="Open the letter"
        >
          <img src={closedEnv} alt="" />
          <img className="envelope-wax" src={seal} alt="" />
        </button>

        <div className="envelope-opened" aria-hidden={!open}>
          <img src={openEnv} alt="" />
        </div>

        <div className="letter-sheet" aria-hidden={!open}>
          <span className="letter-washi" aria-hidden="true" />
          <button
            type="button"
            className="letter-close"
            onClick={() => setOpen(false)}
          >
            close
          </button>
          {children}
        </div>
      </div>

      <p className="envelope-hint">click to open</p>
    </div>
  );
}

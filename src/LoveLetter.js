import React from "react";
import { useState } from "react";

function LoveLetter({ letters, salutation, signature }) {
  const [hideLetter, setHideLetter] = useState(false);
  const showLetters = () => {
    setHideLetter(!hideLetter);
  };

  return (
    <div>
      <>
        {letters && (
          <div>
            <div className="letters">
              <div className="salutation-hide-letter">
                <h3 className="salutation">{salutation}</h3>

                <p className="hide-letter" onClick={showLetters}>
                  {hideLetter ? "Hide Note" : "Reveal Note"}
                </p>
              </div>
              {hideLetter && (
                <div>
                  <p className="letter-body">{letters}</p>
                  <h3 className="signature">{signature}</h3>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default LoveLetter;
